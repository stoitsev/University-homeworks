#include <stdio.h>
#include <string.h>
#define SIZE 100


typedef struct {
    char name[30];
    int age;
    char eyes[5];
} Person;


void toLower(char *str) 
{
    while(*str != '\0') {
        *str = (*str >= 'A' && *str <='Z') ? *str - 'A' + 'a' : *str;
        str++; 
    }
}

void write_to_binary(Person per[], int n)
{
    FILE *f;
    f = fopen("prob2.bin", "wb");
    if (f == NULL) {
        printf("error while creating file\n");
    }
    fwrite(per, sizeof(Person), n, f);
    fclose(f);
}

void read_from_binary(int n)
{
    FILE *f;
    Person newpeople[n];
    f = fopen("prob2.bin", "rb");
    if (f == NULL) {
        printf("error while creating file\n");
    }
    fread(newpeople, sizeof(Person), n, f);
    int i = 0;
    for (i = 0; i < n; i++) {
        printf("%s %d %s\n", newpeople[i].name, newpeople[i].age, newpeople[i].eyes);        
    }
    fclose(f);
}


int main()
{
    FILE *f = NULL;
    if ((f = fopen("./prob2.in", "r")) == NULL) {
        printf("Error while opening file prob2.in");
    }
    Person people[SIZE];
    int i = 0;
    int n = 0; 
    while(fscanf(f, "%s %d %s", people[n].name, &people[n].age, people[n].eyes) == 3){
        n++;
    }
    Person temp;
    char firstName[30], secondName[30];
    int j = 0;
    for (i = 0; i < n - 1; i++) {
        for (j = i; j < n; j++) {
            strcpy(firstName, people[i].name);
            strcpy(secondName, people[j].name);
            toLower(firstName);
            toLower(secondName);
            if (strcmp(firstName, secondName) > 0) {
                temp = people[i];
                people[i] = people[j];
                people[j] = temp;
            } else if (strcmp(firstName, secondName) == 0) {
                if (people[i].age > people[j].age) {                        
                    temp = people[i];
                    people[i] = people[j];
                    people[j] = temp;
                } else if ((people[i].age == people[j].age) &&
                            (strcmp(people[i].eyes, people[j].eyes) > 0)) {
                    temp = people[i];
                    people[i] = people[j];
                    people[j] = temp;            
                }
            }
        }
    }
    write_to_binary(people, n);
    read_from_binary(n);
    fclose(f);
    return 0;
}
