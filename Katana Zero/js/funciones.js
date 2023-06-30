	const flechas = document.querySelectorAll(".modal button");
	const miniaturas = document.querySelectorAll(".galeria a");	
	const modal = document.querySelector(".modal");
	const imgModal = document.querySelector(".modal img");
	const rutasImg = [];
	let imgActual = 1;

	miniaturas.forEach((miniatura, i) => {
		rutasImg.push(miniatura.getAttribute("href"));
		miniatura.addEventListener("click", evento => {
			evento.preventDefault();			
			imgActual = i;
			imgModal.setAttribute("src",rutasImg[imgActual]);
			modal.classList.toggle("visible");
		});
	});

	modal.addEventListener("click", () => {
		modal.classList.toggle("visible");
	});

	flechas.forEach((flecha,i) => {
		flecha.addEventListener("click", evento => {
			evento.stopPropagation();
			if(i == 0){
				imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1; 
			}else{
				imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
			}
			imgModal.setAttribute("src",rutasImg[imgActual]);
		});
	});

