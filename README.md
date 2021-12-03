# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @moh_diab/lotide`

**Require it:**

`const _ = require('@moh_diab/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head(arr)`: A function that returns the first element from an array.
* `function tail(arr)`: A function that returns every element except the head of an array.
* `function middle(arr)`: A function that returns an array with only the middle element(s) of an array. 
* `function countOnly(allItems,ItemsToCount)`: A function that takes in an array of strings and returns an object with the appropriate counts.
* `function countLetters(string)`: A function that takes in a sentence (as a string) and returns a count of each letter of the sentence.
* `function letterPositions(string)`: A function that returns all the indices in a string where each character is found.
* `function eqObjects(Object1,Object2)`: A function that takes in two objects and returns true or false, based on a perfect match.
* `function assertObjectsEqual(..)`: A function that takes in two objects and console.log an appropriate message to the console.
* `function map(array,callback)`: A function that takes in two arguments and returns a new array based on the results of the callback function.
* `function takeUntil(arr,callback)`: A function that takes in an array and a Callback, returns a slice of the array taken from the beginning until the callback function returns a truthy value.
