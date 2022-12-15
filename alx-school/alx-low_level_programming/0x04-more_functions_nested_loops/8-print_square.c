#include "main.h"
/**
 * print_square - Print square
 *
 * @size: size of type integer
 *
 * Return: void
 */
void print_square(int size)
{
	int line, row;

	if (size > 0)
	{
		for (line = 0; line < size; line++)
		{
			for (row = 0; row < size; row++)
			{
				_putchar('#');
			}
			_putchar('\n');
		}
	}
	else
	{
		_putchar('\n');
	}
}
