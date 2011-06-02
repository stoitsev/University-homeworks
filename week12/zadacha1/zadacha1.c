#include <stdio.h>
#include <stdlib.h>


struct Element {
    int value;
    struct Element *next;
};

typedef struct{
    int size;
    struct Element *first;
} Queue;

void offer(Queue *q, int x);
int peek(Queue *q, int *x);
int poll(Queue *q, int *x);
int isEmpty(Queue *q);

int main()
{
    Queue qe;
    qe.size = 0;
    qe.first = NULL;

    int count = 0;
    scanf("%d", &count);
    int i = 0;
    for (i = 1; i <= count; i++) {
        offer(&qe, i);
    }
    int element;
    while (!isEmpty(&qe)) {
        poll(&qe, &element);
        if (element % 2 == 0) {
            printf("%d ", element);
            continue;
        }
        if (element % 4 == 1) {
            element += 1;
            offer(&qe, element);
            continue;
        }
        if (element % 4 == 3) {
            element -= 1;
            offer(&qe, element);
            element += 2;
            offer(&qe, element);
        }
    }

    return 0;
}

void offer(Queue *q, int x)
{
    struct Element *temp = (struct Element *)malloc(sizeof(struct Element));
    temp->value = x;
    temp->next = q->first;
    q->first = temp;
    q->size += 1;
}

int isEmpty(Queue *q)
{
    if (q->size > 0)
        return 0;
    return 1;
}

int peek(Queue *q, int *x)
{
    if (isEmpty(q))
        return 0;
    struct Element *temp = q->first;
    while(temp->next != NULL) {
        temp = temp->next;
    }
    *x = temp->value;
    return 1;
}

int poll(Queue *q, int *x)
{
    if(isEmpty(q))
        return 0;
    struct Element *temp = q->first;
    if (q->size == 1) {
        *x = temp->value;
        q->size -= 1;
        return 1;
    }
    while (temp->next->next != NULL)
        temp = temp->next;
    *x = temp->next->value;
    temp->next = NULL;
    q->size -=1;
    return 1;
}
