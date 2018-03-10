// Algorithm is taken from "https://en.wikipedia.org/wiki/Zelleri%27s_congruence".
// Person object, year, month, and day are from person.js, year.js, month.js, and
// day.js respectively.

;
let button = document.querySelector('button')
let dayOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday',	'Wednesday', 'Thursday', 'Friday']
let m = 0,
	k = 0,
	j = 0,
	h = 0

console.log('m=',m,'k=',k,'j=',j)
button.addEventListener('click', function() {
	m = person.month
	k = parseInt(person.year % 100)
	j = parseInt(person.year / 100)

	Calculate()
})

// **************************** Calculate() ************************************

function Calculate() {
	let temp = person.month
	if(person.month < 3) {
		person.month += 12
		person.year -= 1
		k = parseInt(person.year % 100)
		j = parseInt(person.year / 100)
	}

	h = parseInt(((person.day + parseInt((((person.month + 1) * 13) / 5)) + k +
		parseInt((k/4)) + parseInt((j/4))) + parseInt((5*j))) % 7)

		if(temp < 3) {
			person.month -= 12
			person.year += 1
		}
}
