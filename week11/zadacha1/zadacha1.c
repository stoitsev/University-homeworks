#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node *next;
};

typedef struct {
    struct Node *first;
    int count;
} List;

void insertFront(List *l, int x); 
void insertAt(List *l, int pos, int x);
void deleteAt(List *l, int pos); 
int getAt(List *l, int pos); 
void setAt(List *l, int pos, int x);
int getSize(List *l);
void print(List *l, FILE *fout); 

int main()
{
    List ls;
    ls.count = 0;
    ls.first = NULL;

    int number = 0;
    scanf("%d", &number);
    int i = 0, temp;
    while (i < number) {
        scanf("%d", &temp);
        insertAt(&ls, i, temp);
        i++;
    }
    print(&ls, stdout);
    printf("\n");

    i = 1;
    while (i < 6) {
        insertFront(&ls, i);
        i++;
    }
    print(&ls, stdout);
    printf("\n");

    i = 1;
    int nums = getSize(&ls);
    while (i < nums) {
        deleteAt(&ls, i);
        i++;
        nums--;
    }
    print(&ls, stdout);
    printf("\n");

    i = 0;
    nums = getSize(&ls);
    while (i < getSize(&ls)) {
        if (getAt(&ls, i) < 3) {
            deleteAt(&ls, i);
            i--;
        } else {
            setAt(&ls, i, getAt(&ls, i) * 10);           
        }
        i++;
    }
    print(&ls, stdout);


    return 0;
}

void insertFront(List *l, int x)
{
    struct Node *temp = malloc(sizeof(struct Node));
    temp->value = x;
    l->count = l->count + 1;
    temp->next = l->first;
    l->first = temp;
}

void insertAt(List *l, int pos, int x)
{
    if (pos > l->count) {
        printf("Error: No such element to add\n");
        return;
    }
    if (pos == 0) {
        insertFront(l, x);
        return;
    }
    pos--;
    struct Node *previous = l->first;
    int i = 0;
    while (i != pos) {
        previous = previous->next;
        i++;
    }
    struct Node *temp = malloc(sizeof(struct Node));
    temp->value = x;
    l->count = l->count + 1;
    temp->next = previous->next;
    previous->next = temp;
}

void deleteAt(List *l, int pos)
{
    if (pos > l->count) {
        printf("Error: No such element to delete\n");
        return;
    }
    if (pos == 0) {
        struct Node *deleter = l->first;
        l->first = l->first->next;
        free(deleter);
        return;
    }
    pos--;
    struct Node *element = l->first;
    int i = 0;
    while (i != pos) {
        element = element->next;
        i++;
    }
    struct Node *deleter = element->next;
    element->next = element->next->next;
    l->count = l->count - 1;
    free(deleter);
}

void setAt(List *l, int pos, int x)
{
    struct Node *temp = l->first;
    int i = 0;
    while (i != pos) {
        temp = temp->next;
        i++;
    }
    temp->value = x;
}

int getAt(List *l, int pos)
{
    struct Node *temp = l->first;
    int i = 0;
    while(i != pos) {
        temp = temp->next;
        i++;
    }
    return temp->value;
}  

void print(List *l, FILE *fout)
{
    struct Node *temp = l->first;
    while (temp != NULL) {
        fprintf(fout, "%d ", temp->value);
        temp = temp->next;
    }
}

int getSize(List *l)
{
    return l->count;
}
