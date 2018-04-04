/*
 * Program Name: The 'FizzBuzz' Challenge
 * Date Created: 04/04/2018
 * Author: David Gunner (Jnr)
 */

// create a variable to store the number we wish to increment (count) up to
var totalNumber = 100;

// now create a for loop to iterate to our given number (i.e '100')
for (var i = 1; i <= totalNumber; i++) {
	// if our current number is divisible by 15..
	if (i % 15 === 0) {
		// print 'FizzBuzz'
		console.log('FizzBuzz');
	// otherwise, if our nuber is divible by 3..
	} else if (i % 3 === 0) {
		// print 'Fizz'
		console.log('Fizz');
		// otherwise, if our number is divisible by 5..
	} else if (i % 5 === 0) {
		// print 'Buzz'
		console.log('Buzz');
		// else if none of the above..
	} else {
		// just print the number
		console.log(i);
	}
}