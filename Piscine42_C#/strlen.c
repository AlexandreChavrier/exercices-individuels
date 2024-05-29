#include <unistd.h>
#include <stdio.h>

int		ft_strlen(char *str)
{
	int i;

	i = 0;
	while (*(str + i) != '\0')
	{
		i++;
	}
	return (i);
}

int main()
{
	char *s1 = "jesuis7";
	printf("%d\n", ft_strlen(s1));
}
