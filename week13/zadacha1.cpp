#include <iostream>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

using namespace std;

class List {
    public:
        List();
        void insert(char *name, int age);
        int get(char *name);
        void remove(char *name);
        int isEmpty();
        void print();
    private:
        int size;
        class Node {
            public:
                Node();
                Node *next;
                int age;
                char *name;
        };
        Node *first;
};

List::Node::Node() {
    age = -1;
    next = NULL;
}

List::List() {
    size = 0;
    first = NULL;
}

int List::isEmpty() {
    if (size > 0)
        return 0;
    return 1;
}

void List::insert(char *name, int age) {
    Node *temp = first;
    while (temp != NULL) {
        if (strcmp(name, temp->name) == 0) {
            temp->age = age;
            return;
        }
        temp = temp->next;
    }
    Node *InsertNode = new Node();
    InsertNode->age = age;
    InsertNode->name = new char[strlen(name) + 1];
    strcpy(InsertNode->name, name);
    InsertNode->next = first;
    first = InsertNode;
    size += 1;
}

int List::get(char *name) {
    Node *temp = first;
    while (temp != NULL) {
        if (strcmp(name, temp->name) == 0)
            return temp->age;
        temp = temp->next;
    }
    return -1;
}

void List::print() {
    Node *temp = first;
    while (temp != NULL) {
        printf("['%s' => '%d']\n", temp->name, temp->age);
        temp = temp->next;
    }
}

void List::remove(char *name) {
    Node *temp = first;
    Node *find = NULL;
    if (strcmp(name, first->name) == 0) {
        find = first;
        first = first->next;
        delete find;
        return;
    }
    while (temp->next != NULL) {
        if(strcmp(name, temp->next->name) == 0) {
            find = temp;
        }
        temp = temp->next;
    }
    if (find != NULL) {
        Node *free = find->next;
        find->next = find->next->next;
        size -= 1;
        delete free;
    }
}

class Map {
    public:
        int get(char *name);
        void put(char *name, int age);
        void remove(char *name);
        void printList();
    private:
        List list;
};

void Map::put(char *name, int age) {
    list.insert(name, age);
}

int Map::get(char *name) {
    return list.get(name);
}

void Map::remove(char *name) {
    list.remove(name);
}

void lower(char *name) {
    int i = 0;
    for (i = 0; name[i] != '\0'; i++)
        name[i] = tolower(name[i]);
}

int main() {
    Map map;
    int n;
    scanf("%d", &n);
    int i;
    int query;
    char name[50];
    int age;
    int j = 0;
    int *rezults = (int *)calloc(n, sizeof(int));
    for (i = 0; i < n; i++) {
        scanf("%d %s", &query, name);
        lower(name);
        switch (query) {
            case 1:
                scanf("%d", &age);
                map.put(name, age);
            break;
            case 2:
                rezults[j] = map.get(name);
                j++;
            break;
            case 3:
                map.remove(name);
            break;
        }
    }
    for(i = 0; i < j; i++)
        printf("%d\n", rezults[i]);
    free(rezults);
    return 0;
}
