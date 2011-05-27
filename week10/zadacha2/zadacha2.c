#include <stdio.h>
#include <stdlib.h>
#define STACK_SIZE 1000000

typedef struct {
    int data[STACK_SIZE];
    int top;
} Stack;

int push(Stack *s, int x);
int pop(Stack *s);
int peek(Stack *s);
int contains(Stack *stack, int x);
int deleteFirst(Stack *stack, int x);


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

    int x = 0;
    scanf("%d", &x);

    if (contains(&stk, x) == 1) {
        printf("YES\n");
    } else {
        printf("NO\n");
    }

    int position = deleteFirst(&stk, x);
    while (stk.top != 0) {
        printf("%d ", pop(&stk));
    }
    printf("\n%d", position);
 

    return 0;
}

int contains(Stack *stack, int x)
{
    Stack temp;
    memcpy(&temp, stack, sizeof(Stack));

    int i = 0;
    while (temp.top != 0) {
        if(pop(&temp) == x)
            return 1;
    }

    return 0;
}

int deleteFirst(Stack *stack, int x)
{
    Stack temp;
    temp.top = 0;
    
    int element, position = -1;
    while (stack->top != 0) {
        element = pop(stack);
        if(element == x) {
            position = stack->top;
            break;
        } else {
            push(&temp, element);
        }
    }

    while(temp.top != 0) {
        push(stack, pop(&temp));
    }

    return position;
}

int push(Stack *s, int x)
{
    if (s->top == STACK_SIZE) {
        return 0;
    } else {
        s->data[s->top] = x;
        s->top++;
        return 1;
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
