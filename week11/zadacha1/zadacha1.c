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
void insertAt(List *l, int pos, int x);
void deleteAt(List *l, int pos);
int getAt(List *l, int pos);
void setAt(List *l, int pos, int x);
int getSize(List *l);
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
