#include "CandlestickPredictor.h"
#include <numeric>

std::vector<Candlestick> CandlestickPredictor::predictMovingAverage(const std::vector<Candlestick>& candlesticks, int windowSize)
{
    std::vector<Candlestick> predictions;

    for (size_t i = 0; i < candlesticks.size() - windowSize + 1; ++i)
    {
        double sumOpen = 0.0, sumHigh = 0.0, sumLow = 0.0, sumClose = 0.0;
        std::string date = candlesticks[i + windowSize - 1].getDate(); // Use the last date in the window

        for (size_t j = 0; j < windowSize; ++j)
        {
            sumOpen += candlesticks[i + j].getOpen();
            sumHigh += candlesticks[i + j].getHigh();
            sumLow += candlesticks[i + j].getLow();
            sumClose += candlesticks[i + j].getClose();
        }

        double avgOpen = sumOpen / windowSize;
        double avgHigh = sumHigh / windowSize;
        double avgLow = sumLow / windowSize;
        double avgClose = sumClose / windowSize;

        // Corrected order of arguments
        predictions.emplace_back(date, avgOpen, avgHigh, avgLow, avgClose);
    }

    return predictions;
}
