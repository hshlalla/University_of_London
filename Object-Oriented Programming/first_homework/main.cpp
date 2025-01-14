#include <iostream>
#include <vector>
#include <string>
#include "OrderBookEntry.h"
#include "MerKelMain.h"


int main()
{
    MerkelMain app{};
    app.init();
}

// {
//     

//     double AveragePrice = computeAveragePrice(entries);
//     double HighPrice = computeLowPrice(entries);
//     double LowPrice = computeHighPrice(entries);
//     double PriceSpread = computePriceSpread(entries);


//     std::cout << "AveragePrice : "   << AveragePrice << std::endl;
//     std::cout << "LowPrice : "   << HighPrice << std::endl;
//     std::cout << "HighPrice : "   << LowPrice << std::endl;
//     std::cout << "PriceSpread : "   << PriceSpread << std::endl;



//     for (OrderBookEntry& e : entries)
//     {
//         std::cout << "Price : "     << e.price << std::endl;
//         std::cout << "Amount : "    << e.amount << std::endl;
//         std::cout << "TimeStamp : " << e.timestamp << std::endl;
//         std::cout << "Product : "   << e.product << std::endl;


//     }



//     return 0;
// }


