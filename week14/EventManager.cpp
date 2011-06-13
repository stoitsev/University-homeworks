#ifndef _EVENt_MANAGER_CLASS
#define _EVENT_MANAGER_CLASS
#include <iostream>
#include "eventmanager.h"

EventManager::EventManager() {
    list.size = 0;
    list.first = NULL;
}

Event *EventManager::getEvent(int id) const {
    EventNode *temp = list.first;
    while (temp != NULL) {
        if (temp->event.getId() == id)
            return &(temp->event);
        temp = temp->next;
    }
    return NULL;
}

bool EventManager::addEvent(Event &e) {
    EventNode *temp = new EventNode();
    if (temp == NULL)
        return 0;
    temp->event = e;
    temp->next = list.first;
    list.first = temp;
    list.size += 1;
    return true;
}

bool EventManager::removeEvent(int id) {
    EventNode *temp = list.first;
    EventNode *find = NULL;
    if (temp->event.getId() == id) {
        list.first = temp->next;
        delete temp;
        list.size -= 1;
        return true;
    }
    while (temp->next != NULL) {
        if (temp->next->event.getId() == id)
            find = temp;
        temp = temp->next;
    }
    if (find == NULL)
        return 0;
    EventNode *free = find->next;
    find->next = find->next->next;
    list.size -= 1;
    delete free;
    return true;
}

void EventManager::print() const {
    EventNode *temp = list.first;
    while (temp != NULL) {
        cout << temp->event << endl;
        temp = temp->next;
    }
}

#endif
