//Destructuring via Rest Elements

/*const[a, b, ...arr] = [1,2,3,4,5,7];
console.log(a,b);
console.log(arr); //logs 3,4,5,7*/

/*function removeFirstTwo(list) {
    const[a,b, ...arr] = list;
    return arr;
}

const source = [1,2,3,4,5,6,7,8,9,10];

const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);
*/
/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

function makeList(arr) {
    const failureItems = [];
    for(let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
      };


    return failureItems;
};

const failuresList = makeList(result.failure);

console.log(failuresList);

// Classes and constructors
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  };
  
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'



class Book {
    constructor(author) {
        this._author = author;
    }

    //getter
    get writer() {
        return this._author;
    }

    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
// Update the author and the value will be set
// by the setter function which modifies the value 
// of the author(private variable)
novel.writer = 'newAuthor';

console.log(novel.writer);



class Thermostat {
    constructor(farenheit) {
        this._farenheit = farenheit;
    }

    //getter
    get temperature() {
        return (5/9) * (this._farenheit - 32);
    }

    //setter
    set temperature(celsius) {
        return this._farenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76);
console.log(thermos.temperature);

let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);


console.log(Math.pow(2,3));

*/

//Factory Functions
/*

const personFactory = (name, age) => {
    const sayHello = () => console.log('Hello!');
    return {name, age, sayHello}
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name);

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log({ name, color, number, food });



function foo() {
    a = 2;
    console.log(a);
    console.log(window.a);
};

foo();

//console.log(b); logs undefined since it was defined inside the child scope
                foo function.




const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString, capitalizeString };
};

const taco = FactoryFunction('taco');


taco.capitalizeString(); 


function personFactory(name) {
    return {
        talk() {
           return  `Hello, this is ${name}`
        }
        
    }
};

const me = personFactory('Robert');

console.log(me.talk());
*/

/* Functions
 Functions are considered first class objects in JS,
 ie they can be used like any other object.
 
 - They can be saved in variables, stored in an object,
 or passed as function arguments.

 Examples of Array functions;
 Array.prototype.map() - iterates over each item in an array
 and returns a new array containing the results of calling the
 callback function on each element. Doesn't mutate the array.

 When callback is used, 3 arguments are passed.
 1. Current element being processed.
 2. Index of that element.
 3. Array upon which the map method was called.













*/
/*
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];

  const names = users.map(user => user.name);

  console.log(names);
*/

// The global variable

/*const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));

// Using Parameter destructuring

const ratings = watchList.map(({Title: title, imdbRating: rating}) => 
    ({title, rating})
);

console.log(ratings);


const genre = watchList.map(({ Title: title, Genre: genre}) => ({ title, genre}));

console.log(genre);


let myArr = [23, 5, 98];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  
  for(let i=0; i< this.length; i++) {
    console.log(this);
    console.log(i);
    console.log(this[i]);
    newArray.push(callback(this[i]));
  }

  // Only change code above this line
  return newArray;
};


console.log([23, 65, 98, 5, 13].myMap(item => item * 2))

// Stil have to get back to this to understand it
let myArr = ["naomi", "quincy", "camperbot"];

Array.prototype.myMap = function(callback) {

  const newArray = [];
  console.log(this);

  this.forEach((element, index, arr) => {
    
    newArray.push(callback(element, index, arr))

  }
  )

  return newArray;
}



const newArr = myArr.myMap(item => item.toUpperCase);

console.log(newArr);


*/

// Filter Method

// Call back function takes 3 arguments:
// - Current element being processed
// - Index of that element
// - Array which the filter method is called
/*
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);

console.log(usersUnder30);
*/
// Problem: Use a combo of filter and map
// to assign a new array of objects with only title
// and rating keys. Filter the ratings and include only
// ones with rating >= 8.0


/*const filteredList = watchList.map(({ Title: title, imdbRating: rating}) => ({ title, rating})).filter(movie => {
  return Number(movie.rating) >= 8.0;
})

console.log(filteredList);
*/
// Implement the filter Method on a Prototype

/* Come back to this again tomorrow - 15SEP23 to review and understand

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(element => {
    let i;
    if(callback(element, i , this)) {
      newArray.push(element)
    }

  });
  
 

  // Only change code above this line
  return newArray;
};

console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))

console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index))

*/



// Return Part of an Array Using the slice method

// Slice method - returns a copy of certain elements of an array.
// Can take 2 arguments ie. - index of where to begin the slice,
//                          - index of where to end the slice(its non-inclusive)
// NB: Doesn't mutate the array, returns a new one.
/*
const arr = ['cat', 'dog', 'tiger', 'zebra'];

const newArr = arr.slice(1, 3);

console.log(newArr);
// arr is still unchanged 
console.log(arr);
*/


// Problem to solve:
// Use the slice method in the sliceArray function to return part of the anim array 
 // given the provided beginSlice and endSlice indices. The function should return an array.

 function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  const newArray = anim.slice(beginSlice, endSlice);

  return newArray;


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


/*


Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  console.log(callback);

  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i]);
    }

  }
 

  // Only change code above this line
  return newArray;
};


console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index))
*/



// Splice Method
// - Takes arguments for the index of where to start removing items,
// then the number of items to remove. If second arg isn't provided, then
// items are removed to the end.
// Splice mutates the original array unlike slice method.
/*
const cities = ["Nairobi", "Nakuru", "Mombasa", "Eldoret", "Kericho"];
cities.splice(1, 3);

console.log(cities);



function nonMutatingSplice(cities) {
  console.log(cities);
  
  const newArr = cities.slice(0,3); //begin at index 0 and stop at index 3
  console.log(newArr)  //result is an arr containing the first 3 items.
  
  return newArr;

};

nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]);
*/

// Reduce Method
/*

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => {
   return sum + user.age
}, 0);

console.log(sumOfAges);

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, );

console.log(usersObj);
*/

const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];



/*const filteredList = watchList.filter(film => film.Director === "Christopher Nolan");

console.log(filteredList);

const ratingNolan = filteredList.map(film => Number(film.imdbRating));

console.log(ratingNolan);

const avgRating = ratingNolan.reduce((accumulator, currentValue) => {
  return sum = currentValue + accumulator;

}, 0) / filteredList.length;

console.log(avgRating);



function getRating(watchList) {
  let averageRating;
  let filteredList = watchList.filter(film => film.Director === "Christopher Nolan");
  console.log(filteredList.length);

  averageRating = filteredList.map(film => Number(film.imdbRating))
                              .reduce((accumulator, currentValue) => {
                                return sum = currentValue + accumulator;
                              }, 0) / filteredList.length;
               
               
  return averageRating;
}

console.log(getRating(watchList));



// Higher Order Functions Use Case

// Function should return a new array containing the squares of only
// the positive integers

const squareList = arr => {

  let positiveSquares = arr.filter(num => num >= 0 && Number.isInteger(num))
                           .map( num => num * num);                                         ;

  return positiveSquares;
}


const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));





// Classes - blueprint for creating objects.
//         - define properties and/ or methods.
// Inside the class, constructor - constructs the object

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

  }



  drive() {
    console.log(`You drive the ${this.make}`)
  }
  brake() {
    console.log(`You step on ${this.make}'s brakes!`);
  }

  whatIsThis() {
    return this;
  }
}

let car = new Car('Tesla', 'Model Y', 2023, 'Red');

car.brake()
car.drive();


let carOne = new Car('Ford', 'Mustang', 2020, 'Red');
console.log(carOne);
console.log(carOne.make);

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;

  }
}

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

// Constructor - a special method for assigning properties.
//             - automatically called when creating an object.

// This - A reference to the object we are currently working with

let userOne = new User('Robert Mwangi', 'elimwas88@gmail.com');

console.log(userOne);




class Person {
  static get species() {
    return 'Homo Sapiens';
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species()}`
  }


  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
}

const person1 = new Person('Robert', 'Mwangi');



class Worker extends Person {
  // extends - inherits properties of parent class
  //         - can override properties and methods

  constructor(firstName, lastName, job) {
    super(firstName, lastName);  // super calls the method from the class
                                 // it extends from
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }

  // Get keyword converts a method to a property.

  get biography() {
    const bio = `${this.fullName()} is a ${this.job}`.toUpperCase();
    return bio;
  }
};

const worker1 = new Worker('Robert', 'Mwangi', 'Junior ServiceNow Developer');

*/

function ascendingOrder(arr) {
  
  return arr.sort(function(a,b) {
    // uses compare function
    // 1. < 0 ... a comes first
    // 2. 0 ... nothing changes
    // 3. > 0 ... b comes first


    return a - b;
  });
};

console.log(ascendingOrder([1,7,5,6,2]));