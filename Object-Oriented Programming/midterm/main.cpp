#include "CSVReader.h"
#include "CandlestickCalculator.h"
#include "TemperatureEntry.h"
#include "Candlestick.h"
#include "CandlestickPlotter.h"
#include "CandlestickFilter.h"
#include "CandlestickPredictor.h"
#include <iostream>
#include <vector>
#include <string>

int main()
{
    // Load CSV data
    std::string filename = "weather_data_EU_1980-2019_temp_only.csv"; 
    std::vector<TemperatureEntry> entries = CSVReader::readCSV(filename);

    // Task1: Compute candlestick data for a specific country
    std::string country = "GB"; 
    std::vector<Candlestick> candlesticks = CandlestickCalculator::computeCandlesticks(entries, country);

    // Task 3: Filter by date range
    std::string startDate = "1985-01-01";
    std::string endDate = "2019-12-31";
    std::vector<Candlestick> filteredByDate = CandlestickFilter::filterByDateRange(candlesticks, startDate, endDate);

    // Task 3: Filter by temperature range
    double minTemp = -5.0;
    double maxTemp = 25.0;
    std::vector<Candlestick> filteredByTemp = CandlestickFilter::filterByTemperatureRange(filteredByDate, minTemp, maxTemp);

    // Print filtered candlestick data (Task 3 result)
    std::cout << "\nFiltered Candlestick Data (by date range and temperature):\n";
    // Print data (Task 1 result)
    for (const auto& candlestick : filteredByTemp)
    {
        std::cout << "Date: " << candlestick.getDate()
                  << ", Open: " << candlestick.getOpen()
                  << ", High: " << candlestick.getHigh()
                  << ", Low: " << candlestick.getLow()
                  << ", Close: " << candlestick.getClose() << std::endl;
    }

    // Plot the filtered candlestick data (Task 3)
    std::cout << "\nFiltered Candlestick Plot:\n";
    CandlestickPlotter::plot(filteredByTemp);

    // Task 4: Generate predicted data using moving average
    int windowSize = 3; // Moving average window size
    std::vector<Candlestick> predictions = CandlestickPredictor::predictMovingAverage(filteredByTemp, windowSize);

    // Print predicted candlestick data (Task 4 result)
    std::cout << "\nPredicted Candlestick Data (using Moving Average):\n";
    for (const auto& candlestick : predictions)
    {
        std::cout << "Date: " << candlestick.getDate()
                  << ", Open: " << candlestick.getOpen()
                  << ", High: " << candlestick.getHigh()
                  << ", Low: " << candlestick.getLow()
                  << ", Close: " << candlestick.getClose() << std::endl;
    }

    // Plot the predicted candlestick data (Task 4)
    std::cout << "\nPredicted Candlestick Plot:\n";
    // Plotting data (Task 2)
    CandlestickPlotter::plot(predictions);

    return 0;
}
