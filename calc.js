document.querySelector(".heading").addEventListener("click",function()
{
  $(".main").animate({opacity:0.1}).animate({opacity:0.5}).slideToggle().animate({opacity:1}).animate({opacity:4});    
});

var display = document.querySelector(".screen");

function myValues(input)
{
  display.value += input;
}

function myClear()
{
    display.value = '';
}

function myDelete()
{
    display.value = display.value.slice(0,-1);
}

function calculate()
{
    try{
    display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}

