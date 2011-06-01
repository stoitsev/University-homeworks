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

int compint(void *e1, void *e2)
{
    int a1 = *(int *)e1;
    int a2 = *(int *)e2;
    if (a1 < a2)
        return -1;
    if (a1 == a2)
        return 0;
    if (a1 > a2)
        return 1;
}

void sort(List *l, int(*comint)(void *, void *));
void insertFront(List *l, int x); 
void deleteAt(List *l, int pos); 
int getSize(List *l);
void print(List *l, FILE *fout); 

int main()
{
    int number;
    scanf("%d", &number);
    
    List list;
    list.count = 0;
    list.first = NULL;

    int i = 0;
    int num;
    for (i = 0; i < number; i++) {
        scanf("%d", &num);
        insertFront(&list, num);
    }
    print(&list, stdout);
    printf("\n");
    sort(&list, compint);
    print(&list, stdout);
    return 0;
}

void sort(List *l, int(*compint)(void *, void *))
{
    int swapped = 0;
    int i = 0;
    int size = getSize(l);
    int swapper;
    struct Node *temp = l->first;
    do {
        temp = l->first;
        swapped = 0;
        i = 0;
        while (i < size - 1) {
            if (compint(&temp->value, &temp->next->value) == 1) {
                swapper = temp->value;
                temp->value = temp->next->value;
                temp->next->value = swapper;
                swapped = 1;
            }
            i++;
            temp = temp->next;
        }
    } while(swapped);
}

void insertFront(List *l, int x)
{
    struct Node *temp = malloc(sizeof(struct Node));
    temp->value = x;
    l->count = l->count + 1;
    temp->next = l->first;
    l->first = temp;
}


void deleteAt(List *l, int pos)
{
    if (pos > l->count) {
        printf("Error: No such element to delete\n");
        return;
    }
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
    l->count = l->count - 1;
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
