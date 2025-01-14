#pragma once
#include "Candlestick.h"
#include <vector>
#include <string>

class CandlestickFilter
{
public:
    static std::vector<Candlestick> filterByDateRange(const std::vector<Candlestick>& candlesticks, const std::string& startDate, const std::string& endDate);
    static std::vector<Candlestick> filterByTemperatureRange(const std::vector<Candlestick>& candlesticks, double minTemp, double maxTemp);
};
