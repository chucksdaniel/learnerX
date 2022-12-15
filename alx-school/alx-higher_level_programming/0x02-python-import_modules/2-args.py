#!/usr/bin/python3

if __name__ == "__main__":

    from sys import argv

    length = len(argv) - 1

    if length == 0:
        print("{:d} arguments.".format(length))
    elif length == 1:
        print("{:d} argument:".format(length))
    else length > 1:
        print("{:d} arguments:".format(length))
    for i in range(length):
        print("{:d}: {:s}".format(i + 1, argv[i + 1]))
