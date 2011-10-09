#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 1000
#define SEPAR ' '

int split(char *str, char *result[]);

int main()
{
	char input[SIZE];
	gets(input);
	char *result[SIZE];
	int n = split(input, result);
	int i = 0;
	char *p;
	for(i = 0; i < n; i++){
		printf("\"");
		p = result[i];
		while(*p != SEPAR){
			printf("%c", *p);
			p++;
		}
		printf("\"\n");
	}

	return 0;
}

int split(char *str, char *result[])
{
	int count = 0;
	int n = 0;
	while(*str != '\0'){
		while(*str == SEPAR){
			str++;
		}
		if(*str == '\0') break;
		*(result + n) = str;
		str++;
		n++;
		while (*str != SEPAR && *str != '\0') {
			str++;
		}
	}

	return n;
}


