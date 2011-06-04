#include <stdio.h>
#include <stdlib.h>

struct Node {
    struct Node *next;
    struct Node *prev;
    int value;
};

typedef struct {
    struct Node *first;
    struct Node *last;
    int size;
} Deque;

void offerLast(Deque *d, int x);
void offerFirst(Deque *d, int x);
int pollLast(Deque *d, int *x);
int pollFirst(Deque *d, int *x);
int peekLast(Deque *d, int *x);
int peekFirst(Deque *d, int *x);
int isEmpty(Deque *d);
void print(Deque *d);

int main()
{
    Deque de;
    de.first = NULL;
    de.last = NULL;
    de.size = 0;

    int n;
    scanf("%d", &n);
    int i;
    for (i = 1; i <= n; i++) {
        offerLast(&de, i);
    }
    for (i = 1; i <= n; i++) {
        offerFirst(&de, i);
    }
    int step = 0;
    int x;
    while (!isEmpty(&de)) {
        if (step % 2 == 0) {
            pollFirst(&de, &x);
            if (x % 2 == 0)
                fprintf(stdout, "%d ", x);
            else
                offerLast(&de, x + 1);
        } else {
            pollLast(&de, &x);
            if (x % 2 == 0)
                fprintf(stdout, "%d ", x);
            else
                offerFirst(&de, x + 1);
        }
        step += 1;
    }

    return 0;
}

void offerLast(Deque *d, int x)
{
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->value = x;
    temp->prev = d->last;
    if (d->last != NULL)
        d->last->next = temp;
    temp->next = NULL;
    d->last = temp;        
    if (d->first == NULL)
        d->first = temp;
    d->size += 1;
}

void offerFirst(Deque *d, int x)
{
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    temp->value = x;
    temp->next = d->first;
    if (d->first != NULL)
        d->first->prev = temp;
    temp->prev = NULL;
    d->first = temp;
    if (d->last == NULL)
        d->last = temp;
    d->size += 1;
}

int pollLast(Deque *d, int *x)
{
    if (isEmpty(d))
        return 0;
    struct Node *temp = d->last;
    if (temp->prev == NULL) {
        d->first = NULL;
        d->last = NULL;
        *x = temp->value;
        free(temp);
        d->size = 0;
        return 1;
    }
    d->last = temp->prev;
    d->last->next = NULL;
    *x = temp->value;
    free(temp);
    return 1;
}

int pollFirst(Deque *d, int *x)
{
    if (isEmpty(d))
        return 0;
    struct Node *temp = d->first;
    if (temp->next == NULL) {
        d->first = NULL;
        d->last = NULL;
        *x = temp->value;
        free(temp);
        d->size = 0;
        return 1;
    }
    d->first = temp->next;
    d->first->prev = NULL;
    *x = temp->value;
    free(temp);
    return 1;
}

int peekLast(Deque *d, int *x)
{
    if (isEmpty(d))
        return 0;
    *x = d->last->value;
    return 1;
}

int peekFirst(Deque *d, int *x)
{
    if (isEmpty(d))
        return 0;
    *x = d->first->value;
    return 1;
}

int isEmpty(Deque *d)
{
    if(d->size > 0)
        return 0;
    else 
        return 1;
}

void print(Deque *d)
{
    struct Node *temp = d->first;

    while (temp != NULL) {
        printf("%d ", temp->value);
        temp = temp->next;
    }
} 
