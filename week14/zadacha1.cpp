#include <iostream>

using namespace std;

class Date {
    public:
        Date(int, int, int);
        Date(const Date &);
        Date *operator= (const Date &) const;
        bool operator< (const Date &) const;
        bool operator> (const Date &) const;
        bool operator<= (const Date &) const;
        bool operator>= (const Date &) const;
        bool operator== (const Date &) const;
        bool operator!= (const Date &) const;
        friend ostream& operator <<(ostream &, Date);
        int getDay() const;
        void setDay(int);
        int getMonth() const;
        void setMonth(int);
        int getYear() const;
        void setYear(int);
        ~Date();
    private:
        int day;
        int month;
        int year;
};

Date::Date(int d, int m, int y) {
    bool error = false;
    day = ((d <= 1 || d >=31) && (error = true)) ? 1 : d;
    month = ((m <= 1 || m >=12) && (error = true)) ? 1 : m;
    year = ((y <= 1 || y >=2012) && (error = true)) ? 2011 : y;
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
    if (d <= 1 || d >= 31) {
        cout << "error in day input" << endl;
        return;
    }
    day = d;
}

int Date::getMonth() const{
    return month;
}

void Date::setMonth(int m) {
    if (m <= 1 || m >= 12) {
        cout << "error in month input" << endl;
        return;
    }
    month = m;
}

int Date::getYear() const{
    return year;
}

void Date::setYear(int y) {
    if (y <= 1 || y >= 2012) {
        cout << "error in year input" << endl;
        return;
    }
    year = y;
}

Date::~Date() {
    
}

ostream &operator <<(ostream &os, Date date) {
    os << date.getDay() << " " << date.getMonth() << " " << date.getYear();
    return os;
}

int main() {
    Date date(12, 6, 2007);
    cout << date << endl;
    date.setDay(13);
    cout << date << endl;
    date.setMonth(10);
    cout << date << endl;
    date.setYear(1991);
    cout << date << endl;
    return 0;
}
