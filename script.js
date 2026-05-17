function getFormvalue() {
   //Write your code here
     //Write your code here
    // e.preventDefault();
	let fName = document.querySelector('input[name="fname"]').value.trim();
	let lName = document.querySelector('input[name="lname"]').value.trim();

   if(fName!= "" && lName != ""){
     alert(`${fName} ${lName}`);
   }


}
