;
let startMonth = 1;
let endMonth = 12;
let monthOptions = '<option>Month</option>'
let monthNames = [
					' NULL ', 
					' - January', ' - February', ' - March', ' - April',
					' - May', ' - June', ' - July', ' - August', 
					' - September', ' - October', ' - November', '- December'
				]

for (let m = startMonth; m <= endMonth; m++) {
	monthOptions += `<option>${m+monthNames[m]}</option>`
}

let myMonth = document.querySelector('#month')

myMonth.innerHTML = monthOptions

myMonth.addEventListener('change', () => person.month = parseInt(myMonth.value.substring(0,3)))
