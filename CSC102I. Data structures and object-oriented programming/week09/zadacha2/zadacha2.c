#include <stdio.h>
#include <stdlib.h>
#define STACK_SIZE 10000

typedef struct {
    char data[STACK_SIZE];
    int top;
} Stack;

void push(Stack *s, int x);
int pop(Stack *s);
int peek(Stack *s);

int main()
{ 
    Stack stk;
    stk.top = 0;

    char input[STACK_SIZE];
    gets(input);
    char ch;
    int i = 0;

    while (input[i] != '\0') {
        ch = input[i]; //for less writing 
        if (ch == '{' || ch == '[' || ch == '(') {
            push(&stk, ch);
        } else if (ch == '}' || ch == ']' || ch == ')') {
            switch (ch) {
                case '}':
                    if (peek(&stk) == '{') {
                        pop(&stk);
                    } else {
                        printf("NO\n");
                        return 0;
                    }
                break;
                case ']':
                    if (peek(&stk) == '[') {
                        pop(&stk);
                    } else {
                        printf("NO\n");
                        return 0;
                    }
                break;
                case ')':
                    if (peek(&stk) == '(') {
                        pop(&stk);
                    } else {
                        printf("NO\n");
                        return 0;
                    }
                break;
            }
        }      

        i++; 
    }

    if (stk.top == 0) {
        printf("YES");
    } else {
        printf("NO");
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
