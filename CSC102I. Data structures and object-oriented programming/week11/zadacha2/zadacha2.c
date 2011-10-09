#include <stdio.h>
#include <stdlib.h>
#define SIZE_OF_QUEUE 1000
#define MAX_QUERIES 1000

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
void deleteAt(List *l, int pos); 
int getSize(List *l);
void print(List *l, FILE *fout); 
void offer(Queue *q, int x);
int peak(Queue *q);
int poll(Queue *q);
int isEmpty(Queue *q);

List *nodesPtr;

int main()
{
    int numberOfNodes = 0;
    scanf("%d", &numberOfNodes);

    int numberOfEdges = 0;
    scanf("%d", &numberOfEdges);

    List nodes[numberOfNodes + 1];

    nodesPtr = nodes;

    int i = 0;
    for (i = 0; i <= numberOfNodes; i++) {
        nodes[i].first = NULL;
        nodes[i].count = 0;
    }
    
    int tempParent, tempChild;
    for (i = 0; i < numberOfEdges; i++) {
        scanf("%d", &tempParent);
        scanf("%d", &tempChild);
        insertFront(&nodes[tempParent], tempChild);
        insertFront(&nodes[tempChild], tempParent);
    }

    int queries;
    scanf("%d", &queries);
    int query[MAX_QUERIES][2];
    int startNode, endNode;
    for (i = 0; i < queries; i++) {
        scanf("%d", &query[i][0]);
        scanf("%d", &query[i][1]);
    }

    for (i = 0; i < queries; i++) {
        printf("%d\n", bfs(nodes, query[i][0], query[i][1], numberOfNodes));
    }

    for (i = 0; i < numberOfNodes; i++) {
        while (getSize(&nodes[i])) {
            deleteAt(&nodes[i], 0);
        }
    }

    return 0;
}

int bfs(List nodes[], int startNode, int endNode, int numberOfNodes)
{
    Queue queue;
    queue.front = 0;
    queue.rear = 0;

    int dist[numberOfNodes + 1];
    int i = 0;
    for (i = 0; i <= numberOfNodes; i++) {
        dist[i] = -1;
    }

    dist[startNode] = 0;

    offer(&queue, startNode);
    int currentNode, childNode;
    int numOfChildNodes;
    while (!isEmpty(&queue)) {
        currentNode = poll(&queue);
        if (currentNode == endNode)
                return dist[currentNode];
        numOfChildNodes = getSize(&nodes[currentNode]);
        struct Node *temp = nodes[currentNode].first;
        for(i = 1; i <= getSize(&nodes[currentNode]); i++) {
            if (dist[temp->value] >= 0)
                continue;
            offer(&queue, temp->value);
            dist[temp->value] = dist[currentNode] + 1;
            temp = temp->next;
        }
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
 * Beggining of linked list
 */

void insertFront(List *l, int x)
{
    struct Node *temp = malloc(sizeof(struct Node));
    temp->value = x;
    l->count += 1;
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
        struct Node *deleter = l->first;
        l->first = l->first->next;
        l->count -= 1;
        free(l->first);
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
