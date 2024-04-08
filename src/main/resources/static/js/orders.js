var pageA = document.getElementById("page-a");
var pageB = document.getElementById("page-b");
var pageC = document.getElementById("page-c");
var pageD = document.getElementById("page-d");
var pageE= document.getElementById("page-e");
const customButtons = document.querySelectorAll('.custom-button');
let responses = {
    pageOne: "",
    pageTwo: "",
    pageThree: "",
    pageFour: "",
    pageFive: "",
};

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
    setTimeout(() => {
        pageD.style.display = "none";
        pageE.style.display = "flex";
        pageE.classList.remove("fade-out");
        pageE.classList.add("fade-in");
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
        };

        if(document.getElementsByClassName('page-two') && document.getElementById('page-b').style.display === 'flex'){
            console.log("desde 2", e.currentTarget);
            responses.pageTwo = e.currentTarget.getAttribute('data-info');
        };
    
        if(document.getElementsByClassName('page-three') && document.getElementById('page-c').style.display === 'flex'){
            console.log("desde 3", e.currentTarget);
            responses.pageThree = e.currentTarget.getAttribute('data-info');
        };
        
        if(document.getElementsByClassName('page-four') && document.getElementById('page-d').style.display === 'flex'){
            console.log("desde 4", e.currentTarget);
            responses.pageFour = e.currentTarget.getAttribute('data-info');
        };
    
    console.log(responses);
}


customButtons.forEach(button => {
    button.addEventListener('click', algo);
});