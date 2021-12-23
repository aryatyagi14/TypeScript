export {};
let message = 'whats up';
console.log(message);

let x = 10;
const y = 20;
let sum;
const title = 'Practice TypeScript';
/** 
 * let = can be used without initialization
 * const = needs to be initialized with a value
 * const var can never be reassigned
 * use CONST when value never changes
*/
 
let beginner: boolean = true;
let total: number = 0;
let name: string = "Arya";
/**Template Strings: can be multiple lines and have embedded expressions
 * USE BACK TICS
 * ${var} is used to input a variable into a string
 */
let sentence: string = `My Name is ${name}
I am a beginner in TypeScript`;
console.log(sentence);

let n : null = null;
let u : undefined= undefined;

let New : boolean = null;
let myName : string = undefined;

/**   ARRAYS / LISTS (2 ways of defining it)   */
let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3];
/**Number of elements in a tuple are fixed(below) */
let people: [string, number] = ["Arya",18];

enum Color {Red = 5,Green,Blue};
let c: Color = Color.Green;
let c1: Color = Color.Blue;
console.log(c);
console.log(c1);
/** ANY vs UNKNOWN type 
 * any = lets you call functions of any type(.toUpperCase()/ lets you call it as a function
 */
let randomval : any = 10;
randomval = true;
randomval = "Arya";
let randomval2 : unknown = 'hello';
randomval2 = (randomval2 as string).toUpperCase();
console.log(randomval2);

let a;
a = true;
a = 'Practice with variables and ifs'
/**ifs dont need curly brackets but you could use them*/
if (a){
    console.log(a.toUpperCase())
}
/** ANY vs MULTI
 * multi = resticts to the types listed
 * '.' gives method examples when using multitype
 */
let multiType: number | boolean;
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
function add(num1: number,num2: number = 4){
    if(num2)
        return num1+num2
    else
        return num1
}
console.log(add(4));

interface Person{
    firstName: string;
    lastName?: string
}

function fullname(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName :'Rohan',
};
fullname(p);

/** CLASSES */
class Employee {
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("Arya");
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
        /**the super method calls the base class constructor */
    }
    delegateWork(){
        console.log("Manager is Delegating tasks")
    }
}
let m1 = new Manager("Prashant");
m1.delegateWork();
m1.greet();

/** ACCESS MODIFIERS
 * things assume they are public if not defined
 * private = access is only in the class
 * making a variable private in base class makes the class that inherited it lose access
 * protected is basically private but it allows classes derived from it to use it 
 */
