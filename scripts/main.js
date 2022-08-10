
/*
<object>_<action>_<objectname>;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
let inp_as=document.getElementById('a_size');
let array_size=inp_as.value;
let inp_gen=document.getElementById("a_generate");
let inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

let butts_algos=document.querySelectorAll(".algos button");

let div_sizes=[];
let divs=[];
let margin_size;
let cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 4;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:tomato; width:" + 
            (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}


function runalgo()
{

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
    }
}
