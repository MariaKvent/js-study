const balance = 1000;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;
const money = 1500;
const bonusMoney = 50;

console.log(`Игра доступна для покупки: ${!isBanned && !isExist && isSelling && (money > balance || bonusMoney > bonusBalance)}`);

console.log(!'' && 'Yes' || !('No' && 'false'));


const value = "test"; // Попробуйте изменить на разные значения: 0, null, undefined, "", "text", 42

// Ваш код здесь
const isTruthy = !!value;
console.log(isTruthy);


const isWeekend = false;
const isHoliday = false;
const hasWork = true;
const isUrgent = false;

// Ваш код здесь
const shouldWork = hasWork && (!isWeekend && !isHoliday || isUrgent);
console.log(shouldWork);