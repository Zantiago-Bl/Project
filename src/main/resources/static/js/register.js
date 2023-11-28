
$(document).ready(function() {


});

async function registerUsers() {
	
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
  
  alert("¡Usuario creado con éxito!");
  window.location.href = "login.html";
};	




