#include <iostream>
#include <vector>
#include <string>


enum class OrderBookType {bid,ask};
class OrderBookEntry
{
    public:

    OrderBookEntry( 
        double _price, 
        double _amount,
        std::string _timestamp,
        std::string _product,
        OrderBookType _orderType)
        {
            price = _price;
            amount = _amount;
            timestamp = _timestamp;
            product = _product;
            orderType = _orderType;
        }
    double price;
    double amount;
    std::string timestamp;
    std::string product;
    OrderBookType orderType;
};




double computeAveragePrice(std::vector<OrderBookEntry>& entries)
{

    // entries가 비어있으면 0리턴
    if (entries.empty())
    {
        return 0.0;
    }

    double totalPrice = 0.0;
    for (size_t i= 0; i< entries.size(); ++i)
    {
        totalPrice += entries[i].price;
    }

    return totalPrice / entries.size();
}

double computeLowPrice(std::vector<OrderBookEntry>& entries)
{

    if (entries.empty())
    {
        return 0.0;
    }

    double LowPrice = entries[0].price;
    for (size_t i = 1; i< entries.size(); ++i)
    {
        if (LowPrice > entries[i].price)
        {
            LowPrice=entries[i].price;
        }
    }

    return LowPrice;
}

double computeHighPrice(std::vector<OrderBookEntry>& entries)
{
    if (entries.empty())
    {
        return 0.0;
    }

    double HighPrice = entries[0].price;
    for (size_t i = 1; i<entries.size(); ++i)
    {
        if (HighPrice < entries[i].price)
        {
            HighPrice = entries[i].price;
        }
    }
    return HighPrice;
}

double computePriceSpread(std::vector<OrderBookEntry>& entries)
{
    double LowPrice = computeLowPrice(entries);
    double HighPrice = computeHighPrice(entries);

    return HighPrice - LowPrice;

}

void printMenu()
{
    // 1 print help
    std::cout << "1: Print help " << std::endl;
    // 2 print exchange stats
    std::cout << "2: Print exchange stats" << std::endl;
    // 3 make an offer
    std::cout << "3: Make an offer " << std::endl;
    // 4 make a bid 
    std::cout << "4: Make a bid " << std::endl;
    // 5 print wallet
    std::cout << "5: Print wallet " << std::endl;
    // 6 continue   
    std::cout << "6: Continue " << std::endl;

    std::cout << "============== " << std::endl;
}

void printHelp()
{
    std::cout << "Help - your aim is to make money. Analyse the market and make bids and offers. " << std::endl;
}

void  printMarketStats()
{
    std::cout << "Market looks good. " << std::endl;
}

void enterOffer()
{
    std::cout << "Mark and offer - enter the amount " << std::endl;
}

void enterBid()
{
    std::cout << "Make a bid - enter the amount" << std::endl;
}

void printWallet()
{
    std::cout << "Your wallet is empty. " << std::endl;
}
        
void gotoNextTimeframe()
{
    std::cout << "Going to next time frame. " << std::endl;
}
 
int getUserOption()
{
    int userOption;

    std::cout << "Type in 1-6" << std::endl;
    std::cin >> userOption;
    std::cout << "You chose: " << userOption << std::endl;
    return userOption;
}

void processUserOption(int userOption)
{
    if (userOption == 0) // bad input
    {
        std::cout << "Invalid choice. Choose 1-6" << std::endl;
    }
    if (userOption == 1) // bad input
    {
        printHelp();
    }
    if (userOption == 2) // bad input
    {
        printMarketStats();
    }
    if (userOption == 3) // bad input
    {
        enterOffer();
    }
    if (userOption == 4) // bad input
    {
        enterBid();
    }
    if (userOption == 5) // bad input
    {
        printWallet();
    }
    if (userOption == 6) // bad input
    {
        gotoNextTimeframe();
    }       
}


int main()
{
    std::vector<OrderBookEntry> entries;
    entries.push_back(
        OrderBookEntry{0.02187308,7.44564869,
        "2020/03/17 17:01:24.884492",
        "ETH/BTC",
        OrderBookType::bid});
    entries.push_back(
        OrderBookEntry{0.02187307,3.467434,
        "2020/03/17 17:01:24.884492",
        "ETH/BTC",
        OrderBookType::bid});

    entries.push_back(
        OrderBookEntry{0.02187305,6.85567013,
        "2020/03/17 17:01:24.884492",
        "ETH/BTC",
        OrderBookType::bid});

    double AveragePrice = computeAveragePrice(entries);
    double HighPrice = computeLowPrice(entries);
    double LowPrice = computeHighPrice(entries);
    double PriceSpread = computePriceSpread(entries);


    std::cout << "AveragePrice : "   << AveragePrice << std::endl;
    std::cout << "LowPrice : "   << HighPrice << std::endl;
    std::cout << "HighPrice : "   << LowPrice << std::endl;
    std::cout << "PriceSpread : "   << PriceSpread << std::endl;



    for (OrderBookEntry& e : entries)
    {
        std::cout << "Price : "     << e.price << std::endl;
        std::cout << "Amount : "    << e.amount << std::endl;
        std::cout << "TimeStamp : " << e.timestamp << std::endl;
        std::cout << "Product : "   << e.product << std::endl;


    }



    return 0;
}


