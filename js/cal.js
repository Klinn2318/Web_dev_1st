let output = document.getElementById('output');
const buttonsContainer = document.getElementById('buttons-container');



let resultado = undefined;

buttonsContainer.addEventListener('click',(e)=>{
    clickedBtn = e.target;

    if(clickedBtn.textContent == "Clear"){
        resultado = undefined;
        output.textContent = '';
    }

    if(clickedBtn.textContent == "="){
		
        resultado = eval(output.textContent);
        output.textContent = resultado;
    }

    else if(clickedBtn.textContent !== "Clear" && resultado == undefined && clickedBtn.tagName == 'BUTTON'){
		console.log(clickedBtn)
        output.textContent += clickedBtn.textContent;
    }
});