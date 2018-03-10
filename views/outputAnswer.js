;
let arr = []
let cir = document.querySelector('#circle')
let answer = document.querySelector('#answer')
let newClick = document.querySelectorAll('.date')
let calculating = true;
let dots = [' ', '.', '..', '...']
let counter = 0,
	speed = 1000,
	interval,
	x = []

// button declared in dayOfWeekConversion.js
button.addEventListener('click',function() {
	calculating = false
	
	if(dayOfWeek[h] == undefined) {
		// This code only executes if a date is not fully input.
		cir.classList.remove('loader')
		cir.innerHTML = 'X'
		cir.classList.add('error')
		answer.innerHTML = "That's not a date."
	} else {
		// Displays a fully input day to the bday.
		cir.classList.remove('loader')
		cir.classList.add('underline')
		answer.innerHTML = '<strong>That date falls on a <h1>' + dayOfWeek[h] + '</h2></strong>'
		console.log('month =',person.month,'day =',person.day,'year =',person.year)
		person.month = undefined
		person.day = undefined
		person.year = undefined
	}
	x.forEach(ele => clearInterval(ele))
	x.length = 0
	calculating = true
})

newClick[0].addEventListener('change', () => {
	work()
})

newClick[1].addEventListener('change', () => {
	work()
})

newClick[2].addEventListener('change', () => {
	work()
})

let work = () => {
	if(calculating) {
		startOutput()
	}
	calculating = false
}

let startOutput = () => {

//	this starts the css animation once a year/month/day is selected
	cir.classList.remove('underline')
	cir.classList.remove('error')
	cir.innerHTML = ''
	answer.innerHTML = 'Calculating'
	cir.classList.add('loader')	
/*
	// This commented out code displays a series of dots instead of the loading circle.
	// It is not worth looking at, just keeping it here in case the need for such code 
	// is needed for a command line display.
	interval = setInterval(function() {
		answer.innerHTML = 'Calculating Date' + dots[counter++]
		if(counter > 3) {
			counter = 0
		}
	}, speed)
	x.push(interval)
*/
}
