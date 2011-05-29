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

void insertFront(List *l, int x); //done
void insertAt(List *l, int pos, int x); //done
void deleteAt(List *l, int pos); //done
int getAt(List *l, int pos);
void setAt(List *l, int pos, int x);
int getSize(List *l); //done
void print(List *l, FILE *fout); //half done

int main()
{
    List ls;
    ls.count = 0;
    ls.first = NULL;

    insertFront(&ls, 1);
    insertFront(&ls, 2);
    insertFront(&ls, 3);
    insertFront(&ls, 4);
    insertFront(&ls, 5);
    insertAt(&ls, 1, 0);
    deleteAt(&ls, 1);

    printf("size: %d\n", getSize(&ls));

    print(&ls, fopen("b.out", "wb"));

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
    if (pos == 0) {
        l->first = l->first->next;
        return;
    }
    pos--;
    struct Node *element = l->first;
    int i = 0;
    while (i != pos) {
        element = element->next;
        i++;
    }
    element->next = element->next->next;

}

void print(List *l, FILE *fout)
{
    struct Node *temp = l->first;
    while (temp != NULL) {
        printf("%d ", temp->value);
        temp = temp->next;
    }
}

int getSize(List *l)
{
    return l->count;
}
