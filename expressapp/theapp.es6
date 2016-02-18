// theapp.es6
const express = require('express');
const app = express();
const PORT = 3000;

// Without this, assets can't load
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('lib')); 

app.get('/', (req, res) => {
	let colorEmphasizer = './10-color-emphasizer.js'
	// Without async='true', the script will not load properly!!!
	let welcome = `
	<script type='text/javascript' async='true' src='${colorEmphasizer}'></script>
	<h1>Welcome to our store!</h1>
	<p>If you didn't know, we have the best prices</p>
	<div id=prices>
	<table>
		<tr><td>Tomatoes</td><td>1.99</td></tr> 
		<tr><td>Carrots</td><td>0.99</td></tr>
		<tr><td>Salmon</td><td>6.99</td></tr>
		<tr><td>Almonds</td><td>8.99</td></tr>
		<tr><td>Blueberries</td><td>4.99</td></tr>
	</table>
	</div>
	`
	res.send(welcome);
});

app.listen(PORT, () => {
	console.log('I\'m listenningggg... ');
});
