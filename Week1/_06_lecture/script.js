var x =25;
{
	let x =12;
	console.log(x);
}
console.log(x);

//arrow function
const a = (x,y)=> x+y;
console.log(a(12,8));

const x1=['apple', 'orange', 'mango'];
const x2 =['kiwi','grapes','cherry'];
const x3=[...x1,...x2]; //spread operation -> to expand an array
console.log(x3);

const myNumbers =[1,85,69,73];
let sum =0;
for(let num of myNumbers){
	sum = sum +num;
}
console.log(sum);

//map
const fruits = new Map([
	["apples",500],
	["bananas",600],
	["oranges",700],
]);
console.log(fruits);
console.log(fruits.get("apples"));

//sets
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);


//classes
class Car {
	constructor(name,mfgYear){
		this.name = name;
		this.mfgYear = mfgYear;
	}
}
const myCar1 = new Car("Mercedes",2022);
const myCar2 = new Car("Porsche",2020);
console.log(myCar1,myCar2);

//Promises
const myFunction =()=>{
return myPromise = new Promise((resolve , reject)=>{
	setTimeout(()=>{
		console.log("This is Inside of Promise");
		resolve();
	},2000);
});
};
myFunction()
.then(()=>{
	console.log("Resolved");
})
.catch(()=>{
	console.error("Rejected");
})

//rest operator
const addNumbers =(...args)=>{
	let sum =0;
	for(let arg of args){
		sum += arg;
	}
	return sum;
};
console.log(addNumbers(1,2,3,4,5,6));
