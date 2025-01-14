#include "CSVReader.h"
#include "TemperatureEntry.h"
#include <fstream>
#include <sstream>
#include <iostream>

CSVReader::CSVReader() {}

std::vector<TemperatureEntry> CSVReader::readCSV(const std::string& filename)
{
    std::vector<TemperatureEntry> entries;
    std::ifstream file(filename);
    std::string line;

    if (file.is_open())
    {
        // Skip the header line
        std::getline(file, line);

        while (std::getline(file, line))
        {
            try
            {
                std::vector<std::string> tokens = tokenize(line, ',');
                TemperatureEntry entry = stringsToTemperatureEntry(tokens);
                entries.push_back(entry);
            }
            catch (const std::exception &e)
            {
                std::cerr << "CSVReader::readCSV: Invalid data line, skipping." << std::endl;
            }
        }
        file.close();
    }
    else
    {
        std::cerr << "CSVReader::readCSV: Unable to open file " << filename << std::endl;
    }

    return entries;
}

std::vector<std::string> CSVReader::tokenize(const std::string& line, char separator)
{
    std::vector<std::string> tokens;
    std::istringstream stream(line);
    std::string token;

    while (std::getline(stream, token, separator))
    {
        tokens.push_back(token);
    }

    return tokens;
}

TemperatureEntry CSVReader::stringsToTemperatureEntry(const std::vector<std::string>& tokens)
{
    if (tokens.size() < 3)
    {
        throw std::runtime_error("Insufficient tokens to create TemperatureEntry");
    }

    try
    {
        std::string timestamp = tokens[0];
        std::string country = "GB"; // Example: GB_temperature (Adjust as necessary)
        double value = std::stod(tokens[12]); // Example column index for GB_temperature

        return TemperatureEntry(value, timestamp, country, EntryType::Temperature);
    }
    catch (const std::exception &e)
    {
        throw std::runtime_error("Error parsing TemperatureEntry: " + std::string(e.what()));
    }
}