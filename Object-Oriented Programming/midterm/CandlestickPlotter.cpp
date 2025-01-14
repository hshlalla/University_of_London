#include "CandlestickPlotter.h"
#include <iostream>
#include <iomanip>
// Task 2: plotting table
void CandlestickPlotter::plot(const std::vector<Candlestick>& candlesticks)
{
    const double fixedLow = -10.0; // Fixed lower bound
    const double fixedHigh = 30.0; // Fixed upper bound
    const double scaleFactor = 1.5; // Scale factor for narrower plot
    const int plotWidth = static_cast<int>((fixedHigh - fixedLow) * scaleFactor); // Total plot width
    const int zeroScaled = static_cast<int>((0 - fixedLow) * scaleFactor); // Zero marker position

    std::cout << "\nCandlestick Plot:\n";
    std::cout << "Date       | Plot\n";
    std::cout << "---------------------------------------------\n";

    for (const auto& candlestick : candlesticks)
    {
        double open = candlestick.getOpen();
        double high = candlestick.getHigh();
        double low = candlestick.getLow();
        double close = candlestick.getClose();
        std::string date = candlestick.getDate();

        // Adjust scale based on fixed bounds
        int highScaled = static_cast<int>((high - fixedLow) * scaleFactor);
        int openScaled = static_cast<int>((open - fixedLow) * scaleFactor);
        int closeScaled = static_cast<int>((close - fixedLow) * scaleFactor);
        int lowScaled = static_cast<int>((low - fixedLow) * scaleFactor);


        // Print date
        std::cout << std::setw(10) << date << " | ";

        // Plot the candlestick with zero position aligned
        for (int i = 0; i <= plotWidth; ++i)
        {
            if (i == zeroScaled)
                std::cout << "o"; // Zero marker
            else if (i == highScaled)
                std::cout << "-"; // High marker
            else if (i == lowScaled)
                std::cout << "-"; // Low marker
            else if (i == openScaled)
                std::cout << "|"; // Open marker
            else if (i == closeScaled)
                std::cout << "|"; // Close marker
            else
                std::cout << " ";
        }

        std::cout << "\n";
    }
}

