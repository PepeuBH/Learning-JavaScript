//DOM  Manipulation



//styling elements with DOM -> See block below

const title = document.querySelector('#main-heading');
title.style.color = 'white';


//get (list-items) 
const listItems = document.querySelectorAll('.list-items')

//the (list-items) must be in a (for loop) to apply the effects 
for(i = 0; i < listItems.length; i++){
    listItems[i].style.fontSize = '120%'; //font size is set to 110% in CSS
}




//Creating elements with DOM -> See block below


//create (li) inside the (ul)
const ul = document.querySelector('ul')
const li = document.createElement('li')

//to insert (li) in (ul), use (append)
ul.append(li)

//Modify the text inside (li)
li.innerText = 'Iron Man 3'

//set the same attributes of (list-items) class to the new (li) element
li.setAttribute('class', 'list-items')


//get attribute
const titleAttribute = title.getAttribute('id')
console.log(titleAttribute)




// set a attribute with (classList) -> See block below

//create an (li) element
const anotherListItem = document.createElement('li')
const anotherListItem1 = document.createElement('li')
const anotherListItem2 = document.createElement('li')
const anotherListItem3 = document.createElement('li')
const anotherListItem4 = document.createElement('li')
const anotherListItem5 = document.createElement('li')
const anotherListItem6 = document.createElement('li')
const anotherListItem7 = document.createElement('li')
const anotherListItem8 = document.createElement('li')
const anotherListItem9 = document.createElement('li')
const anotherListItem10 = document.createElement('li')
const anotherListItem11 = document.createElement('li')
const anotherListItem12 = document.createElement('li')

//append the new (li) to the existing (ul)
ul.append(anotherListItem)
ul.append(anotherListItem1)
ul.append(anotherListItem2)
ul.append(anotherListItem3)
ul.append(anotherListItem4)
ul.append(anotherListItem5)
ul.append(anotherListItem6)
ul.append(anotherListItem7)
ul.append(anotherListItem8)
ul.append(anotherListItem9)
ul.append(anotherListItem10)
ul.append(anotherListItem11)
ul.append(anotherListItem12)



//set inner text os the new (li) item created
anotherListItem.innerText = 'You'


li.classList.add('list-items')





