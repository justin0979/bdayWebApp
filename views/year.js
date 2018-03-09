;
let startYear = 100
let endYear = new Date().getFullYear()
let yearOptions = '<option>Year</option>'

for (let year = endYear; year >= startYear; year--) {
	yearOptions += `<option>${year}</option>`
}

let myYear = document.querySelector('#year')
myYear.innerHTML = yearOptions

myYear.addEventListener('change', () => person.year = parseInt(myYear.value))

function isLeapYear() {
	if (person.year % 400 === 0) return true
	
	else if (person.year % 100 === 0 && person.year % 400 !== 0) return false

	else if (person.year % 4 === 0) return true

	else return false;
}
