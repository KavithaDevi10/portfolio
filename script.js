// typing animation

const text = "Python Full Stack Developer";
let index = 0;

function type() {

document.querySelector(".typing").textContent =
text.slice(0,index++);

if(index > text.length){
index = 0;
}

}

setInterval(type,150);



// scroll animation

window.addEventListener("scroll", () => {

document.querySelectorAll(".reveal").forEach((el)=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("active");
}

});

});



// dark mode toggle

const toggle = document.getElementById("darkModeToggle");

toggle.onclick = () =>{
document.body.classList.toggle("dark");
};





document.querySelectorAll(".view-btn").forEach(button => {

button.addEventListener("click", function(){

let details = this.nextElementSibling;

if(details.style.display === "block"){
details.style.display = "none";
this.textContent = "View Details";
}else{
details.style.display = "block";
this.textContent = "Hide Details";
}

});

});