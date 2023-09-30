

/*const element = document.body;
element.onload = doSomething;*/

//const element = document.getElementById("myText");
//element.onchange = doSomething;

//element.onmouseover = doSomething;
//element.onmouseleave = doSomething2;




const element = document.getElementById("myDiv");
element.onmousedown =doSomething;
element.onmouseup = doSomething2;


function doSomething()
{
    element.style.backgroundColor = "#125499";
    element.style.color = "white";
}

function doSomething2()
{
    element.style.backgroundColor = "lightgreen";
    element.style.color = "orange";
}
