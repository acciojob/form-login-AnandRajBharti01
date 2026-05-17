function getFormvalue() {
   let fName = document.querySelector('input[name="fname"]');
	let lName = document.querySelector('input[name="lname"]');
	// let btn = document.querySelector(input[name="Submit"]);

	// btn.addEventListenr("click", (e)=>{
    //     e.preventDefault();
	// 	alert(`${fName.value} ${lName.value}`)
	// })
   if(fName!= "" && lName != ""){
     alert(`${fName} ${lName}`);
   }
}
