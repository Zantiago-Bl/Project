$(document).ready(function() {


});

async function login() {
	
	let data = {	};
	data.mail = document.getElementById('txtEmail').value;
	data.password = document.getElementById('txtPassword').value;
	
  const request = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
  });
  
  const response = await request.text();
    if (response != "Fail"){
		localStorage.token = response;
		localStorage.email = data.mail;
		window.location.href = "users.html";
	} else {
		alert ("Inicio de sesión incorrecto. Inténtelo nuevamente.")
	}
};




