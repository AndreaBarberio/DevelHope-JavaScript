class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    if (shape.side) {
      return shape.side * shape.side;
    }
    if (shape.radius) {
      return Math.PI * shape.radius **2;
    }
    if (shape.width || shape.height) {
      return shape.width * shape.height;
    }
  }
}


const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));