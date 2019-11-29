//Methods for grabbing elements from the website

document.getElementById("id"); //you dont need #ID just the ID
document.querySelector("input[name='login']"); //here you need the .class or #ID but you can be very specific

//the following returns an array of items.
document.querySelectorAll(" .class "); //returns all elements with this tag.
document.getElementsByName("");
document.getElementsByClassName("");
document.getElementsByTagName("");

//example:
let main = document.getElementById("main");
main.innerHTML = "Text going into the #main";

//after you have gotten the elements you can grab the information in other ways.
let inputX = document.getElementById("x");
let cash = inputX.value;  //if the element"X" is an input type=number this can read the value.

//you can also use javascript to change elements and use css inputs.

let ells = document.getElementsByName("div"); //grabs all divs on your page-
for (let i = 0; i < ells.length(); i++){
  ells[i].style.backgroundColor = "red";
}

//In jQuery this is too easy which is why jQuery was so popular before, tho because of the $ sign can crash with other dependencies "they" created react, vue, etc.

$(document).ready(function(){
  //event listeners for clicks are super simple:
  $(".button").click(fuction(){
    $(this).css("background-color", "red"); //on the class button click, turns the active buttons background red.
  }
}
