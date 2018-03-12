// Algorithm is taken from "https://en.wikipedia.org/wiki/Zeller%27s_congruence".
// Person object (year, month, and day) are set it person.js, year.js, month.js, and
// day.js respectively.

let button = document.querySelector('button')
let dayOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday',	'Wednesday', 'Thursday', 'Friday']
let m = 0,
	k = 0,
	j = 0,
	y = 0,
	h = 0

button.addEventListener('click', function() {
	m = person.month
	y = person.year
	k = parseInt(y % 100)
	j = parseInt(y / 100)

	Calculate()
})

/***************************** Calculate() ************************************
	
	Purpose: Workhorse of the program because this function calcuates h, which
			 maps to the correct day of the week in the array dayOfWeek.

*/

function Calculate() {
	let temp = m
	
	if(m < 3) {
		m += 12 // month is adjusted to account for Zeller's algorithm having
				// January = 13 & February = 14.
		y -= 1  // 13(Jan) & 14(Feb) are calculated as the following year.
				// "For 1 January 2000, the date would be treated as the 13th month
				//	of 1999..." (wikipedia.org).
		k = parseInt(y % 100)
		j = parseInt(y / 100)
	}

	// h is calculated as displayed in Zeller's algorithm.
	h = parseInt(((person.day + parseInt((((m + 1) * 13) / 5)) + k +
		parseInt((k/4)) + parseInt((j/4))) + parseInt((5*j))) % 7)

}
