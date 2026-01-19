// упражнение 1
const tasks = ['Задача 1'];

// Добавление задачи в конец
const addToList = (el) => {
	tasks.push(el);
}

// Удаление задачи по названию
const deleteFromList = (el) => {
	let elIndex = tasks.indexOf(el);

	if (elIndex > 0) {
		tasks.splice(elIndex, 1);
	}
}

// Перенос задачи в начало списка по названию
const replaceToStart = (el) => {
	let elIndex = tasks.indexOf(el);

	if (elIndex > 0) {
		const targetEl = tasks.splice(elIndex, 1).join();
		tasks.unshift(targetEl);
	}
}

addToList('Задача 2');
addToList('Задача 3');
addToList('Задача 4');
console.log(tasks);

deleteFromList('Задача 2');
console.log(tasks);

replaceToStart('Задача 3');
console.log(tasks);


// DRY

const tasks2 = ['Задача 1'];

// Добавление задачи в конец
const addToList2 = (el) => {
	tasks2.push(el);
}

// Удаление задачи по названию
const deleteFromList2 = (el) => {
	let elIndex = tasks2.indexOf(el); // нашли индекс удаляемого элемента
	if (elIndex < 0) { // если элемент не нашелся (индекс не -1) или (elIndex === -1)
		return;
	}
	return tasks2.splice(elIndex, 1); // иначе удаляем элемент и возвращаем это удаление
}

// Перенос задачи в начало списка по названию
const replaceToStart2 = (el) => {
	const remove = deleteFromList2(el); // записали в переменную массив с удаленной задачей
	if (!remove) {
		return;
	}
	tasks2.unshift(remove[0]); // поставили единственный элемент массива на первое место
}

addToList2('Задача 2');
addToList2('Задача 3');
addToList2('Задача 4');
console.log(tasks2);

deleteFromList2('Задача 2');
console.log(tasks2);

replaceToStart2('Задача 3');
console.log(tasks2);


// деструктуризация

const userData = ['Маша', 24, 'СПб']; // Исходный массив
// const userName = userData[0]; // Имя пользователя
// const age = userData[1]; // Возраст пользователя
// const city = userData[2]; // Город пользователя

const [userName, age, city] = userData; // Деструктуризация массива
// const [userName, , city] = userData; // Пропускаем Age
// const [userName, _ , city] = userData; // Явно игнорируем Age

console.log(userName, city);


// Rest оператор

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);


// упражнение 2

const url = 'https://purpleschool.ru/course/javascript';

function parseUrl(url) {
	const urlArr = url.split('/');
	const [protocol, _, domen, ...othersAddress] = urlArr;

	if (protocol === 'https:'|| protocol === 'http:') {
		console.log(protocol);
		console.log(domen);
		console.log(othersAddress.join('/'));
	}
	return;
}

parseUrl(url);


let arr = ['1', '2', '3', '4'];
console.log(arr.splice(1, 2));


// упражнения ИИ

const products = ['Хлеб', 'Молоко', 'Яблоки', 'Сыр'];

// Ваш код здесь
console.log(`Первый товар: ${products[0]},
Последний товар: ${products[products.length - 1]},
Всего товаров: ${products.length}`);

console.log(`Первый товар: ${products.at(0)},
Последний товар: ${products.at(-1)},
Всего товаров: ${products.length}`);

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];

console.log(cities.join(' | '));


const arrOld = [10, 20, 30, 40, 50];
console.log(`Исходный массив: ${arrOld}`);
const arrNew = arrOld.slice(1, 4);
console.log(`Извлеченная часть: ${arrNew}`);
console.log(`Исходный массив после slice: ${arrOld}`);

const arr2 = [5, 10, 15];

console.log(`После добавления 20: ${arr2.push(20)}.
После добавления 25: ${arr2.push(25)}.
Новая длина: ${arr2.length}`);


const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
console.log('Исходный массив: ', fruits);
const delEl = fruits.shift();
console.log('Удаленный элемент: ', delEl);
console.log('Массив после удаления: ', fruits);


const animals = ['Кот', 'Собака', 'Хомяк', 'Попугай', 'Рыбка'];

console.log('Исходный массив: ', animals);
console.log('Удаленные элементы:', animals.splice(2, 2))
console.log('Массив после удаления:', animals);


const profs = ['Врач', 'Учитель', 'Инженер', 'Дизайнер', 'Программист'];
const [first, second, ...otherProfs] = profs;
console.log('Первая профессия: ', first);
console.log('Вторая профессия: ', second);
console.log('Остальные профессии: ', otherProfs);


const contries = ['Россия', 'Франция', 'Германия', 'Италия'];
console.log('Исходный массив: ', contries);
console.log('Удаленный элемент: ', contries.pop());
console.log('Массив после удаления: ', contries);

const books = ['Война и мир', 'Преступление и наказание', 'Мастер и Маргарита'];

console.log(books.includes('Война и мир') ? true : false);