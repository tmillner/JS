'use strict';

function* aGenerator() {
	console.log('.next() was called');
	yield "a value";
}

