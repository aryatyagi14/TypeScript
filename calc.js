"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    Calculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Calculator.prototype.subtract = function () {
        return this.num1 - this.num2;
    };
    Calculator.prototype.multiply = function () {
        return this.num1 * this.num2;
    };
    Calculator.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    return Calculator;
}());
var c = new Calculator(3, 2);
console.log(c.divide());
