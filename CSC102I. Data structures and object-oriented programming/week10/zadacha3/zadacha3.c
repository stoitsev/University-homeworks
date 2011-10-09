#include <stdio.h>
#include <stdlib.h>
#define STACK_SIZE 10000

typedef struct {
    int data[STACK_SIZE];
    int top;
} Stack;

int push(Stack *s, int x);
int pop(Stack *s);
int peek(Stack *s);

int main()
{ 
    Stack stk;
    stk.top = 0;
    char input[STACK_SIZE];
    scanf("%s", input);
    int i = 0, a, b;
    char c; //for less writing
    while (input[i] != '\0') {
        c = input[i];
        if ((c == '+') || (c == '-') || (c == '*') || (c == '/')) {
            a = pop(&stk);
            b = pop(&stk);
            switch (c) {
                case '+':
                    push(&stk, a + b);
                break;
                case '-':
                    push(&stk, a - b);
                break;
                case '*':
                    push(&stk, a * b);
                break;
                case '/':
                    push(&stk, a / b);
                break;
            }                
        } else {
            push(&stk, c - '0');
        }
        
        i++;
    }

    printf("%d", pop(&stk));

    return 0;
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
        return 0;
    } else {
       return s->data[--s->top];
    }

}

int peek(Stack *s) 
{
    if(s->top == 0) {
        printf("ERROR");
        return 0;
    } else {       
        return s->data[s->top-1];
    }
}
