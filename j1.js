console.log('Hello world');

//input bar
function mul(){

var num1 = (document.getElementById("num1").value);
var num2 = (document.getElementById("num2").value);

var result = num1*num2;
document.getElementById("output").value= result;
console.log(result);
}

//variable
let firstName = 'Ashmit';
console.log(firstName);

//constant
const intrestRate = 3;
console.log(intrestRate);

//primitive datatype
let name = 'Ashmit' //string
let age = 22 //number
let isApproved =  true; //boolean
let firstNaam = undefined;
let lastName = null; 

//objects
let car = {
	model: 'SUV',
	wheel: 4
};
console.log(car);   

//dot notation
//bracket notation

//Array it is a list of items.
let selectedColor = ['red', 'green', 'blue']
selectedColor[3]= 5;
console.log(selectedColor);

let selectColor = ['red', 'green', 'blue']
selectColor[3]= 5;
console.log(selectColor.length); //dot notation .lenght is a property

//function
function person(name, lastName){    //name, lastname parameter hote hai
	console.log('Hello ' + name + ' ' + lastName)

}
person('Ashmit', 'Tripathi'); //ashmit tripathi yha pr argument hai.

function square(number){
	return number * number;
}
console.log(square(2));

function rectangle(length, width){
	return length * width;
}

console.log(rectangle(20, 10));

//Assingment operator
let x = 20;
x += 7;
x *= 8;
x %= 4;
console.log(x);

//strict equality
console.log(1===1);
console.log("1"===1);

//ternary operator
//if a customer has more than 100 points, they are
// gold customers, otherwise silver customer.
let points = 150
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//logical operator
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

//swapping variable
let a = 'green';
let b = 'white';

let temp = a;
a=b;
b=temp;
console.log(a);
console.log(b);

// if else
 let hour = 12;

 if(hour>=6 && hour < 12)
	console.log('Good Morning');
 
 else if (hour>=12 && hour<18)
	console.log('Good Afternoon');
 
 else
	console.log('Good Evening');
 
// switch case
let role = 'kill';

switch(role){
	case 'guest':
		console.log('Guest User');
		break;

    case 'moderator':
	    console.log('Moderator User');
	    break;
	
	default:
		console.log('Unknown User');
}

//for loop
for ( let i = 5; i>0; i--){
	console.log('hello world',i);
	if(i/2!==0) console.log(i);
}

//while
let i=0;
while(i <= 5){
	if(i%2 !==0) console.log(i);
	i++;
}

//do while
let z=5;
do{
	if(z/2 !==0) console.log(z);
    z--;
}while(z>0);

//for in
const person0 = {
 naam: 'Ash',
 age: '22'
};

for(let key in person0)
console.log(key, person0[key]);

const color = ['blue', 'red', 'green']

for(let index in color)
console.log(index, color[index]);

//for of
const bikes = ['BMW', 'Audi', 'ferrari'];
for(let bike of bikes)
console.log(bike);

/////Exercise/////

//max value 
let num = max(9, 7);
console.log(num);

function max(num1, num2){
	// num1=9;
	// num2=7; 

	if(num1>num2) return num1;
	return num2;

}

//landscape or portrait
let view = isLandscape(15, 15);
console.log(view);

function isLandscape(width, heigth){
	if(width>heigth)
	return('Landscape');
	else
    return('Protrait');
}

//Demerit point

checkSpeed(70);

function checkSpeed(speed){
	const speedLimit = 70;
	const kmPerPoint = 5;

	if (speed <= speedLimit + kmPerPoint){
	console.log ('ok');
	return;
	}

	else{
		const points = Math.floor((speed - speedLimit) / kmPerPoint);
		if(points >= 12)
		console.log('License Suspended');
		else
		console.log('Points', points);
	}
}

//odd even
showNumbers(11);

function showNumbers(limit){
	//let showNumbers =limit % 2 == 0 ? 'even' : 'odd';
	for(let i=0; i<=limit; i++){
	if(i % 2 == 0)
	console.log(i, 'even');
	else 
	console.log(i, 'odd');
}
//console.log(showNumbers(i));
}

//string properties
const movie = {
	title : 'abcz',
	releaseDate : 1520,
	rating : 5.8,
	director : 'yHOO'
};
showProperties(movie);

function showProperties(obj){
	for(let key in obj) // FOR IN LOOP
	if (typeof obj[key]==='string')
	console.log(key, obj[key]);
} 	

//SUM OF MULTIPLE
console.log(sum(20));

function sum(limit){
	let sum = 0;
	for(let i=0; i<=limit; i++){
		if(i % 3 === 0 || i % 5 ===0)
		sum += i;
	}
	return sum;
}

//grade
const marks = [90, 90, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks){
	let numb = 0;
	for(let mark of marks)
	numb += mark;

	let avg = numb / marks.length;

	if(avg < 60) return('E');
	if(avg < 70) return('D');
	if(avg < 80) return('C');
	if(avg < 90) return('B');
	return('A');
}

// star
showStar(30);

function showStar(rows){
	for(let row=1; row <= rows; row++){
		let star ='';
		for(let i=0; i<row; i++)
		star += '*';
		console.log(star);
	}
}

//prime numbers
	function isPrime(n) {
		// Corner case
		if (n <= 1)
			return false;

		// Check from 2 to n-1
		for (let i = 2; i < n; i++)
			if (n % i == 0)
				return false;

		return true;
	}

	isPrime(15)
		? console.log("true")
		: console.log("false");

//factory funtions
 function createCircle(radius){
	return{
		radius, 
		draw(){
			console.log('draw');
		}
	};
 }

 const circle1  = createCircle(5);
 console.log(circle1);

 const circle2 = createCircle(10);
 console.log(circle2);

// constructor    /////Constructors force callers to use the new keyword. Factories don’t.
function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}
const circle = new Circle(1);
console.log(circle);

//enumerating objects
const circles = {
	radius : 1,
	draw(){
		console.log('draw');
	}
};

for(let key in circles)
console.log(key, circles[key]);

for( let key of Object.keys(circles))
console.log(key);

for( let entry of Object.entries(circles))
console.log(entry);

if('radius' in circle)
console.log('yes');

//cloning
const another  = { ...circle };
console.log(another);

//////exercise/////
let address = {
   street: 'nandanagar',
   city: 'gorakhpur',
   zipCode: '273008'  
};
function showAddress(address){
for (let key in address)
	console.log(key, address[key]);
}
showAddress(address);

//adding numbers
const numbers = [3, 4];

numbers.push(5, 6)//end of array

numbers.unshift(1, 2)//beginning of array

numbers.splice(2, 0, 'a')//middle of array
console.log(numbers);

//finding array reference type
const courses = [
	{id : 01, name: 'Ash'},
	{id : 02, name: 'Trips'},
];

//const course = courses.find(function(course){
//return course.name === 'Ash';
//});


//alternate => arrow function
const course = courses.find(course => course.name === 'Trips');
console.log(course);

//combine and slice
const first = [1, 2, 3];
const second = [4, 5];

const combined = first.concat(second);

const slice = combined.slice(2)
console.log(combined);
console.log(slice);

//element of array (every & some)
const number = [1, -1, 2, 3];

const allPositive = numbers.every(function(value){
	return value >= 0;
});
console.log(allPositive);

const someNum = numbers.some(function(value){
	return value >= 0;
});
console.log(someNum);

// map & filter
const ash = [1, -1, 2, 3];
//chaining of methods 
const item = ash
.filter(n => n >= 0)
.map(n => ({ value: n }));

console.log(item);

/////Exercise/////
const range = arrayFromRange(-10, -4);
console.log(range);

function arrayFromRange(min, max){
	const output = [];
	for (let i=min; i<=max; i++)
	output.push(i);
	return output;
}

//moving an element
const move = [1, 2, 3, 5];
const output = pull(move, 1, 2);

console.log(output);

function pull(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0){
		console.error('Invalid offset');
		return;
	}

	const output = [...array];
	const element = output.splice(index, 1)[0];
	output.splice(position, 0, element);
	return output;
}

//count occurences
const occur = [1, 2, 3, 4, 5];
const count = countOccurences(occur, 1);
console.log (count);

function countOccurences(array, searchElement){
	return array.reduce((a, c) =>{
		const occurence = (c === searchElement) ? 1 : 0;
		console.log(a, c, searchElement);
		return a + occurence;
	}, 0);
}

//movie
const movies =[
	{title: 'a', year: 2014, rating: 5.6},
	{title: 'b', year: 2016, rating: 4.5},
	{title: 'c', year: 2015, rating: 5.4},
	{title: 'd', year: 2014, rating: 5.5},
];

const title = movies
.filter(m => m.year === 2014 && m.rating >= 5)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(title);

//Anonynous function expression
let run = function(){
	console.log('run');
};
let love = run;
run();
love();

//arguments
function sum(){
	let total = 0;
	for(let value of arguments)
	total += value;
	return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/////exercise/////
//sum of arguments
console.log(sum(1, 2, 3, 4));

function sum(...add){
    return add.reduce((a, b) => a + b);
}

//area of circle
const circleo={
	radius: 5,
	get area(){
		return Math.PI * this.radius * this.radius;
	}
};
console.log(circleo.area);