const secciones = document.querySelectorAll(".descripcion, .miniaturas");
const scroll = document.querySelector(".scrollDown");

window.addEventListener("scroll", () => {
	if(window.scrollY >= 0){
		scroll.style.display = "none";
	};
	secciones.forEach((seccion,i) => {
		if(window.scrollY >= secciones[i].offsetTop - 700){
			seccion.classList.add("visible");
		};
	});
});

