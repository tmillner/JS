if(true)
{
	const FOO = "bar"; // const standard is all upper
	console.log(`inside, foo is ${FOO}`);
}

// Not valid, const adheres to block scope
//console.log(`outside, foo is ${FOO}`);

const CREDENTIALS = {"API_KEY": "xxx"};
// Not valid, can't change reference 
// CREDENTIALS = {"API_KEY": "new_xxxx"};
CREDENTIALS["API_SECRET"] = "shhhh";

console.log(JSON.stringify(CREDENTIALS));