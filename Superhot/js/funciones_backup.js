const pantalla = document.querySelector("p");
const spans = document.getElementsByTagName("span");
const descripcion = document.querySelector(".descripcion");
const argumento = document.querySelector(".argumento");
const mecanicas = document.querySelector(".mecanicas");
let orden = [];
let texto = "";
const parrafos = [descripcion,argumento,mecanicas];
const botones = document.querySelectorAll("button");


function insertarTexto(){
	pantalla.innerHTML = texto.split("").map(letra => {
		if(letra == " "){
			return letra;
		}
		orden.push(orden.length > 0 ? orden[orden.length - 1] + 1 : 0);
		return `<span>${letra}</span>`;
	}).join("");
	console.log(orden);


	for(let i = 0; i < orden.length; i++){
		setTimeout(() => {		
			spans[orden[i]].classList.add("visible");
		}, 10 * i);
		
	};
};

botones.forEach((boton, i) => {
	boton.addEventListener("click", () => {
		orden = [];
		pantalla.innerHTML = "";
		texto = parrafos[i].innerHTML;
		insertarTexto();
	});
});