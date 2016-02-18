let objectCreator = (region,state,country) => {return {region,state,country}};

let o = objectCreator('east','VA','US');
// Objects can now easily be assigned a key & value
// simply by using variables or paramater names
console.log(o.region);
console.log(o.state);
console.log(o.country);

let userVar = "multiply";
var num = 1;

var variable = {
	'one':1,
	num,
	doSomething(){console.log("doing something...");},
	countUp(){console.log("1, 2, 3, 4, 5, 6");},
	countDown(){console.log("10, 9, 8, 7, 6, 5");},
	[userVar]: () => {console.log('2, 4, 8, 16, 32, 64');}
};

console.log(variable.num);
variable.multiply();
variable[userVar](); // That is AMAZING! :'-)