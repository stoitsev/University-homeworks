#ifndef _EVENT__MANAGER__HEADER
#define _EVENT__MANAGER__HEADER
#include <iostream>
#include "event.h"

class EventManager {
    public:
        EventManager();
        Event *getEvent(int) const;
        bool addEvent(Event &);
        bool removeEvent(int);
        void print() const;
    private:
        class EventNode {
            public:
                Event event;
                EventNode *next;
        };
        class EventList {
            public:
                int size;
                EventNode *first;
        };
        EventList list;
};
#endif
