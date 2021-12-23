"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'whats up';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Practice TypeScript';
/**
 * let = can be used without initialization
 * const = needs to be initialized with a value
 * const var can never be reassigned
 * use CONST when value never changes
*/
var beginner = true;
var total = 0;
var name = "Arya";
/**Template Strings: can be multiple lines and have embedded expressions
 * USE BACK TICS
 * ${var} is used to input a variable into a string
 */
var sentence = "My Name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var New = null;
var myName = undefined;
/**   ARRAYS / LISTS (2 ways of defining it)   */
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3];
/**Number of elements in a tuple are fixed(below) */
var people = ["Arya", 18];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var c1 = Color.Blue;
console.log(c);
console.log(c1);
/** ANY vs UNKNOWN type
 * any = lets you call functions of any type(.toUpperCase()/ lets you call it as a function
 */
var randomval = 10;
randomval = true;
randomval = "Arya";
var randomval2 = 'hello';
randomval2 = randomval2.toUpperCase();
console.log(randomval2);
var a;
a = true;
a = 'Practice with variables and ifs';
/**ifs dont need curly brackets but you could use them*/
if (a) {
    console.log(a.toUpperCase());
}
/** ANY vs MULTI
 * multi = resticts to the types listed
 * '.' gives method examples when using multitype
 */
var multiType;
multiType = 20;
multiType = false;
/** FUNCTIONS
 * Parameters:
 * you dont have to specify a type for them
 * to make them optional add a ? to the name (num2? : number)
 * the optional paramter HAS to be last!!
 * you can have a Default parameter(if not given a value it takes the value its set to )
 * to make default => num2: number = 4
 */
function add(num1, num2) {
    if (num2 === void 0) { num2 = 4; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(4));
function fullname(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Rohan'
};
fullname(p);
/** CLASSES */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Arya");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
        /**the super method calls the base class constructor */
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager is Delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Prashant");
m1.delegateWork();
m1.greet();
/** ACCESS MODIFIERS
 * things assume they are public if not defined
 * private = access is only in the class
 * making a variable private in base class makes the class that inherited it lose access
 * protected is basically private but it allows classes derived from it to use it
 */
