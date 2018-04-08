window.onload = function(){
	var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	function createMonths(){
	  let monthsObject = document.getElementById('months');                                           
	  Months.forEach(function(el, index) {
		let optionEl = document.createElement("option");
		optionEl.value = index;
		optionEl.innerHTML  = el;
		monthsObject.appendChild(optionEl);
	  });
	}
	
	function createYears(){
		let yearsObject  = document.getElementById('years'); 
		for(let startYear = 1990; startYear <= 2020; startYear++){
			let optionEl = document.createElement("option");
			optionEl.value = startYear;
			optionEl.innerHTML  = startYear;
			yearsObject.appendChild(optionEl);
		}
			
	}
	
	function bindEventsToObject() {
		let monthsObject = document.getElementById('months'); 
		let yearsObject = document.getElementById('years'); 
		let prevMonthEl =  document.getElementById('prevMonth'); 
		let nextMonthEl =  document.getElementById('nextMonth'); 
		
		yearsObject.onchange = function(event){
			alert(event.target.value);
		}
		
		prevMonthEl.onclick = function(){
			let currentMonth = monthsObject.value;
			let currentYear = yearsObject.value;
			if(currentMonth == 0 && currentYear > 1990){
				monthsObject.value = 11;
				yearsObject.value = --currentYear;		
			}
			else if(currentMonth != 0) {
				monthsObject.value = --currentMonth;
			}
		}
		
		nextMonthEl.onclick = function(){
			let currentMonth = monthsObject.value;
			let currentYear = yearsObject.value;
			if(currentMonth == 11 && currentYear < 2020){
				monthsObject.value = 0;
				yearsObject.value = ++currentYear;
			}
			else if(currentMonth != 11) {
				monthsObject.value = ++currentMonth;
			}
		}
	}

  
  createMonths();
  createYears();
  bindEventsToObject();
   
}