'use strict';
// Destructuring (python packaging, unpackaging)

require('babel-polyfill');

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

places.forEach(({name}) => console.log(name));

let [,sanfran] = places;
let football = ({colors:footballTeamColors}) => console.log(footballTeamColors);
football(sanfran);
