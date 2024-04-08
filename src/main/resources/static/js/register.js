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
	

async function registerUsers(e) {
	e.preventDefault();
	
	let data = {	};
	data.name = document.getElementById('txtName').value;
	data.lastName = document.getElementById('txtLastName').value;
	data.mail = document.getElementById('txtEmail').value;
	data.password = document.getElementById('txtPassword').value;
	
	let repeatPassword = document.getElementById('txtRepeatPassword').value;
	
	if (repeatPassword != data.password){
		alert("Las contraseñas no coinciden");
		return;
	}
	
  const request = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
  });
  
  alert("¡Usuario "+ data.name +" creado con éxito!");
  window.location.href = "login.html";
};	

async function registerPyUsers(e) {
	e.preventDefault();
	
	let data = {	};
	data.pyName = document.getElementById('txtPyName').value;
	data.pyNit = document.getElementById('txtPyNit').value;
	data.pyNumber = document.getElementById('txtPyNumber').value;
	data.pyPassword = document.getElementById('txtPyPassword').value;
	
	let repeatPyPassword = document.getElementById('txtRepeatPyPassword').value;
	
	if (repeatPyPassword != data.pyPassword){
		alert("Las contraseñas no coinciden");
		return;
	}
	
  const request = await fetch('/api/pyusers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: JSON.stringify(data)
  });
  
  alert("¡Usuario "+ data.pyName +" creado con éxito!");
  window.location.href = "login.html";
};

const goLogin = () => window.location.href = "login.html";




