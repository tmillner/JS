'use strict';

const _ = require('lodash');

let color = 'orange';
let story = `
HELLO,

	Welcome to the new story about 
\tThe color ${color}

`;
// NOTE: The preservation of white space
console.log(story); 

let start = 120;
let diff = 50;
// NOTE: expression evaluation
console.log(`We started off at ${start}mpg, used ${diff}, and ended at ${start - diff}...`);

var csv = [/* ['name', 'age', 'height','occupation'] */
['zack', '44', '5\'10', 'trader'],
['gerald', '10', '4\'9', 'kid']
]

var confidentialize = (strings, ...values) => {
	let name = _.capitalize(values[0].charAt(0));
	let age = values[1] > '40' ? 'old' : 'young';
	return `${strings[0]}${name}, ${age}, ${values[2]}, ${values[3]}${strings[4]}`;
};

// Note CAN'T use (let story in csv)... 
 for(let i = 0; i < csv.length; i++) {
 	let formatedStory = confidentialize`This is a story of ${csv[i][0]}, who is a ${csv[i][1]},
 		${csv[i][2]},${csv[i][3]}. Let us begin.`
 	console.log(formatedStory);
 }
