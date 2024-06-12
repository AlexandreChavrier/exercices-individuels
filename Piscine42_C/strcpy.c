#include <unistd.h>
#include <stdio.h>
#include <string.h>

//char    *strcpy(char *dest, char *src)
//{

//}

int     main(void)
{
    char    src[] = "salut";
    char    dest[] = "alex";

    printf("%s", strcpy(dest, src));
    return(0);
}