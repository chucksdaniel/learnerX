#include "main.h"
/**
 * print_most_numbers - Prints from 0 to 9 except 2 and 4
 *
 * Description: The function is void
 * Return: void
 */
void print_most_numbers(void)
{
	int c;

	for (c = '0'; c <= '9'; c++)
	{
		if (c != '2' && c != '4')
		{
			_putchar(c);
		}
	}
	_putchar('\n');
}
