

//We only have to change background-color and height of the sorting element.

var speed=5;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=5;
                break;
        case 3: speed=50;
                break;
        case 4: speed=500;
                break;
        case 5: speed=1000;
                break;
    }
    
}

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    });
}


