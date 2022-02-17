export default class calculator {
  constructor() {
    this.toInt = 1;
    this.newA = 0;
    this.newB = 0;
  }

  static multiplicatorToInt(nums) {
    let max = 0;
    nums.forEach((num) => {
      const multiplicator =
        num % 1 !== 0
          ? Math.pow(
              10,
              num.toString.length - Math.trunc(num).toString.length + 1
            )
          : 1;
      max = max > multiplicator ? max : multiplicator;
    });
    return max;
  }

  static isNumber(...value) {
    if (value.every((el) => typeof el === "number")) {
      this.constructor.toInt = this.multiplicatorToInt(value);
      this.constructor.newA = value[0] * this.constructor.toInt;
      this.constructor.newB = value[1] * this.constructor.toInt;
      return true;
    } else {
      return false;
    }
  }

  static add(a, b) {
    if (this.isNumber(a, b)) {
      return (
        (this.constructor.newA + this.constructor.newB) / this.constructor.toInt
      );
    } else {
      throw new Error("Accept numbers as input only");
    }
  }
  static substract(a, b) {
    if (this.isNumber(a, b)) {
      return (
        (this.constructor.newA - this.constructor.newB) / this.constructor.toInt
      );
    } else {
      throw new Error("Accept numbers as input only");
    }
  }
  static divide(a, b) {
    if (this.isNumber(a, b)) {
      return this.constructor.newA / this.constructor.newB;
    } else {
      throw new Error("Accept numbers as input only");
    }
  }

  static multiply(a, b) {
    if (this.isNumber(a, b)) {
      return (
        (this.constructor.newA * this.constructor.newB) /
        Math.pow(this.constructor.toInt, 2)
      );
    } else {
      throw new Error("Accept numbers as input only");
    }
  }
}
