function enableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

function enableSizeSlider()
{
    document.querySelector("#arr_sz").disabled = false;
}

function enableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = false;
}


    // Used in async function so that animations of sorting, takes input time in ms
function wait(ms) 
{ 
    return new Promise(resolve=>
        { 
            setTimeout(() => { resolve('') }, ms); 
        })  
}

    // Default input for wait function (260ms)
let delay = 20;

    // Selecting speed slider using DOM
let delayElement = document.querySelector('#speed_input');

    // Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});


    // Selecting size slider using DOM
let arraySize = document.querySelector('#arr_size');

    // Event listener, click, mouseover,etc
arraySize.addEventListener('input', function()
{
    createNewArray(parseInt(arraySize.value));
});


    // Creating array to store randomly generated numbers
let array = [];

    // Call to display bars right when you visit the site
createNewArray();

function createNewArray(noOfBars=50) 
{
        // calling helper function to delete old bars from dom
    deleteChild();

        // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) 
    {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

        // bars id in body tag.
    const bars = document.querySelector("#bars");

        // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() 
{
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) 
{
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
