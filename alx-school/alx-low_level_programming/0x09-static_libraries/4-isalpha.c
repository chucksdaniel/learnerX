#include "main.h"
/**
 * _isalpha - checks for alphabetic character
 *
 * @c: c character is an ascii
 *
 * Return: 1
 */
int _isalpha(int c)
{
	if (c >= 'a' && c <= 'z')
	{
		return (1);
	}
	else if (c >= 'A' && c <= 'Z')
	{
		return (1);
	}
	else
	{
		return (0);
	}
}
