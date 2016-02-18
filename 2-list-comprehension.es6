'use strict';
// List/Array comprehension
// NOTE: The reason why this transpilationfails is becaulse  
// the feature isn't enabled in the new standard (not voted into it)
require('babel-polyfill');
/*
var places = [{
	'name':'Seattle',
	'area':'West',
	'colors':['blue', 'green'],
	'team':'Seahawks'
},
{
	'name':'San Fransico',
	'area':'West',
	'colors':['orange','black'],
	'team':'49ers'
},
{
	'name':'Don\'t care',
	'area':'Don\'t care',
	'colors':['Don\'t care','Don\'t care'],
	'team':'Don\'t care'
}];

let importantPlaces = [for({area, name}) of places if (area === 'West') name ];
console.log(importantPlaces);
*/