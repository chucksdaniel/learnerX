#include "main.h"
/**
 * reverse_array - Reverse an array
 * @a: an array
 * @n: number of element in the array
 *
 * Return: void
 */
void reverse_array(int *a, int n)
{
	int i;
	int tmp;

	for (i = 0; i < n; i++)
	{
		tmp = a[n - 1 - i];
		a[n - 1 - i] = a[i];
		a[i] = tmp;
	}
}
