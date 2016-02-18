// to find sibling selector use +
// babel-polyfill not required :/

const products = Array.from(document.querySelectorAll('tr td + td'));

products
	.filter(p => (parseFloat(p.innerHTML)) < 4.00)
	.forEach(p => p.style.color = 'red');
