const rate = 80; // ставка
const limitHours = 5; // часов могу работать в день
const limitDays = 5; // дней могу работать в неделю
const deadline = 11; // через 11 дней уезжаю
const totalHours = 40; // оценка работы
const notWorking = 2 // дней в неделю не могу работать

const totalPrice = totalHours * rate;

const hoursWorking = limitHours * limitDays; // 25 - могу работать в неделю
const canDaysWorking = deadline - notWorking; // 9 - остается дней на работу
const canHoursWorking = canDaysWorking * limitHours; // 45 - остается часов на работу


console.log(canHoursWorking >= totalHours); 
console.log(totalPrice);
console.log(String('10') - 5 + Boolean('') + '1');


let stringNumber = "42";
let boolValue = true;
let numValue = 0;

// Ваш код здесь

console.log(typeof(stringNumber)); //строка
console.log(typeof(boolValue)); //boolean
console.log(typeof(numValue)); //number

console.log(Number(stringNumber)); //42
console.log(Number(boolValue)); // 1
console.log(Number(numValue)); // 0

console.log(Boolean(stringNumber)); //true
console.log(Boolean(boolValue)); // true
console.log(Boolean(numValue)); // false

console.log(String(stringNumber)); // 42
console.log(String(boolValue)); // true
console.log(String(numValue)); // 0

let balance = 100;

// Ваш код здесь


console.log(`После пополнения на 50: ${balance += 50}`);
console.log(`После списания 30: ${balance -= 30}`);


let emptyString = "";
let zeroValue = 0;
let nullValue = null;
let textValue = "hello";
console.log(Boolean(emptyString));
console.log(Boolean(zeroValue));
console.log(Boolean(nullValue));
console.log(Boolean(textValue));