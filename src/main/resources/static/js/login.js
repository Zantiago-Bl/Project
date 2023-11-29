//Animación login
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// ----------------------------------------------

$(document).ready(function() {

});

async function pyLogin() {
	
	let data = {	};
	data.pyNit = document.getElementById('txtNit').value;
	data.pyPassword = document.getElementById('txtPassword').value;
	
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
		localStorage.email = data.pyNit;
		window.location.href = "pyusers.html";
	} else {
		alert ("Inicio de sesión incorrecto. Inténtelo nuevamente.")
	}

};

async function login() {
	
	console.log("Hola");
	
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




