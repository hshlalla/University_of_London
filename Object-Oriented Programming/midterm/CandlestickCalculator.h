#pragma once

#include "TemperatureEntry.h"
#include "Candlestick.h"
#include <vector>
#include <string>
#include <map>

class CandlestickCalculator
{
public:
    // Computes candlestick data for a specific country and time frame 
    static std::vector<Candlestick> computeCandlesticks(const std::vector<TemperatureEntry>& entries, const std::string& country);

private:
    // Helper to group data by year
    static std::map<std::string, std::vector<double>> groupByYear(const std::vector<TemperatureEntry>& entries, const std::string& country);
};