#include <stdio.h>
#include <stdlib.h>
#define SIZE_OF_QUEUE 1000

typedef struct {
    int front;
    int rear;
    int node[SIZE_OF_QUEUE];
} Queue;

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
void offer(Queue *q, int x);
int peak(Queue *q);
int poll(Queue *q);
int isEmpty(Queue *q);

int main()
{
    Queue queue;
    queue.front = 0;
    queue.rear = 0;
    
    int numberOfNodes = 0;
    scanf("%d", &numberOfNodes);

    int numberOfEdges = 0;
    scanf("%d", &numberOfEdges);

    List nodes[numberOfNodes];

    int i = 0;
    for (i = 0; i < 9; i++) {
        nodes[i].first = NULL;
        nodes[i].count = 0;
    }
    
    int tempParent, tempChild;
    for (i = 0; i < numberOfEdges; i++) {
        scanf("%d", &tempParent);
        scanf("%d", &tempChild);
        insertFront(&nodes[tempParent - 1], tempChild - 1);
    }

    for (i = 0; i < 9; i++) {
        printf("Childs of edge %d:\n", i + 1);
        print(&nodes[i], stdout);
        printf("\n");
    }

    return 0;
}

int bfs(List nodes[], int startNode, int endNode)
{
    Queue queue;
    queue.front = 0;
    queue.rear = 0;

    offer(&queue, startNode);
    
    int currentNode;
    while (!isEmpty(&queue)) {
        currentNode = poll(&queue);


    }   
    

    return -1;
}

void offer(Queue *q, int x)
{
    int temp = q->rear;
    if (temp == SIZE_OF_QUEUE) {
        temp = 1;
    } else {
        temp++;
    }
    if (temp == q->front) 
        return;
    q->rear = temp;
    q->node[q->rear - 1] = x;
}

int poll(Queue *q)
{
    if (isEmpty(q))
        return -1;
    if (q->front == SIZE_OF_QUEUE)
        q->front = 1;
    else
        q->front += 1;
    return q->node[q->front - 1];
}

int peek(Queue *q)
{
    if(isEmpty(q))
        return -1;
    return q->node[q->front];
}
    
int isEmpty(Queue *q)
{
    if (q->rear == q->front)
        return 1;
    else
        return 0;
}

/*
 * Beggining of dynamic list
 */

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
        fprintf(fout, "%d ", temp->value + 1);
        temp = temp->next;
    }
}

int getSize(List *l)
{
    return l->count;
}
