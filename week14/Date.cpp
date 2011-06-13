#ifndef _DATE_CLASS
#define _DATE_CLASS
#include "date.h"
using namespace std;

Date::Date() {
    day = 1;
    month = 1;
    year = 2011;
}

Date::Date(int d, int m, int y) {
    bool error = false;
    day = ((d < 1 || d > 31) && (error = true)) ? 1 : d;
    month = ((m < 1 || m > 12) && (error = true)) ? 1 : m;
    year = ((y < 1 || y > 2012) && (error = true)) ? 2011 : y;
    if (error)
        cout << "error in date input" << endl;
}

Date::Date(const Date &date) {
    day = date.day;
    month = date.month;
    year = date.year;
}

int Date::getDay() const{
    return day;
}

void Date::setDay(int d) {
    if (d < 1 || d > 31) {
        cout << "error in day input" << endl;
        return;
    }
    day = d;
}

int Date::getMonth() const{
    return month;
}

void Date::setMonth(int m) {
    if (m < 1 || m > 12) {
        cout << "error in month input" << endl;
        return;
    }
    month = m;
}

int Date::getYear() const{
    return year;
}

void Date::setYear(int y) {
    if (y < 1 || y > 2012) {
        cout << "error in year input" << endl;
        return;
    }
    year = y;
}

Date::~Date() {
    
}

ostream &operator <<(ostream &os, Date date) {
    int d = date.getDay();
    int m = date.getMonth();
    int y = date.getYear();
    if (d < 10)
    	os  << "0" << d;
    else 
	os << d;
    os << "-";
    if (m < 10)
	os << "0" << m;
    else
	os << m;
    os << "-" << y;
    return os;
}

Date& Date::operator =(const Date &date) {
    if (&date != this) {
	day = date.day;
	month = date.month;
	year = date.year;
    }
    return *this;
}

bool Date::operator< (const Date &other) const {
    if (year < other.year)
	return true;
    if (month < other.month)
	return true;
    if (day < other.day)
	return true;
    return false;
}

bool Date::operator> (const Date &other) const {
    if (year > other.year)
	return true;
    if (month > other.month)
    	return true;
    if (day > other.day)
	return true;
    return false;
}

bool Date::operator<= (const Date &other) const {
    if (year < other.year)
	return true;
    if (month < other.month)
	return true;
    if (day < other.day)
	return true;
    if (day == other.day && month == other.month && year == other.year)
	return true;
    return false;
}

bool Date::operator>= (const Date &other) const {
    if (year > other.year)
	return true;
    if (month > other.month)
    	return true;
    if (day > other.day)
	return true;
    if (day == other.day && month == other.month && year == other.year)
	return true;
    return false;
}

bool Date::operator== (const Date &other) const {
    if (day == other.day && month == other.month && year == other.year)
	return true;
    return false;
}

bool Date::operator!= (const Date &other) const {
    if (day != other.day || month != other.month && year != other.year)
	return true;
    return false;
}
#endif
