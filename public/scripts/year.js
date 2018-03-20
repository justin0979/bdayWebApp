'use strict'

// This portion sets person.year to user specified input & sets years in menu.

let startYear = 100,
    endYear = new Date().getFullYear(), // Ends at current year since app is for 
										// living people old enough to use it.
										// Can be adjusted to check for future dates.
    yearOptions = '<option>Year</option>',
    myYear = document.querySelector('#year')

// Stores yearOptions as long string since html can read it as a single line due to
// closing tags.
for (let year = endYear; year >= startYear; year--) {
	yearOptions += `<option>${year}</option>`
}

myYear.innerHTML = yearOptions

// Sets person.year.
myYear.addEventListener('change', () => person.year = parseInt(myYear.value))

/************************** isLeapYear() *************************************

	Purpose: Calculates if the user specified year is a leap year.
	Output: true, if specified year is a leap year (ex. 2000)
			false, otherwise (ex. 1900).

*/

function isLeapYear() {
	if (person.year % 400 === 0) return true
	
	else if (person.year % 100 === 0 && person.year % 400 !== 0) return false

	else if (person.year % 4 === 0) return true

	else return false;
}
