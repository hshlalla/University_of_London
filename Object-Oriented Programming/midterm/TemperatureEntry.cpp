#include "TemperatureEntry.h"

TemperatureEntry::TemperatureEntry(double value, const std::string& timestamp, const std::string& country, EntryType type)
    : value(value), timestamp(timestamp), country(country), type(type) {}

double TemperatureEntry::getValue() const { return value; }
std::string TemperatureEntry::getTimestamp() const { return timestamp; }
std::string TemperatureEntry::getCountry() const { return country; }
EntryType TemperatureEntry::getType() const { return type; }
