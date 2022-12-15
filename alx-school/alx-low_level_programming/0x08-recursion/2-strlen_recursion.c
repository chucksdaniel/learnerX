#include "main.h"
/**
 * _strlen_recursion - return length of a string
 * @s: string to return the length
 * Return: int
 */
int _strlen_recursion(char *s)
{
	int count = 0;

	if (*s != '\0')
	{
		count++;
		count += _strlen_recursion(s + 1);
	}
	return (count);
}
