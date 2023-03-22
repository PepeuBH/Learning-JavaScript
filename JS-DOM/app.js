//DOM  Manipulation



//styling elements with DOM
const title = document.querySelector('#main-heading');
title.style.color = 'white';



//get list-items 
const listItems = document.querySelectorAll('.list-items')

//the list-items must be in a for loop to apply the effects 
for(i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '120%'; //font size is set to 110% in CSS
}




//Creating elements with DOM


//create li inside the ul
const ul = document.querySelector('ul')
const li = document.createElement('li')

//to insert li in ul, use append
ul.append(li)

//Modify the text inside li
li.innerText = 'Iron Man 3'
li.setAttribute('class', 'list-items')


