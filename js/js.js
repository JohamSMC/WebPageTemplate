$(document).ready(function(){
    $("#btn1").click(function(){
        toastr["info"]("Bienvenido a la Pagina","Titulo de Toast");        
    });
});

const typed = new Typed('.typed', {
	strings: [
		'<i class="" style="color:#f22424;">JAVA</i>',
		'<i class="" style="color:#e7d30f;">PYTHON</i>',
		'<i class="" style="color:#1f77e7;">C++</i>',
		'<i class="" style="color:#544f4f;">PERL</i>',
		'<i class="" style="color:#faa700;">JAVASCRIPT</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

(function () {
	var actualizarHora = function () {
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();


		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;

		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

		pMes.textContent = meses[mes];

		pYear.textContent = year;

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas = 12;
		};

		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10) { minutos = "0" + minutos };
		if (segundos < 10) { segundos = "0" + segundos };
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;

	};
	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())