#ifndef _DATE__CLASS_HEADER

#define _DATE_CLASS_HEADER
#include <iostream>

class Date {
    public:
    	Date();
        Date(int, int, int);
        Date(const Date &);
        Date &operator= (const Date &);
        bool operator< (const Date &) const;
        bool operator> (const Date &) const;
        bool operator<= (const Date &) const;
        bool operator>= (const Date &) const;
        bool operator== (const Date &) const;
        bool operator!= (const Date &) const;
        friend std::ostream& operator <<(std::ostream &, Date);
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

#endif
