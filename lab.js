//////////////////////////// PROBLEM 1 ////////////////////////////
let me = {
  name: "Mehdi",
  age: 23
}


//////////////////////////// PROBLEM 2 ////////////////////////////
let dog = {
  name: "Alex",
  color: "Golden",
  age: 2,
  goodBoy: true
}

//////////////////////////// PROBLEM 3 ////////////////////////////
console.log(dog.name)

//////////////////////////// PROBLEM 4 ////////////////////////////
console.log(dog['color'])

//////////////////////////// PROBLEM 5 ////////////////////////////
let favoriteThings = {
  band: "The Black Eyed Peas",
  food: "Pasta",
  person: "Elon Musk",
  book: "Harry Potter",
  movie: "Taken",
  holiday: "London"
}

favoriteThings["car"] = "Toyota"
favoriteThings["brand"] = "Apple"


favoriteThings["food"] = "Cacio e Pepe"
favoriteThings.book = "The Great Hatsby"

console.log(favoriteThings)

//////////////////////////// PROBLEM 6 ////////////////////////////
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// const {color, make, model, year} = car

//////////////////////////// PROBLEM 7 ////////////////////////////
function greeting( obj ) {
  const {title, firstName, lastName} = obj
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}

//////////////////////////// PROBLEM 8 ////////////////////////////
function totalPopulation(obj) {
  const {utah, california, texas, arizona} = obj
  return utah + california + texas + arizona
}


//////////////////////////// PROBLEM 9 ////////////////////////////
function ingredients(obj) {
  const {carb, fat, protein} = obj
  return [carb, fat, protein]
}


//////////////////////////// PROBLEM 10 ////////////////////////////
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};

user.name = "Bryan G. Smith"
user.email = "bryan.smith@devmounta.in"

//////////////////////////// PROBLEM 11 ////////////////////////////
delete user.age
console.log(user)



//////////////////////////// PROBLEM 12 ////////////////////////////
class Cat {
  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
  }
}

const thunder = new Cat('Thunder', 3, 'black & brown')

console.log(thunder.name)


//////////////////////////// PROBLEM 13 ////////////////////////////
class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name
    this.age = age
    this.favoriteSpell = favoriteSpell
  }

  castSpell() {
    console.log(`${this.name} has cast ${this.favoriteSpell}`)
  }
}

const ron = new Wizard('Ron', 11, 'Eat slugs, Malfoy')

ron.castSpell()

//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here

  
/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 


/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 


//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

//Code Here 



/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here


//Print helensInfo to see what it looks like, there should be no repeating properties.


//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 


/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here


/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here

/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 

/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/

/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here


/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here

/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here

/*
  Now run the performMaintenance method on your boat
*/

//Code Here 

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here