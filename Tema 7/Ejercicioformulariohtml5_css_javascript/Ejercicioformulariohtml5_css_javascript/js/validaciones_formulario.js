const d = document;
export function validacion() {
	const $formulario = document.getElementById('formulario');
	const $inputs = document.querySelectorAll('#formulario input');
	/*seleccionar todos los elementos del formulario de clase contact-form con 
	atributo required, es decir, solo aquellos que vamos realmente a validar */
	const $inputsRequeridos = document.querySelectorAll('.contact-form [required]');
	//console.log($inputs);
	

/* recorrer los inputs recogidos en la variable $inputs e ir asignando a cada uno de ellos
dinámicamente un span */
	$inputsRequeridos.forEach((input) => {
		const $span = document.createElement('span');
		//a cada span le asignamos como id el atributo name de cada input.
		$span.id = input.name;
		// el contenido del span va a ser lo que venga en el title de cada input
		$span.textContent = input.title;
		// Le asignamos la clase formulario-mensaje-error y lo ocultamos
		$span.classList.add('contact-form-error', 'none');
		//insertar el elemento justo al lado de su input como hermano posterior (afterend)
		input.insertAdjacentElement('afterend', $span);
	});




	/*vamos usar el evento keyup para comprobar mientras se vaya escribiendo, podría
	haberse hecho por ejemplo al submit */
	d.addEventListener('keyup', (e) => {
		// validará solo aquellos campos requeridos de la clase del formulario
		if (e.target.matches('.contact-form [required]')) {
			//creación de variable del DOM para apuntar a e.target
			const $input = e.target;
			/* usamos el operador de cortocircuito(||) para controlar los textarea que 
			no tienen atributo pattern, pero sí le pusimos atributo data-pattern*/
			const patron = $input.pattern || $input.dataset.pattern;
			/* comprobar que cumple el patrón pero que empiece a validar cuando 
			ya haya algo escrito en el cuadro de texto, para que no salga nada más
			hacer clic en el cuadro de texto y esté vacío */
			if (patron && $input.value !== '') {
				//variable para guardar la expresión regular en la que se le pasa el patrón que quiero evaluar como parámetro
				const regEx = new RegExp(patron);
				console.log("el input tiene patrón",$input.value);
				//campos.nombre = true;
				//campos.comments = true;
				//comprobar si el patrón cumple o no con la expresión regular
				if (!regEx.exec($input.value)) {
					/*capturamos el id del span que creamos dinámicamente y le añadirmos 
					la clase active y en caso contrario se la retiramos, para que se ejecute
					el css correspondiente (contact-form-error.is-active)*/
					d.getElementById($input.name).classList.add('is-active');
				} else {
					d.getElementById($input.name).classList.remove('is-active');
				}
			}
			if (!patron) {
				//campos.nombre = false;
				//campos.comments = false;
				if ($input.value === '') {
					d.getElementById($input.name).classList.add('active');
				} else {
					d.getElementById($input.name).classList.remove('active');
				}
			}
		}
	});
}
