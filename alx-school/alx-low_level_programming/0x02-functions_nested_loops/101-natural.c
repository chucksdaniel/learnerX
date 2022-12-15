#include <stdio.h>
/**
 * main - Entry point
 *
 * Description: A program to sum the multiple of 3 and 5 below 1024
 * Return: Always 0 (Success)
 */
int main(void)
{
	int num, sum;

	sum = 0;

	for (num = 0; num < 1024; num++)
	{
		if (num % 3 == 0 || num % 5 == 0)
		{
			sum += num;
		}
	}
	printf("%d\n", sum);
	return (0);
}
