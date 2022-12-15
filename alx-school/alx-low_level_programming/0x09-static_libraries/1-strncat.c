#include "main.h"
#include <string.h>
/**
 * _strncat - concatenate two strings using n byte
 * @dest: destination string
 * @src: string to concat
 * @n: number of byte
 *
 * Return: char
 */
char *_strncat(char *dest, char *src, int n)
{
	return (strncat(dest, src, n));
}
