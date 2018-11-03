100DaysOfCodeChallenge - Day 5

Today I continued my progress on the FreeCodeCamp JavaScript track.

- Intermediate Algorithm Scripting: Smallest Common Multiple

Task: 

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Thoughts on how to complete task:

In the Task description it states we have to find lowest common multiple for a set of two numbers and the numbers in between.

For finding the LCM for two numbers it would be easy as we know the range of numbers in the common multiples would be lower or equal to the larger number multipled by the smaller number.
 
To use the same approach for solving the range of numbers in between, we could start by creating a new array of numbers ranging from the smallest and largest given number.

We could use a loop to multply the largest number by second largest number and check that it is divisable by all other numbers. 

If the number is not divisable by all then it will move to the next large number in line. 

For example:

given arr = [1,5]

//new range list
var arr = [1,2,3,4,5];

//check for common multiple
for (var i = arr.length - 1; i > 0; i--){
	var largestNum = arr[i]; (5)
	var nextNum = arr[i - 1]; (4) 
	var commonMult = largestNum * nextNum;
	
	//loop through numbers from nextNum index in reverse order and check if all is divisable to the commonMult
	Use every() function to return result.
}

function checkDivisable(commomultiple, num2){
	return true if num1 % num2 == 0;
}