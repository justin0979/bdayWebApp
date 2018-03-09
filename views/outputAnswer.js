;
let arr = []
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
		answer.innerHTML = "That's not a date."
	} else {
		answer.innerHTML = '<strong>That date falls on a <h1>' + dayOfWeek[h] + '</h2></strong>'
		console.log('month =',person.month,'day =',person.day,'year =',person.year)
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
	interval = setInterval(function() {
		answer.innerHTML = 'Calculating Date' + dots[counter++]
		if(counter > 3) {
			counter = 0
		}
	}, speed)
	x.push(interval)
}
