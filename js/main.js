

// function showYear(){
	

    const myYear = new Date().toLocaleDateString(undefined, {
		year : 'numeric',
		month : 'long'
	
	})

	document.querySelector('#site-year').innerHTML = myYear;
			
	
// }
// showYear();
