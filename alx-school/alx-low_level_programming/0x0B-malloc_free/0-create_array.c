#include <stdlib.h>
#include "main.h"
/**
 * create_array - Creates an array
 * @size: size of the array
 * @c: argument c
 * Return: char
 */
char *create_array(unsigned int size, char c)
{
	unsigned int i;
	char *s;

	s = malloc(sizeof(char) * size);
	if (s == 0 || size == 0)
		return (NULL);

	for (i = 0; i <= size; i++)
		s[i] = c;

	return (s);
	free(s);
}
