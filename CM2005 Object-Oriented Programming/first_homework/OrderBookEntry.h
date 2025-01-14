#pragma once
#include <string>
#include <vector>

enum class OrderBookType {bid,ask};
class OrderBookEntry
{
    public:

    OrderBookEntry( 
        double _price, 
        double _amount,
        std::string _timestamp,
        std::string _product,
        OrderBookType _orderType);
    double price;
    double amount;
    std::string timestamp;
    std::string product;
    OrderBookType orderType;
};

double computeAveragePrice(std::vector<OrderBookEntry>& entries);
double computeLowPrice(std::vector<OrderBookEntry>& entries);
double computeHighPrice(std::vector<OrderBookEntry>& entries);
double computePriceSpread(std::vector<OrderBookEntry>& entries);


