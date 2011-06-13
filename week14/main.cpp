#include <iostream>
#include "eventmanager.h"
using namespace std;

#define LOW 1
#define HIGH 3
#define MEDIUM 2

int main() {
    cout << "Creation of three events: " << endl;
    Date dt1(1, 1, 2011);
    Date dt2(1, 2, 2011);
    Date dt3(1, 3, 2011);
    char desc1[] = "Event 1";
    char desc2[] = "Event 2";
    char desc3[] = "Event 3";
    EventManager evmngr;
    Event event1(1, desc1, dt1, LOW);
    Event event2(2, desc2, dt2, HIGH);
    Event event3(3, desc3, dt3, MEDIUM);
    evmngr.addEvent(event1);
    evmngr.addEvent(event2);
    evmngr.addEvent(event3);
    evmngr.print();
    cout << endl;
    cout << "Delete events with id = 2, id = 1 and id = 4:" << endl;
    evmngr.removeEvent(2);
    evmngr.removeEvent(4);
    evmngr.removeEvent(1);
    evmngr.print();
    cout << endl;
    cout << "Add events with id 4 and 5:" << endl;
    char desc4[] = "Event 4";
    char desc5[] = "Event 5";
    Date date4(1, 4, 2011);
    Date date5(1, 5, 2011);
    Event event4(4, desc4, date4, LOW);
    Event event5(5, desc5, date5, LOW);
    evmngr.addEvent(event4);
    evmngr.addEvent(event5);
    evmngr.print();
    cout << endl;
    cout << "Change information in event with id 4:" << endl;
    Event *fourthEvent = evmngr.getEvent(4);
    char newdesc[] = "YES!";
    Date newdate(16, 5, 2011);
    fourthEvent->setDescription(newdesc);
    fourthEvent->setDate(newdate);
    fourthEvent->setPriority(HIGH);
    evmngr.print();
    return 0;
}
