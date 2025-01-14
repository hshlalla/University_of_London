#pragma once

#include "TemperatureEntry.h"
#include <vector>
#include <string>

class CSVReader
{
public:
    CSVReader();

    // Reads a CSV file and returns a vector of TemperatureEntry objects
    static std::vector<TemperatureEntry> readCSV(const std::string& filename);

    // Splits a CSV line into tokens based on the separator
    static std::vector<std::string> tokenize(const std::string& line, char separator);

private:
    // Converts a vector of strings to a TemperatureEntry
    static TemperatureEntry stringsToTemperatureEntry(const std::vector<std::string>& tokens);
};