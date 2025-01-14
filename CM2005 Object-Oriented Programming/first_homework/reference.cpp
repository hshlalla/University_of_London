/*
 * C++ https://www.coursera.org/learn/cplusplus-crypto-ii
 * Week 1/2
 *
 * Demo: https://i.imgur.com/mXwLTxk.gif
 * =====================================
 *
 * 1. OrderBookEntry class with appropriate data types to represent a the fields
 * in a row in the data file
 *
 * > Implemented OrderBookType with two constructors.
 *
 * 2. OrderBookEntry class has a constructor taking an appropriate set of
 * arguments
 *
 * > There is one constructor taking all arguments and one empty constructor.
 *
 * 3. Main function creates a vector of OrderBookEntry objects
 *
 * > Variable name: orders.
 *
 * 4. Main function iterates over the vector calculating some basic stats
 *
 * > We moved the iteration into a stats function: orderBookStats.
 *
 */
#include <fstream>
#include <iostream>
#include <map>
#include <sstream>
#include <string>
#include <vector>

#include "colors.h"

/** OrderBookType is either a bid or ask. */
enum class OrderBookType {
    bid,
    ask
};

/** OrderBookEntry is a single row from an orderbook. */
class OrderBookEntry {
public:
    // OrderBookEntry is an empty constructor.
    OrderBookEntry() { }
    // OrderBookEntry with all required fields.
    OrderBookEntry(double price,
        double amount,
        std::string timestamp,
        std::string product,
        OrderBookType orderType)
        : price(price)
        , amount(amount)
        , timestamp(timestamp)
        , product(product)
        , orderType(orderType)
    {
    }
    /* member variables, currently public */
    double price;
    double amount;
    std::string timestamp;
    std::string product;
    OrderBookType orderType;

    /* fromLine constructs an OrderBookEntry from a comma separated line. We
     * currently do not implement this as a constructor, because we want to
     * signal a parse error to the caller, here through error codes. */
    int fromLine(std::string line)
    {
        std::string field;
        std::stringstream ss;
        ss.str(line);
        int i = 0;
        while (std::getline(ss, field, ',')) {
            switch (i) {
            case 0:
                this->timestamp = field;
                break;
            case 1:
                this->product = field;
                break;
            case 2:
                if (field.compare("ask")) {
                    this->orderType = OrderBookType::ask;
                } else if (field.compare("bid")) {
                    this->orderType = OrderBookType::bid;
                } else {
                    std::cerr << "warn: invalid order type: " << field << std::endl;
                    return 1;
                }
                break;
            case 3:
                this->price = std::stod(field);
                break;
            case 4:
                this->amount = std::stod(field);
                break;
            }
            i++;
        }
        if (i != 5) {
            std::cerr << "warn: unexpected number of fields" << std::endl;
            return 1;
        }
        return 0;
    }
};

/** padTo returns a copy of the string front-padded with paddingChar. */
std::string padTo(std::string s, const size_t num, const char paddingChar = ' ')
{
    if (num < s.size()) {
        return s;
    }
    std::string p = s;
    p.insert(p.begin(), num - p.size(), paddingChar);
    return p;
}

/** incrementKey increments the value for key by 1 or sets it to 1. */
void incrementKey(std::map<std::string, int>& m, std::string key)
{
    if (m.find(key) != m.end()) {
        m[key]++;
    } else {
        m.insert(std::map<std::string, int>::value_type(key, 1));
    }
}

/** orderBookStats dumps a few stats to stdout */
void orderBookStats(std::vector<OrderBookEntry> orders)
{
    std::map<std::string, int> stats;
    std::cout << GRN "==== order book stats ====" reset << std::endl;
    for (OrderBookEntry order : orders) {
        if (order.orderType == OrderBookType::bid) {
            incrementKey(stats, "bids");
            incrementKey(stats, order.product + "-BID");
        }
        if (order.orderType == OrderBookType::ask) {
            incrementKey(stats, "asks");
            incrementKey(stats, order.product + "-ASK");
        }
        incrementKey(stats, order.product);
        incrementKey(stats, order.timestamp);
    }
    stats["total"] = stats["bids"] + stats["asks"];
    for (const auto& [key, value] : stats) {
        std::cout << padTo(key, 26) << YEL " => " reset << value << std::endl;
    }
    std::cout << GRN "==========================" reset << std::endl;
}

int main(int argc, char* argv[])
{
    std::vector<OrderBookEntry> orders;
    // We read from a file, which is expected to be in the same folder.
    std::ifstream infile { "20200317.csv" };
    // Temporary space for a single line.
    std::string line;
    unsigned long lineno = 0; // max lines 4_294_967_295
    // iterate oder lines, and parse each line into an OrderBookEntry; skip
    // line on unparsed entities.
    while (getline(infile, line, '\n')) {
        lineno++;
        OrderBookEntry entry;
        if (entry.fromLine(line) != 0) {
            std::cerr << "warn: skipping line " << lineno << std::endl;
            continue;
        }
        // Only if we successfully parsed the entry, we add it to orders.
        orders.push_back(entry);
    }
    std::cout << "read " << orders.size() << " orders from file" << std::endl;
    // Some basic stats.
    orderBookStats(orders);
}