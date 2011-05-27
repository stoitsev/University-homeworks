#include <stdio.h>
#include <stdlib.h>
#include "segment.h"

int main()
{
    FILE *f = NULL;
    if ((f = fopen("./prob1.bin", "rb")) == NULL) {
        printf("Error while opening file prob1.in");
        return 0;
    }
    fseek(f, 0, SEEK_END);
    long size = ftell(f);
    printf("file size = %ld B\n", size);
    fseek(f, 0, SEEK_SET);    
    int n = size / sizeof(Segment);
    printf("segments = %d\n", n);
    Segment *segments = (Segment*) calloc(n, sizeof(Segment));
    int i = 0;
    int k = 0;
    while (fread(&segments[i], sizeof(Segment), 1, f) == 1) {
        fseek(f, i*sizeof(Segment), SEEK_CUR);
        k++; i++;
    }
    for (i = 0; i < k; i++) {
        printf("%ld %ld %ld %ld\n", segments[i].p1.x, segments[i].p1.y,
                                    segments[i].p2.x, segments[i].p2.y);
    }

    return 0;

}
