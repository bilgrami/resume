# Problem Link
https://www.hackerrank.com/challenges/bigger-is-greater/problem

# Problem
[Lexicographical order](https://en.wikipedia.org/wiki/Lexicographical_order) is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

- It must be greater than the original word
- It must be the smallest word that meets the first condition

For example, given the word w=abcd, the next largest word is abdc.

Complete the function _biggerIsGreater_ below to create and return the new string meeting the criteria. If it is not possible, return no answer.

## Function Description

_biggerIsGreater_ function should return the smallest lexicographically higher string possible from the given string or no answer.

biggerIsGreater has the following parameter(s):

w: a string
Input Format

## Sample Input
ab
bb
hefg
dhck
dkhc

## Sample Output

ba
no answer
hegf
dhkc
hcdk
