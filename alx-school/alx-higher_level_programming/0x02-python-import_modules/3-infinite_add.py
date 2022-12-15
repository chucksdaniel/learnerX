#!/usr/bin/python3

if __name__ == '__main__':

    from sys import argv

    sum = 0
    for i range(len(argv)):
        sum += int(argv[i])

    print("{:d}".format(sum))
