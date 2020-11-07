// import using require

// declare class

// export class using module.exports

const Shape = require("./shape");

// declare class
class Circle extends Shape {
  calculateArea() {
    console.log("cal in circle");
  }
}

// export class using module.exports
module.exports = Circle;
