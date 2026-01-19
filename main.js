// упражнение 1

// обычная функция
function toPower(num, power) {
	const res = num ** power;
	return res;
}

console.log(toPower(2, 3));

// стрелочная функция

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 5));


//===============
// упражнение 2

// дадут ли кредит

const getCredit = (age, isWork = false) => {
	switch (true) {
		case (age >= 24 && isWork):
			return 500;
		case age >= 24: 
			return 100;
		default:
			return 0;
	}
}

const canBuy = (money, priceMac, age, isWork = false) => {
	if (money < priceMac) {
		return money + getCredit(age, isWork) >= priceMac;
	}
	return true;
}

console.log(canBuy(1500, 2000, 24, true));


// вариант от ИИ
const canBuy2 = (price, money, age, isWork = false) => {
	let credit = 0;

	if (age >= 24 && isWork) {
		credit = 500;
	} else if (age >= 24) {
		credit = 100;
	}

	return money + credit >= price;
};

console.log(canBuy2(1500, 2000, 24, true));



//
function getUser(id = 1, name) {
    console.log(id + ' ' + name);
}
getUser('Антон');


const getLength = (str) => str.length;
console.log(getLength('Привет'));


const sum = (a, b) => a + b;
function printSum(a, b) {
	return console.log(`Значение суммы ${a} и ${b} равно ${sum(a, b)}`);
}
printSum(2, 3);