let num1 = 0;
let num2 = 0;
let operator = '';
arr = [];

function add(x, y) {
	console.log(x + y);
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	if (y == 0) return 0;
	else return x / y;
}

function operate(y, operator, x) {
	x = Number(x);
	y = Number(y);
	if (operator == '+') return add(x, y);
	else if (operator == '-') return subtract(x, y);
	else if (operator == '*') return multiply(x, y);
	else if (operator == '/') return divide(x, y);
}

function calculate() {
	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			//convert the button they pushed to an int
			let num = button.firstChild.nodeValue;
			//if they pressed a number
			if (num >= '0' && num <= '9') {
				//convert the char to an int
				num = Number(num);
				//if the user has yet to enter 7 numbers
				if (document.getElementById('inputBox').innerHTML.length <= 6) {
					//add the number to the string
					document.getElementById('inputBox').innerHTML += num;
				}
			} else if (button.firstChild.nodeValue == 'C') {
				//clear the calculator
				document.getElementById('inputBox').innerHTML = '';
				//clear the stack
				arr = [];
				console.log('Cleared.');
			} else if (button.firstChild.nodeValue == '=') {
				arr.push(document.getElementById('inputBox').innerHTML);
				if (arr.length != 3) {
					document.getElementById('inputBox').innerHTML = '';
					arr = [];
				} else {
					document.getElementById('outputBox').innerHTML = operate(arr.pop(), arr.pop(), arr.pop()).toFixed(
						2
					);
					document.getElementById('inputBox').innerHTML = '';
				}
			} else {
				//push the operator onto the stack
				arr.push(document.getElementById('inputBox').innerHTML);
				document.getElementById('inputBox').innerHTML = '';
				arr.push(num);
			}
		});
	});
}

calculate();
