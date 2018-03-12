// This portion stores person.month as user specified month & sets the month menu.

let startMonth = 1,
    endMonth = 12,
    monthOptions = '<option>Month</option>',
    monthNames = [
					' NULL ', 
					' - January', ' - February', ' - March', ' - April',
					' - May', ' - June', ' - July', ' - August', 
					' - September', ' - October', ' - November', '- December'
				]
let myMonth = document.querySelector('#month')

for (let m = startMonth; m <= endMonth; m++) {
	monthOptions += `<option>${m+monthNames[m]}</option>`
}

myMonth.innerHTML = monthOptions

// Sets person.month to user data.
myMonth.addEventListener('change', () => person.month = parseInt(myMonth.value.substring(0,3)))
