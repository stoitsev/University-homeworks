#include <stdio.h>
#include <ctype.h>
#include <string.h>
#define SIZE 1000

typedef struct {
    char name[100];
    int age;
} Person;


void toLower(char *str) 
{
    while(*str != '\0') {
        *str = (*str >= 'A' && *str <='Z') ? *str - 'A' + 'a' : *str;
        str++; 
    }
}

int main()
{

    FILE *f = NULL;

    if ((f = fopen("./prob1.in", "r")) == NULL) {
        printf("Error while opening file prob1.in");
    }

    Person people[SIZE];
    int i = 0;

    int n = 0; /* number of lines */

    while(fscanf(f, "%s %d", people[n].name, &people[n].age) == 2){
        n++;
    }

    int j;
    Person temp;
    char firstName[SIZE], secondName[SIZE];
    for (i = 0; i < n - 1; i++) {
        for (j = i+1; j < n; j++) {
            if (people[i].age > people[j].age) {
                temp = people[i];
                people[i] = people[j];
                people[j] = temp;
                continue;
            }
            strcpy(firstName, people[i].name);
            strcpy(secondName, people[j].name);
            toLower(firstName);
            toLower(secondName);
            if ((people[i].age == people[j].age) && 
                     (strcmp(firstName, secondName) > 0)) {
                temp = people[i];
                people[i] = people[j];
                people[j] = temp;
            }
        }
    }

    for(i = 0; i < n; i ++) {
        printf("%s %d\n", people[i].name, people[i].age);
    }

   return 0;

}
