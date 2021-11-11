
function add(){
   var v=Number(document.getElementById('lbl').innerHTML);
   document.getElementById('lbl').innerHTML=v+1;
}

function mines(){
   var v=Number(document.getElementById('lbl').innerHTML);
   document.getElementById('lbl').innerHTML=v-1;
}

function finish(){
    
    var min=document.getElementById('min').value;
    var final=document.getElementById('lbl').innerHTML;
    if(min<=final ){
        alert("Thanks For Using Our Site");
    }
    else{
        alert("Invalid Please Send Salawat According to the Minimum input");
    }
}

function again(){
    document.getElementById('lbl').innerHTML=0;
    document.getElementById('min').value=0;
}