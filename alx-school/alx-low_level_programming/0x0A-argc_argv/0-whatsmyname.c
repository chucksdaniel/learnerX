#include <stdio.h>
/**
 * main - entry point for the program
 * @argc: number of argument (argument count)
 * @:argv: array of the argument (argument vector)
 *
 * Return: Always 0 (Success)
 */
int main(int argc, char* argv[])
{
	if (argc >= 1)
		printf("%s\n", argv[0]);
	return (0);
}
