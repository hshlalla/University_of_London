#include "CandlestickFilter.h"

std::vector<Candlestick> CandlestickFilter::filterByDateRange(const std::vector<Candlestick>& candlesticks, const std::string& startDate, const std::string& endDate)
{
    std::vector<Candlestick> filtered;
    for (const auto& candlestick : candlesticks)
    {
        if (candlestick.getDate() >= startDate && candlestick.getDate() <= endDate)
        {
            filtered.push_back(candlestick);
        }
    }
    return filtered;
}

std::vector<Candlestick> CandlestickFilter::filterByTemperatureRange(const std::vector<Candlestick>& candlesticks, double minTemp, double maxTemp)
{
    std::vector<Candlestick> filtered;
    for (const auto& candlestick : candlesticks)
    {
        if (candlestick.getLow() >= minTemp && candlestick.getHigh() <= maxTemp)
        {
            filtered.push_back(candlestick);
        }
    }
    return filtered;
}