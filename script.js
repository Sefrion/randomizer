'use strict';

const data = ['String 1', 'String 2', 'String 3', 'String 4', 'String 5'];

const button = document.querySelector('button');
const div = document.querySelector('.result');

function randomizeList(arr) {
	div.innerText = '';

	const randomIndex = Math.floor(Math.random() * arr.length);

	const randomStr = arr[randomIndex];

	div.innerText = randomStr;
}

button.addEventListener('click', () => randomizeList(data));
