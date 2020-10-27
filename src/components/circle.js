// import using require

// declare class

// export class using module.exports

const { default: Shape } = require("./shape");

// declare class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea() {}
}

// export
export default Circle;
