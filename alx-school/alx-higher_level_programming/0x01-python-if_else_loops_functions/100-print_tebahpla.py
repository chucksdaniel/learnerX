#!/usr/bin/python3
letterCode = 0
for i in range(122, 96, -1):
    if i % 2 == 0:
        letterCode = i
    else:
        letterCode = i - 32
    print("{}".format(chr(letterCode)), end="")
