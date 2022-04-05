function fcirculo(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("circulo");
}

function frombo(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("rombo");
}

function frectanguloh(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("rectanguloh");
}

function frectangulov(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("rectangulov");
}

function fsubir(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("subir");
}

function fabajo(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("abajo");
}

function fizquierda(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("izquierda");
}

function fderecha(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("derecha");
}

function fdiagonal(){
	var selector = document.getElementById("figura");
	selector.className='';
	selector.classList.toggle("diagonal");
}

function operaciones(){
	var a = Number(document.getElementById("valor1").value);
	var b = Number(document.getElementById("valor2").value);

    var operacion = document.getElementById("operaciones").value;

	switch (operacion) {
		case "+":
			resultado = a + b;
			document.getElementById("respuesta").value = resultado;
			break;
		case "-":
		resultado = a - b;
			document.getElementById("respuesta").value = resultado;
			break;
		case "*":
		resultado = a * b;
			document.getElementById("respuesta").value = resultado;
			break;
		case "/":
		resultado = a / b;
			document.getElementById("respuesta").value = resultado;
			break;		
	}
}

function chatActive(){
	var selector = document.getElementById("chat");
	selector.classList.toggle("active");
	var selector2 = document.getElementById("btnChat");
	selector2.classList.toggle("active");
}