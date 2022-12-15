#include "main.h"

/**
 * get_endianness - function that checks the endianness
 * Return: int
 */

int get_endianness(void)
{
	int n;
	char *byte = (char *)&n;

	if (*byte)
		return (1);
	return (0);
}
