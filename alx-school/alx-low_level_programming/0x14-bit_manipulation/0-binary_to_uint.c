#include "main.h"
/**
 * binary_to_uint - function that converts a binary number to an unsigned it
 * @b: binary string
 * Return:  unsigned int
 */

unsigned int binary_to_uint(const char *b)
{
	unsigned int count;
	unsigned int i;
	unsigned int sum;
	unsigned int bit, v = 0;

	if (b == NULL)
		return (0);
	count = strlen(b) - 1;

	sum = 0;
	for (i = 0; b[i] != '\0'; i++)
	{
		if (b[i] != '0' && b[i] != '1')
			return (0);
		bit = power(2, count);
		if (b[i] == '1')
			v = 1;
		else
			v = 0;
		sum = sum + (v * bit);
		count--;
	}
	return (sum);
}
/**
 * power - function to return power
 * @x:  x int
 * @y: y
 * Return: int
 */
int power(int x, int y)
{
	int i = 0;
	int mul = 1;

	for (i = 0; i < y; i++)
		mul *= x;
	return (mul);
}
