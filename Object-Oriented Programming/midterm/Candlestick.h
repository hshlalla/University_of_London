#pragma once

#include <string>
#include <vector>

class Candlestick
{
public:
    Candlestick(const std::string& date, double open, double high, double low, double close);

    std::string getDate() const;
    double getOpen() const;
    double getHigh() const;
    double getLow() const;
    double getClose() const;

private:
    std::string date; // Year or specific time frame
    double open;      // Open value 
    double high;      // High value
    double low;       // Low value
    double close;     // Close value 
};