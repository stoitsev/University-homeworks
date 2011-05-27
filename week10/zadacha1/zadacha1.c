#include <stdio.h>
#include <stdlib.h>
#define STACK_SIZE 1000000

typedef struct {
    int data[STACK_SIZE];
    int top;
} Stack;

void push(Stack *s, int x);
int pop(Stack *s);
int peek(Stack *s);

int main()
{ 
    Stack stk;
    stk.top = 0;

    int n = 0;
    scanf("%d", &n);

    int i = 0;
    int temp;
    while (i < n) {
        scanf("%d", &temp);
        push(&stk, temp);
        i++;
    }

    Stack rev;
    rev.top = 0;

    i = 0;
    while (i < n) {
        push(&rev, pop(&stk));
        i++;
    }

    i = 0;
    while (i < n) {
        printf("%d ", pop(&rev));
        i++;
    }

    return 0;
}

void push(Stack *s, int x)
{
    if (s->top == STACK_SIZE) {
        printf("stack is full");
    } else {
        s->data[s->top] = x;
        s->top++;
    }
}

int pop(Stack *s)
{
    if (s->top == 0) {
        printf("stack is empty");
    } else {
        return s->data[--s->top];
    }

}

int peek(Stack *s) 
{
    if(s->top == 0) {
        printf("stack is empty");
        return 0;
    } else {       
        return s->data[s->top-1];
    }
}
