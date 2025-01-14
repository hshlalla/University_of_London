#pragma once

#include <string>
#include <vector>

enum class EntryType { Temperature }; // Supports additional types in the future

class TemperatureEntry
{
public:
    TemperatureEntry(double value, const std::string& timestamp, const std::string& country, EntryType type);

    double getValue() const;
    std::string getTimestamp() const;
    std::string getCountry() const;
    EntryType getType() const;

private:
    double value;          // Temperature value
    std::string timestamp; // Time of the reading
    std::string country;   // Country code (e.g., "GB")
    EntryType type;        // Type of the entry (e.g., Temperature)
};