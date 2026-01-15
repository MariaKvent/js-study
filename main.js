const deposit = 12000;
const currency = 'USD';
const percent = 7;
const housePrice = 13500;
const termInYear = 2;

const result = deposit * ((1 + ((percent / 100) / 12)) ** (termInYear * 12));

if (result >= housePrice) {
	console.log(`Мы накопили ${result} ${currency}. Хватит на дом. Еще останется ${result - housePrice} ${currency}`);
} else {
	console.log(`Мы накопили ${result} ${currency}. Нам не хватает ${housePrice - result} ${currency}`);
}