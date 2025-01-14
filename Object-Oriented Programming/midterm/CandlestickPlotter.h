#pragma once
#include "Candlestick.h"
#include <vector>

class CandlestickPlotter
{
public:
    static void plot(const std::vector<Candlestick>& candlesticks);
};
