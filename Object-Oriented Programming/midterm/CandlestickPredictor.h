#pragma once
#include "Candlestick.h"
#include <vector>
#include <string>

class CandlestickPredictor
{
public:
    static std::vector<Candlestick> predictMovingAverage(const std::vector<Candlestick>& candlesticks, int windowSize);
};
