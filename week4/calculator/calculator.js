



const buttons = document.querySelectorAll('#submit');
console.log (buttons)
buttons.forEach(function(button) {
  console.log (button)
   button.addEventListener('click', calculate);
 });

// calculate function
function calculate(event) {
  console.log(event.target)
   // current clicked buttons value
   const clickedButtonValue = event.target.innerHTML;
   
   console.log(clickedButtonValue,clickedButtonValue.length)
   
   if (clickedButtonValue === '+') {
    console.log('adding')
       var add1 = document.getElementById ("add1").value 
       var add2 = document.getElementById ("add2").value
       console.log(add1 + add2)
       var num1 = Number(add1)
       var num2 = Number(add2)
       console.log(num1 + num2)
       display.innerHTML = eval(num1+num2);
       console.log(display)
     }
   
   
   else  display.innerHTML += (clickedButtonValue);
 }






const display = document.querySelector('#display');
console.log(display)


   // addition
// document.getElementById(box1)//
// var addition = (first (Number)) + (second(Number))



box2      // subtraction







box3     // multiplication


