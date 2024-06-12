// Fonction pour afficher l'alphabet en C#

#include <unistd.h>

void    ft_print_alphabet(void)
{
    char c = 'A';

    while(c <= 'Z')
    {
        write(1, &c, 1);
        c++;
    }
    write(1, "\n", 1);
}

int     main(void)
{
    ft_print_alphabet();
    return(0);
}
