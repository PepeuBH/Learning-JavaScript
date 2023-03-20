var myDog = { 
    "name" : "Ekko",
    "age" : 3,
    "color" : "black"
}

console.log("My dog name is " + myDog.name + ", it is " + myDog.age + " years old and his fur is " + myDog.color + ".")

//changing obj properties
myDog.name = 'Lora'
console.log(myDog.name)

//adding obj properties
myDog['bark'] = 'woof!'
console.log(myDog.bark)

//deleting obj properties
delete myDog.bark


var myObj = {
    'name' : 'Pedro',
    'height' : 184,
    'lastName' : 'Toledo',
    'tecnologies' : [
        'Java', 
        'HTML/CSS', 
        'Git', 
        'JavaScript'
    ], 
    'favoriteFoods' : [
        'apple',
        'ice-cream', 
        'pizza'
    ]

}

console.log(myObj.tecnologies[3])

console.log(myObj.favoriteFoods[1]) //prints ice-cream

