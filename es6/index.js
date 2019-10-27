
var hello = 'hello';

// variable and constant
let hello = 'hello';
const helloCon = hello;

// Interpolation
var text = "my name is " + name ". My age is " + 8 + " years.";
var text = `my name is ${name}. my age is ${age} years.`;


class Hello {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {

  }
  getFirstName() {

  }
}

class Hello2 extends Hello {
  constructor(props) {
    super(props)
  }
}

new Hello();

//  Destructuring
var name = ['manik', 'raton'];
var nameObject = {
  firstName: "Manik",
  lastName: "Rahman",
}

var [person1, person2] = name;

var {firstName, lastName} = nameObject;

// Spread

var name1 = ['a', 'b', 'c']
var name2 = ['d', 'e', 'f']

var name3 = [
  ...name1,
  ...name2,
  'g',
  'h',
];

// function 


function yourname(name = "manik" ) {
  // if (name == undefined) {
  //   name = 'manik'
  // }
  console.log(`my name is ${name}`);
}

yourname()

cb / annonymous

setTimeout(function () {
  some task
}, 2000)

setTimeout(() => sometask, 3000)


// fat arrow
() => {
  return something
}

() => (someting)

a => someting a

function somename(a) {
  return something a;
}



















