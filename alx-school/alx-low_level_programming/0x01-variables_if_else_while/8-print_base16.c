#include <stdio.h>
/**
 * main - Entry point
 *
 * Return: Always 0 (Success)
 */
int main(void)
{
	int i;

	for (i = 0; i < 48; i++)
	{
		if (i < 10)
			putchar(i + '0');
		else if (i > 41)
			putchar(i - 10 + 'A');
	}
	putchar(10);
	return (0);
}
