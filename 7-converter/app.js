function convert(sum, curStart, curEnd) {
	const RUB_TO_USD = 80;
	const RUB_TO_EUR = 100;
	const EUR_TO_USD = 96;

	switch (true) {
		case (curStart === 'rub' && curEnd === 'usd') || (curStart === 'usd' && curEnd === 'rub'):
			return sum * RUB_TO_USD;
		case (curStart === 'rub' && curEnd === 'eur') || (curStart === 'eur' && curEnd === 'rub'):
			return sum * RUB_TO_EUR;
		case (curStart === 'eur' && curEnd === 'usd') || (curStart === 'usd' && curEnd === 'eur'):
			return sum * EUR_TO_USD;
		default: 
			return null;
	}
}

console.log(convert(1000, 'rub', 'usd'));