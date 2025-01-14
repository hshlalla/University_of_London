#include "OrderBookEntry.h"
#include <string>

OrderBookEntry::OrderBookEntry( 
        double _price, 
        double _amount,
        std::string _timestamp,
        std::string _product,
        OrderBookType _orderType)
: price(_price),
amount(_amount),
timestamp(_timestamp),
product(_product),
orderType(_orderType)
        {

        }

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