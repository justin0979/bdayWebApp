;
let startDay = 01;
let endDay = 31;
let dayOptions = '<option>Day</option>'
let myDay = document.querySelector('#day')

myMonth.addEventListener('change', () => {
	// if month is feb and non-learpyear
	if(person.month === 2 && !isLeapYear()) {
		endDay = 28
	}
	// if month is feb and leapyear 
	else if(person.month === 2 && isLeapYear()) {
		endDay = 29
	}
	else if(person.month === 4 || person.month === 6 || person.month === 9 || person.month === 11){
		endDay = 30
	}
	else {
		endDay = 31
	}
	
	// Resets dayOptions so subsequent dates will not concantenate days to the already added days
	dayOptions = '<option>Day</option>'

	for (let day = startDay; day <= endDay; day++) {
		dayOptions += `<option>${day}</option>`
	}

	myDay.innerHTML = dayOptions
})

myYear.addEventListener('change', function() {
	if (isLeapYear() && person.month == 2 && dayOptions.substring(dayOptions.length-11, dayOptions.length-9) != '29') {
		dayOptions += '<option>29</option>'
		myDay.innerHTML = dayOptions
	}

	// if statement removes '29' from non-leap years that selected February.
	// '29' occurs more than once if this statement is not here and the user selected a leap
	// year and then changed their mind and changed the year to a non-leap year but kept February.
	// Without this code, then after the change, February would still show '29' as an option.
	if(!isLeapYear() && dayOptions.substring(dayOptions.length-11, dayOptions.length-9) == '29') {
		dayOptions = dayOptions.substring(0, dayOptions.length - 19)
		myDay.innerHTML = dayOptions;
	}
})

myDay.addEventListener('change', () => {
	person.day = parseInt(myDay.value)
})
