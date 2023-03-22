//DOM  Manipulation



//Styling elements with DOM


const title = document.querySelector('#main-heading');
title.style.color = 'green';
console.log(title)


//get list-items 
const listItems = document.querySelectorAll('.list-items')

//the list-items must be in a for loop to apply the effects 
for(let i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '2rem';
}
console.log(listItems)

