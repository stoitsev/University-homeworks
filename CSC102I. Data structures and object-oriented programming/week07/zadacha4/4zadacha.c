#include <stdio.h>
#include <stdlib.h>

void transponse(int **a, int n);
void swap(int *a, int *b);
void addOne(int **a, int n);
void applyOperation(int **a, int n, void (*oper)(int **a, int n));

int main()
{
	int n = 0;
	scanf("%d", &n);

	int **a = calloc(n, sizeof(int *));
	int i;
	for (i = 0; i < n; ++i) {
		a[i] = calloc(n, sizeof(int));
	}

	int j = 0;
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++)
			scanf("%d", &a[i][j]);
	}

	applyOperation(a, n, addOne);

	for (i = 0; i < n; ++i)
		free(a[i]);
	free(a);
	return 0;
}

void transponse(int **a, int n)
{
	int i = 0;
	int j = 0;
	for (i = 0; i < n - 1; i++) {
		for (j = i + 1; j < n; j++) {
			swap(&a[i][j], &a[j][i]);
		}
	}
}

void addOne(int **a, int n)
{
	int i = 0;
	int j = 0;
	for (i = 0; i < n; i++) {
		for(j = 0; j < n; j++)
			(*(*(a + i) + j))++;
	}
}

void applyOperation(int **a, int n, void (*oper)(int **a, int n))
{
	(*oper)(a, n);
}

void swap(int *a, int *b)
{
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}


