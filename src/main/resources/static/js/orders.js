var pageA = document.getElementById("page-a");
var pageB = document.getElementById("page-b");
var pageC = document.getElementById("page-c");
var pageD = document.getElementById("page-d");
var pageE = document.getElementById("page-e");
var pageF = document.getElementById("page-f");
var pageG = document.getElementById("page-g");
const customButtons = document.querySelectorAll('.custom-button');
let priceFlavor;
let priceStuffed;
let priceGlazed;
let priceToppings;
let total;
var element = document.getElementById("total-price");
let responses = {
    pageOne: "",
    pageTwo: "",
    pageThree: "",
    pageFour: "",
    pageFive: "",
};
var cart = [];
var cartTableBody;



const goPageA = () => {
    pageB.classList.remove("fade-in");
    pageB.classList.add("fade-out");
    setTimeout (() => {
        pageB.style.display = "none";
        pageA.style.display = "flex";
        pageA.classList.remove("fade-out");
        pageA.classList.add("fade-in");
    }, 500);
}

function goPageB() {
    pageA.classList.remove("fade-in");
    pageA.classList.add("fade-out");
    pageC.classList.remove("fade-in");
    pageC.classList.add("fade-out");
    setTimeout(() => {
		pageC.style.display = "none";
        pageA.style.display = "none";
        pageB.style.display = "flex";
        pageB.classList.remove("fade-out");
        pageB.classList.add("fade-in");
    }, 500);
}

function goPageC() {
    pageB.classList.remove("fade-in");
    pageB.classList.add("fade-out");
    pageD.classList.remove("fade-in");
    pageD.classList.add("fade-out");
    setTimeout(() => {
		pageD.style.display = "none";
        pageB.style.display = "none";
        pageC.style.display = "flex";
        pageC.classList.remove("fade-out");
        pageC.classList.add("fade-in");
    }, 500);
}

function goPageD() {
    pageC.classList.remove("fade-in");
    pageC.classList.add("fade-out");
    pageE.classList.remove("fade-in");
    pageE.classList.add("fade-out");
    setTimeout(() => {
		pageC.style.display = "none";
        pageE.style.display = "none";
        pageD.style.display = "flex";
        pageD.classList.remove("fade-out");
        pageD.classList.add("fade-in");
    }, 500);
}

function goPageE() {
    pageD.classList.remove("fade-in");
    pageD.classList.add("fade-out");
    pageF.classList.remove("fade-in");
    pageF.classList.add("fade-out");
    setTimeout(() => {
        pageD.style.display = "none";
        pageF.style.display = "none";
        pageE.style.display = "flex";
        pageE.classList.remove("fade-out");
        pageE.classList.add("fade-in");
    }, 500);
}

function goPageF() {
    pageE.classList.remove("fade-in");
    pageE.classList.add("fade-out");
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "Precio total del pedido: $" + total.toFixed(2);
    setTimeout(() => {
        pageE.style.display = "none";
        pageF.style.display = "flex";
        pageF.classList.remove("fade-out");
        pageF.classList.add("fade-in");
    }, 500);
    if(total == undefined){
        alert("Error, opciones invalidas, por favor asegurese de completar todo el formulario");
        window.location.reload();
    };
}


function goCart() {
    pageA.classList.remove("fade-in");
    pageA.classList.add("fade-out");
    pageB.classList.remove("fade-in");
    pageB.classList.add("fade-out");
    pageC.classList.remove("fade-in");
    pageC.classList.add("fade-out");
    pageD.classList.remove("fade-in");
    pageD.classList.add("fade-out");
    pageE.classList.remove("fade-in");
    pageE.classList.add("fade-out");
    pageF.classList.remove("fade-in");
    pageF.classList.add("fade-out");
    
    setTimeout(() => {
        pageA.style.display = "none";
        pageB.style.display = "none";
        pageC.style.display = "none";
        pageD.style.display = "none";
        pageE.style.display = "none";
        pageF.style.display = "none";
        pageG.style.display = "flex";
        pageG.classList.remove("fade-out");
        pageG.classList.add("fade-in");

        cartTableBody = document.getElementById("cart-table").getElementsByTagName('tbody')[0];
        cartTableBody.innerHTML = "";

        if (responses.pageOne !== "") {
            addProductToCart(responses.pageOne, priceFlavor);
        }
        if (responses.pageTwo !== "") {
            addProductToCart(responses.pageTwo, priceStuffed);
        }
        if (responses.pageThree !== "") {
            addProductToCart(responses.pageThree, priceGlazed);
        }
        if (responses.pageFour !== "") {
            addProductToCart(responses.pageFour, priceToppings);
        }

        var totalPriceElement = document.getElementById("total-price");
        totalPriceElement.textContent = "Precio total del pedido: $" + total.toFixed(2);
    }, 500);
}



const algo = (e) => {
    Array.from(document.getElementsByClassName('custom-button')).forEach(el => {
        el.classList.remove('active-pushed');
    });
    e.currentTarget.classList.add('active-pushed');
        if(document.getElementsByClassName('page-one') 
        	&& document.getElementById('page-c').style.display === 'none'
        		&& document.getElementById('page-b').style.display === 'none'
        			&& document.getElementById('page-d').style.display === 'none'){
            console.log("desde 1", e.currentTarget);
            responses.pageOne = e.currentTarget.getAttribute('data-info');
            priceFlavor = parseFloat(e.currentTarget.getAttribute('data-price'));
        };

        if(document.getElementsByClassName('page-two') && document.getElementById('page-b').style.display === 'flex'){
            console.log("desde 2", e.currentTarget);
            responses.pageTwo = e.currentTarget.getAttribute('data-info');
            priceStuffed = parseFloat(e.currentTarget.getAttribute('data-price'));
        };
    
        if(document.getElementsByClassName('page-three') && document.getElementById('page-c').style.display === 'flex'){
            console.log("desde 3", e.currentTarget);
            responses.pageThree = e.currentTarget.getAttribute('data-info');
            priceGlazed = parseFloat(e.currentTarget.getAttribute('data-price'));
        };
        
        if(document.getElementsByClassName('page-four') && document.getElementById('page-d').style.display === 'flex'){
            console.log("desde 4", e.currentTarget);
            responses.pageFour = e.currentTarget.getAttribute('data-info');
            priceToppings = parseFloat(e.currentTarget.getAttribute('data-price'));
        };
        
    	
       getInput();
    
    console.log(responses);
    total = priceFlavor + priceGlazed + priceStuffed + priceToppings;
    console.log(total);
}

const getInput = () => {
	console.log("Desde la función xd");
	if(document.getElementById("description").value){
		console.log("Desde el if de la función xd");
		responses.pageFive = document.getElementById("description").value;
	}
}

customButtons.forEach(button => {
    button.addEventListener('click', algo);
});

const discard = () => {
	responses = {
	    pageOne: "",
	    pageTwo: "",
	    pageThree: "",
	    pageFour: "",
	    pageFive: "",
	};
	 priceFlavor = 0;
	 priceStuffed = 0;
	 priceGlazed = 0;
	 priceToppings = 0;
	total = 0;
	window.location.reload();
}

const cartContainer = document.getElementById('cart-container');

const addToCart = (product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('cart-item');
    productItem.innerHTML = `
        <span>${product}</span>
        <button class="remove-btn" onclick="removeFromCart(this)">Eliminar</button>
    `;
    cartContainer.appendChild(productItem);
};

const removeFromCart = (button) => {
    button.parentNode.remove();
};

function removeProductFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);

    renderCart();
}

const addToCartAndGo = () => {
    const product = "Pastel"; 
    addToCart(product);
    goCart(); 
};

function proceedToCheckout() {
    
    alert("¡Gracias por tu compra! El pago ha sido procesado exitosamente.");
    goBackend();
    window.location.href = "index.html";
}

function addProductToCart(productName, price) {
    var productId = cart.length + 1; 
    var product = { id: productId, name: productName, price: price };

    cart.push(product); 

    var newRow = cartTableBody.insertRow();
    newRow.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><button onclick="removeProductFromCart(${product.id})">Eliminar</button></td>
    `;
}



function renderCart() {
    cartTableBody.innerHTML = '';

    cart.forEach(product => {
        var newRow = cartTableBody.insertRow();
        newRow.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button onclick="removeProductFromCart(${product.id})">Eliminar</button></td>
        `;
    });
}

const goBackend = () => {
    const url = '/cart/checkout';
    const dataCart = {
        items: cart 
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'Authorization': localStorage.token
        },
        body: JSON.stringify(dataCart)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error al enviar el carrito al backend.');
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};


