/*
  This example was copied from https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f
*/

class Polygon {
  constructor(height, width) { //class constructor
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
 
  sayName() { //class method
    console.log('Hi, I am a', this.name + '.');
  }
}
 
class Square extends Polygon {
  constructor(length) {
    super(length, length); //call the parent method with super
    this.name = 'Square';
  }
 
  get area() { //calculated attribute getter
    return this.height * this.width;
  }
}
 
let s = new Square(5);
 
s.sayName(); // Hi, I am a Square.
console.log(s.area); // 25

