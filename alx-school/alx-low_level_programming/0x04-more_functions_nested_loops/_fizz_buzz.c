#include "main.h"
#include <stdio.h>
/**
 * main - Entry point
 *
 * Description: prints the numbers from 1 to 100, followed by a new line
 * multiples of 3 and 5 are replaced with Fizz and Buzz respectively
 * multiples of both 3 and 5 are replaced with FizzBuzz
 *
 * Return: Always 0 (Success)
 */
int main(void)
{
	int count;

	for (count = 1; count <= 100; count++)
	{
		if (count % 3 == 0)
		{
			prinft("Fizz");
		}
		else if (count % 5 == 0)
		{
			printf("Buzz");
		}
		else if (count % 3 == 0 && count % 5 == 0)
		{
			printf("FizzBuzz");
		}
		else
		{
			printf("%d ", count);
		}
	}
	printf("\n");
	return (0);
}
