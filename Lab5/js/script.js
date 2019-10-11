/*used in Contact.html form element*/

function valid() {

	var box =document.getElementById('name');
	var box2=document.getElementById('email');
	var box3=document.getElementById('phone');

	if (box.value=="" || box.value == null) {
		alert("Please Enter Your Name");

		return false;
	}

	else if (box2.value=="" || box2.value == null) {
		alert("Please Enter A Valid Email");

		return false;
	}

	else if (box3.value == "" || box3.value == null) {
		alert("Please Enter Your Phone Number");

		return false;
	}
	
}

/*used in all pages, Subscribe Weekly button form*/
function validSubscribe() {
	var subemail=document.forms["form"]["subemail"].value;


	if (subemail.value == "" || subemail.value==null) {

		alert("Enter a Valid Email");
		return false;
	}
}
