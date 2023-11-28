// Call the dataTables jQuery plugin

$(document).ready(function() {
	loadUsers();
  $('#usuarios').DataTable();
});

async function loadUsers() {

  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });
  const users = await request.json();
    
  let listHtml = "	";
    
  for (let user of users) {
	  
	let buttonDelete = '<a href="#" onclick="deleteUser(' + user.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';		
	
	let num = user.number == null ? ' - ' : user.number;
	
 	let userHtml = '<tr><td>'+ user.id +'</td><td>'+ user.name +' '+ user.lastName +'</td><td>'
 						+ user.mail +'</td><td>'+ num
 						+' </td><td>' + buttonDelete + '</td><td></td></tr>';
  	listHtml += userHtml;	
  };
  
	document.querySelector('#users tbody').innerHTML = listHtml;
};

function getHeaders(	){
	return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    };
}


async function deleteUser(id) {
	
	if (!confirm('¿Desea eliminar el Usuario '+ id +' ?')){
		return;
	}
	
 const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });
  location.reload();	
}

