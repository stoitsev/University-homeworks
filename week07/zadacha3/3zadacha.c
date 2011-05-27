#include <stdlib.h>
#define MAX 1000

int lenOf(char *str);

int find(char *text, char *word);

void reverse(char *str, int s, int length);

int main(){
 
    char *text = malloc(MAX * sizeof(char));
    char *word = malloc(MAX * sizeof(char));

    gets(text);
    gets(word);

    int p = find(text, word);

    if (p != -1){
        reverse(text, p, lenOf(word));
    }

    printf("%s\n", text);

    free(text);
    free(word);

    return 0;
}


int lenOf(char *str){
    int size = 0;

    while (*(str + size) != '\0') {
        size++;
    }

    return size;
}



int find(char *text, char *word){

    int textLen = lenOf(text);
    int wordLen = lenOf(word);

    int i, j;
    for (i = textLen - wordLen; i >= 0; i--){
        for (j = 0; j < wordLen; j++){
            if (*(text + i + j) != *(word + j))
                break;
        }
        if (j == wordLen){
            return i;
        }
    }

    return -1;
}


void reverse(char *str, int s, int length){
    int m = length / 2;

    int i;
    char temp;
    for (i = 0; i < m; i++){
        temp = *(str + s + i);
        *(str + s + i) = *(str + s + length - 1 - i);
        *(str + s + length - 1 - i) = temp;
    }

}
