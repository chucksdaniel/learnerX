#include "main.h"
#include <string.h>
/**
 * _strncpy - copies a string.
 * @dest: detsination string
 * @src: string to copy
 * @n: number of times
 *
 * Return: char
 */
char *_strncpy(char *dest, char *src, int n)
{
	return (strncpy(dest, src, n));
}
