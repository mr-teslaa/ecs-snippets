/** =======================================================
***	A Form Validator from Mr. Tesla	                    ***
*** By EcmaScript [ JS ]                                ***
*** Follow of Develop this code on github               ***
*** Github : https://github.com/mr-teslaa               ***
======================================================= **/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});





function checkInputs() {
	//get the values from the input 
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	//check username
	if(usernameValue === '') {
		//show error and add error class
		setErrorFor(username, 'Username can not be blank');
	} else {
		//add success class
		setSuccessFor(username);
	}

	//check email
	if(emailValue === '') {
		//show error and add error class
		setErrorFor(email, 'Email address can not be blank');
	} else {
		//add success class
		setSuccessFor(email);
	}
	/* else if(!isEmail(emailValue)) {
		setErrorFor(email, 'Email address is not valid');
	}*/

	//check password
	if(passwordValue === '') {
		//show error and add error class
		setErrorFor(password, 'password can not be blank');
	} else {
		//add success class
		setSuccessFor(password);
	}

	//check confirm passowrd
	if(password2Value === '') {
		//show error and add error class
		setErrorFor(password2, 'Confirm password can not be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else {
		//add success class
		setSuccessFor(password2);
	}

}





function setErrorFor(input, message) {
	const formControl = input.parentElement;	// .form-control
	const small = formControl.querySelector('small');

	//add error message inside small
	small.innerText = message;

	//add error class 
	formControl.className = 'form-control error';
}





function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

/*function isEmail(email) {
	return "some regular expression. collected from internet";
}*/