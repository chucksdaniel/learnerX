#include <stdio.h>

/**
 * main - program entry
 * @argc: argument count
 * @argv: argument vector
 * Return: Always 0
 */

int main(int argc, __attribute__((unused)) char *argv[])
{
	int args = argc - 1;

	printf("%d\n", args);
	return (0);
}
