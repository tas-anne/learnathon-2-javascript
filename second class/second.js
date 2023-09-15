console.log("Hello for js 2");

let interestrate=0.3;
interestrate=1;
console.log(interestrate);

const interest=0.3;
console.log(interest);

/*primitive or vallue types*/
let name='Annesha';
let age=22;
let isapproved =undefined;
let colour=null;

console.log(typeof name);

/* reference type*/

let person={
    myname: 'annesha',
    myage: 22
};
//dot notation
person.myname='John';
//Bracket notation
person['myname']='Mary';

console.log(person.myname);

function greeting(){
    console.log('Hello world');
}
greeting();

function greet(name){
    console.log('Hello '+ name);
}
greet('John');

//hoisting
console.log(a);
var a=10;
console.log(a);
//if you use let that will throw error as you don't have initiatized it before

for(var n=0;n<5;n++)
    console.log(n);
console.log(n);

for(let p=0;p<5;p++)
    console.log(p);
console.log(p);