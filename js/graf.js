let diagBarBtn = document.querySelector('#diag-bar');
let diagPieBtn = document.querySelector('#diag-pie');
let diagLineBtn = document.querySelector('#diag-line');

let graficContext = document.querySelector('#grafic').getContext("2d");

let chart;

let datosInput;
let datos = [];
let labels = [];
let data = [];
//Funciones

function recibirDatos(){
	labels.length = 0;
	data.length = 0;
	
	datosInput = document.querySelector('#datos-input').value.trim();
	datosInput = datosInput.replace(/  /g, '')

	datos = datosInput.split(',');
	datos.forEach(element => {
		datos[datos.indexOf(element)] = element.split(':')
	});

	datos.forEach(element => { // organizar labels
		labels.push(datos[datos.indexOf(element)][0]);
	});

	datos.forEach(element => { // organizar datos
		data.push(datos[datos.indexOf(element)][1]);
	});

}
//Diagrama Barras
function createBars(e){
	e.preventDefault();
	console.log('Barras');

	if(chart != undefined){
		chart.destroy()
	}

	recibirDatos();

	chart = new Chart(graficContext,{
		type:"bar",
			data:{
				labels:labels,
				datasets:[{
					label:'n',
					data:data,
					backgroundColor:[
					'rgb(66, 134, 244,0.2)',
					'rgb(74, 135, 72,0.2)',
					'rgb(229, 89, 50,0.2)',
					'rgb(202, 111, 30,0.2)',
					'rgb(244, 208, 63,0.2)',
					'rgb(125, 60, 152,0.2)',
					'rgb(34, 153, 84,0.2)',
					'rgb(131, 145, 146,0.2)',				
					
					],
					borderColor:[
						'rgb(26, 188, 156,0.6)'
					]
				}]
			},
		options:{
			scales:{
				yAxes:[{
				ticks:{
					beginAtZero:true
					}
				}]
			}
		}
});
}
//Diagrama Pie
function createPie(e){
	e.preventDefault();
	console.log('Pie');
		if(chart != undefined){
		chart.destroy()
	}

	recibirDatos();

	chart = new Chart(graficContext,{
			type:"pie",
				data:{
					labels:labels,
					datasets:[{
						label:'n',
						data:data,
						backgroundColor:[
							'rgb(66, 134, 244,0.2)',
							'rgb(74, 135, 72,0.2)',
							'rgb(229, 89, 50,0.2)',
							'rgb(202, 111, 30,0.2)',
							'rgb(244, 208, 63,0.2)',
							'rgb(125, 60, 152,0.2)',
							'rgb(34, 153, 84,0.2)',
							'rgb(131, 145, 146,0.2)',				
							
							],
							borderColor:[
								'rgb(26, 188, 156,0.6)'
							]					
						}]
				}
	/*
			options:{
				scales:{
					yAxes:[{
					ticks:{
						beginAtZero:true
						}
					}]
				}
			}

	*/

	}); // create chart;
}
//Diagrama Lineas
function createLine(e){
	e.preventDefault();
	console.log('Line');
	if(chart != undefined){
		chart.destroy()
	}

	recibirDatos();

	chart = new Chart(graficContext,{
			type:"line",
			data:{
				labels:labels,
				datasets:[{
					label:'n',
					data:data,
					backgroundColor:[
						'rgb(66, 134, 244,0.2)',
						'rgb(74, 135, 72,0.2)',
						'rgb(229, 89, 50,0.2)',
						'rgb(202, 111, 30,0.2)',
						'rgb(244, 208, 63,0.2)',
						'rgb(125, 60, 152,0.2)',
						'rgb(34, 153, 84,0.2)',
						'rgb(131, 145, 146,0.2)',				
						
						],
						borderColor:[
							'rgb(26, 188, 156,0.6)'
						]					
					}]
			},
			options:{
				scales:{
					yAxes:[{
					ticks:{
						beginAtZero:true
						}
					}]
				}
			}
	}); // create chart;
}

//Listeners
diagBarBtn.addEventListener('click',createBars);
diagPieBtn.addEventListener('click',createPie);
diagLineBtn.addEventListener('click',createLine);
