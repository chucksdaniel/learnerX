#include "main.h"
/**
 * cap_string - capitalize every first letter
 * @str: string to capitalized
 *
 * Return: char
 */
char *cap_string(char *str)
{
	int i, back;

	for (i = 0; str[i] != '\0'; i++)
	{
		back = i - 1;
		if (str[i] >= 'a' && str[i] <= 'z')
		{
			if (i == 0)
				str[i] = str[i] - 32;
			else if (str[back] >= 9 && str[back] <= 10)
				str[i] = str[i] - 32;
			else if (str[back] >= 32 && str[back] <= 34)
				str[i] = str[i] - 32;
			else if (str[back] >= 40 && str[back] <= 41)
				str[i] = str[i] - 32;
			else if (str[back] == 44)
				str[i] = str[i] - 32;
			else if (str[back] == 46)
				str[i] = str[i] - 32;
			else if (str[back] == 59)
				str[i] = str[i] - 32;
			else if (str[back] == 123 || str[back] == 125)
				str[i] = str[i] - 32;
		}
	}
	return (str);
}
