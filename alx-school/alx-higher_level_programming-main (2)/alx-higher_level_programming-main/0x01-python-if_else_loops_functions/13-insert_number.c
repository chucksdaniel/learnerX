#include <stdio.h>
#include "lists.h"
#include <stdlib.h>

/**
 * insert_node - function that inserts a number into a sorted singly linked list
 * @head: head pointer
 * @number: data to in the newnode
 * Return: a new node
 */
listint_t *insert_node(listint_t **head, int number){
	listint_t *temp;
	listint_t *new;

	new = malloc(sizeof(listint_t));
	if (new == NULL)
		return (NULL);
	new->n = number;
	new->next = NULL;

	if (*head == NULL)
		*head = new;
	temp = *head;
	while (temp)
	{
		if (temp->n < number && temp->next->n >= number)
		{
			new->next = temp->next;
			temp->next = new;
			break;
		}
		if (temp->n < number && temp->next == NULL)
		{
			temp->next = new;
			break;
		}
		temp = temp->next;
	}
	return (new);
}
