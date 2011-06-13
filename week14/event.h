#ifndef _EVENT__CLASS__HEADER
#define _EVENT__CLASS__HEADER
#include <iostream>
#include "date.h"
using namespace std;

class Event {
    public:
        static int numberOfObjects;
        Event();
	Event(int, char*, Date, int);
        Event(const Event &);
        friend std::ostream& operator <<(std::ostream &, Event);
	int getId() const;
        void setDescription(char *);
        char *getDescription() const;
        void setDate(Date &);
        Date getDate() const;
        void setPriority(int);
        int getPriority() const;
        ~Event();
    private:
        int id;
        char *description;
        Date date;
        enum Priority {LOW = 1, MEDIUM = 2, HIGH = 3} priority;
};
#endif
