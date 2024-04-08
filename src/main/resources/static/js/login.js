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


async function pyLogin(e) {
	e.preventDefault();

	
	let data = {	};
	data.pyNit = document.getElementById('txtNit').value;
	data.pyPassword = document.getElementById('txtPyPassword').value;
	
  const request = await fetch('/api/pylogin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
  });
  
  const response = await request.text();
    if (response != "Fail"){
		localStorage.setItem("token", response)
		localStorage.setItem("nit", data.pyNit)
		window.location.href = "pyusers.html";
	} else {
		alert ("Inicio de sesión incorrecto. Inténtelo nuevamente.")
	}

};

async function login(e) {
	e.preventDefault();
	
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

const goRegister = () => window.location.href = "register.html";




