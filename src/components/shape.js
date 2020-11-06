// declare class

// export class using module.exports

class Shape {
  constructor(color) {
    this.color = color;
  }
  drawShape() {}
  calculateArea() {}
}

// export class
module.exports.Shape = Shape;
