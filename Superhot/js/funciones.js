const pantalla = document.querySelector("p");
const spans = document.getElementsByTagName("span");
const descripcion = document.querySelector(".descripcion");
const argumento = document.querySelector(".argumento");
const mecanicas = document.querySelector(".mecanicas");
let caracteres = 0;
let texto = "";
const parrafos = [descripcion,argumento,mecanicas];
const botonesTexto = document.querySelectorAll(".botones button");
const marcador = document.querySelector(".barra_input");
const flechas = document.querySelectorAll(".modal button");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".imagen_modal");
let imgActual = 1;
const botonesImg = document.querySelectorAll(".modal button");

//esta variable, mediante una función, hace "parpadear" un rectángulo al final del texto inicial, simulando una consola de comandos

let timerMarcardor = setInterval(function(){
		marcador.classList.toggle("visible");
	}, 800);

function insertarTexto(){
	pantalla.innerHTML = texto.split("").map(letra => {		
		if(letra == " "){
			return letra;
		}
		caracteres++;
		return `<span>${letra}</span>`;
	}).join("");
	for(let i = 0; i < caracteres; i++){
		setTimeout(() => {		
			spans[i].classList.add("visible");
		}, 10 * i);		
	};
};

//aquí asignamos las funciones a los botones y capturamos la sección que corresponde según el array "parrafos"

botonesTexto.forEach((boton, i) => {
	boton.addEventListener("click", () => {
		caracteres = 0;
		pantalla.innerHTML = "";
		texto = parrafos[i].innerHTML;
		insertarTexto();
	});
});

//segunda seccion de botones, el central abre la seccion de imagenes y las flechas cambian el atributo src en la imagen mostrada

botonesImg.forEach((boton,i) => {
	boton.addEventListener("click", () =>{
		if(i == 1){
			imgModal.classList.toggle("visible");
		}else{
			if(i == 0){
				imgActual = imgActual > 1 ? imgActual - 1 : imgActual = 5;
				imgModal.setAttribute("src",`Img/0${imgActual}.jpg`);
			}else{
				imgActual = imgActual < 5 ? imgActual + 1 : imgActual = 1;
				imgModal.setAttribute("src",`Img/0${imgActual}.jpg`);
			}
		}	
	});
});

