#include <stdio.h>
#include <stdlib.h>
#include "segment.h"

int main()
{
    FILE *f = NULL;
    if ((f = fopen("./prob1.in", "r")) == NULL) {
        printf("Error while opening file prob1.in");
        return 0;
    }
    int n = 0;
    fscanf(f, "%d", &n);
    Segment *segments = (Segment*) calloc(n, sizeof(Segment));
    int i = 0;
    for (i = 0; i < n; i++) {
        fscanf(f, "%ld", &segments[i].p1.x);
        fscanf(f, "%ld", &segments[i].p1.y);
        fscanf(f, "%ld", &segments[i].p2.x);
        fscanf(f, "%ld", &segments[i].p2.y); 
    }
    fclose(f);
    if ((f = fopen("./prob1.bin", "wb")) == NULL) {
        printf("Error while creating file prob1.bin");
        return 0;
    }
    fwrite(segments, sizeof(Segment), n, f);
    fclose(f);

    return 0;

}
