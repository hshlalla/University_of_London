#include "CandlestickCalculator.h"
#include <algorithm>
#include <numeric>

std::vector<Candlestick> CandlestickCalculator::computeCandlesticks(const std::vector<TemperatureEntry>& entries, const std::string& country)
{
    std::vector<Candlestick> candlesticks;
    auto groupedData = groupByYear(entries, country);

    std::string previousYear = "";
    double previousClose = 0.0;

    for (const auto& [year, values] : groupedData)
    {
        if (values.empty())
            continue;

        double open = previousClose;
        double high = *std::max_element(values.begin(), values.end());
        double low = *std::min_element(values.begin(), values.end());
        double close = std::accumulate(values.begin(), values.end(), 0.0) / values.size();

        candlesticks.emplace_back(year, open, high, low, close);
        previousClose = close;
    }

    return candlesticks;
}

std::map<std::string, std::vector<double>> CandlestickCalculator::groupByYear(const std::vector<TemperatureEntry>& entries, const std::string& country)
{
    std::map<std::string, std::vector<double>> groupedData;

    for (const auto& entry : entries)
    {
        if (entry.getCountry() != country)
            continue;

        std::string year = entry.getTimestamp().substr(0, 4); // Extract year from timestamp
        groupedData[year].push_back(entry.getValue());
    }

    return groupedData;
}
