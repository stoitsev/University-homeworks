#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 1000

int lengthOf(char *s) {
	return strlen(s);
}

void reverse(char *s) {
	int i = 0;
	int temp;
	int n = strlen(s);
	while (i <= n / 2) {
		temp = *(s + n - 1 - i);
		*(s + n - 1 - i) = *(s + i);
		*(s + i) = temp;
		i++;
	}
}

char* copyAndReverse(char *s){
	char ns[SIZE];

	strcpy(ns, s);

	int i = 0;
	int temp;
	int n = strlen(ns);
	while (i <= n / 2) {
		temp = *(ns + n - 1 - i);
		*(ns + n - 1 - i) = *(ns + i);
		*(ns + i) = temp;
		i++;
	}

	return ns;
}

int main() {

	char str[SIZE];

	gets(str);

	printf("%d\n", lengthOf(str));

	reverse(&str);

	printf("%s\n", str);

	printf("%s\n", copyAndReverse(str));

	return 0;
}

