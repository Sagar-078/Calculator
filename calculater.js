let displayArea = document.getElementsByClassName('.display');
let buttons = document.querySelectorAll('button');
let resultui=document.getElementById('result');



buttons.forEach(element =>{
   
   element.addEventListener('click',(e)=>{
    console.log(e);
    if(e.target.innerText==='='){
        resultui.value=eval(resultui.value);
        return;
    }
    if(e.target.innerText==='AC'){
        resultui.value="";
        return;
    }
    if(e.target.innerText==='DE'){
        resultui.value=resultui.value.substring(0,resultui.value.length-1);
        return;
    }
    if(e.target.className!=='opr'){
        resultui.value+=e.target.innerText;
    }
    
   })
})