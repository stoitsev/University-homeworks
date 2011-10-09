#ifndef _CLASS_EVENT
#define _CLASS_EVENT
#include <iostream>
#include "event.h"
#include <string.h>

int Event::numberOfObjects = 0;

Event::Event() {
    date = Date();
    priority = LOW;
    id = Event::numberOfObjects++;
}

Event::Event(int eid, char *desc, Date dt, int pri) {
    id = eid;
    description = new char[sizeof(desc) + 1];
    strcpy(description, desc);
    date = dt;
    switch (pri) {
    case 1:
            priority = LOW;
    break;
    case 2:
        priority = MEDIUM;
    break;
    case 3:
        priority = HIGH;
    break;
    }
}

Event::Event(const Event &other) {
    id = other.id;
    description = new char[sizeof(other.description) + 1];
    strcpy(description, other.description);
    date = other.date;
    priority = other.priority;
}

ostream &operator <<(ostream &os, Event event) {
    os << "{id=" << event.id << ", '" << event.description << "', "
       << event.date << ", ";
    switch (event.priority) {
        case 1:
	     os << "LOW";
	break;
        case 2:
	     os << "MEDIUM";
	break;
        case 3:
	     os << "HIGH";
	break;
    }
    os << "}";
    return os;
}

void Event::setDescription(char *desc) {
    description = new char[sizeof(desc) + 1];
    strcpy(description, desc);
}

char *Event::getDescription() const {
    return description;
}

void Event::setDate(Date &dt) {
    date = dt;
}

Date Event::getDate() const {
    return date;
}

void Event::setPriority(int pri) {
    switch (pri) {
        case 1:
            priority = LOW;
        break;
        case 2:
            priority = MEDIUM;
        case 3:
            priority = HIGH;
        break;
    }
}

int Event::getPriority() const {
    switch (priority) {
        case LOW:
            return 1;
        break;
        case MEDIUM:
            return 2;
        break;
        case HIGH:
            return 3;
        break;
    }
}

int Event::getId() const {
    return id;
}

Event::~Event() {
    delete description;
}
#endif
