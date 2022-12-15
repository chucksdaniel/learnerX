#include "main.h"
#include <stdlib.h>

/**
 * str_concat - function that concatenates two string
 * @s1: string one as a parameter
 * @s2: string two as a parameter
 *
 * Return: char
 */

char *str_concat(char *s1, char *s2)
{
	char *s;
	int i, j, k, l;

	if (s1 == NULL)
		s1 = "";
	if (s2 == NULL)
		s2 = "";

	for (i = 0; s1[i] != '\0'; i++)
		;
	for (j = 0; s2[j] != '\0'; j++)
		;

	s = malloc(sizeof(char) * (i + j) + 1);
	if (s == NULL)
		return (NULL);

	for (k = 0; s1[k] != '\0'; k++)
		s[k] = s1[k];
	for (l = 0; s2[l] != '\0'; l++)
		s[k + l] = s[l];

	return (s);
	free(s);
}
