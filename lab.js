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
class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand
    this.model = model
    this.storage = storage
    this.color = color
    this.price = price
    this.sold = false
  }

  sell() {
    this.sold = true 
    console.log(`${this.brand} ${this.model} has been sold.`)
  }

  changePrice(newPrice) {
    this.price = newPrice
  }
}

let phoneOne = new Phone('Apple', 'iPhone', 64, 'space gray', 950)
let phoneTwo = new Phone('Apple', 'iPhone', 128, 'blue', 1200)
let phoneThree = new Phone('Apple', 'iPhone', 512, 'balck', 1400)

phoneOne.changePrice(900)

console.log(phoneOne)

phoneThree.sell()

console.log(phoneThree.sold)

//////////////////////////// PROBLEM 15 ////////////////////////////
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}

const colorsCopy = {...colors}

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

const helensInfo = {...contactInfo, ...shippingInfo}

console.log(helensInfo)


//////////////////////////// PROBLEM 16 ////////////////////////////
class Vehicle {
  constructor(capacity, color, mileage) {
    this.capacity = capacity
    this.color = color
    this.mileage = mileage
  }

  move(miles) {
    this.mileage += miles
    console.log(this.mileage)
  }
} 

const myFirstVehicle = new Vehicle(4, 'blue', 80000)

class Motorcycle extends Vehicle {
  constructor(capacity, color, mileage, make, isCool) {
    super(capacity, color, mileage)
    this.make = make
    this.isCool = isCool
  }
}

const myFirstMotorcycle = new Motorcycle(1, 'black', 3000, 'Ducati', true)

myFirstMotorcycle.move(200)


class Boat extends Vehicle {
  constructor(capacity, color, mileage, name, type, isSeaworthy) {
    super(capacity, color, mileage)
    this.name = name
    this.type = type
    this.isSeaworthy = isSeaworthy
  }

  checkSeaworthiness() {
    if (this.isSeaworthy) {
      console.log(`The ${this.type} ${this.name} is seaworthy!`)
    } else {
      console.log(`You need to get your ${this.type} in shape!`)
    }
  }

  performMaintenance() {
    this.isSeaworthy = true
  }
}

const myFirstBoat = new Boat(11, 'blue', 15000, 'Mark 37', 'yacht', false)

myFirstBoat.checkSeaworthiness()

myFirstBoat.performMaintenance()

myFirstBoat.checkSeaworthiness()
