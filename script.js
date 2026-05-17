function getFormvalue() {
    //Write your code here
	let fName = document.querySelector(input[name="fname"]);
	let lname = document.querySelector(input[name="lname"]);
	let btn = document.querySelector(input[name="Submit"]);

	btn.addEventListenr("click", ()={
		alert(`${fName.value} ${lName.value}`)
	})

}
