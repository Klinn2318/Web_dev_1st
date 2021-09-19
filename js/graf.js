
var ctx= document.getElementById("grafic").getContext("2d");
const d1= document.getElementById("d1");
const d2= document.getElementById("d2");
const d3= document.getElementById("d3");


var g= new Chart(ctx,{
	type:"bar",
		data:{
			labels:['col1','col2','col3'],
			datasets:[{
				label:'Num datos',
				data:[10,9,15],
				backgroundColor:[
				'rgb(66, 134, 244,0.2)',
				'rgb(74, 135, 72,0.2)',
				'rgb(229, 89, 50,0.2)'
				],
				borderColor:[
					'rgb(66, 134, 244)',
					'rgb(74, 135, 72)',
					'rgb(229, 89, 50)'
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