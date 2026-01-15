// 1 упражнение

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


// 2 упражнение

const message = prompt('Сколько будет 7 + или - 15?');

switch(true) {
	case Number(message) === (7 + 15):
	case Number(message) === (7 - 15):
	case message === 'Я не робот':
		console.log('Ты не робот');
		break;
	default:
		console.log('Держите робота!');
}


// упраженения с ИИ

const age = 16;

switch (true) {
  case (age >= 0) && (age < 13): 
		console.log('Детский контент');
		break;
  case (age > 13) && (age <= 17): 
    console.log('Подростковый контент');
    break;
  default:
    console.log('Взрослый контент');
};

const wheels = 2;

if (typeof wheels === 'number') {
	switch(true) {
		case wheels < 1:
		case wheels > 20:
			console.log('Это не транспорт');
			break;
		case wheels === 1:
			console.log('Моноцикл');
			break;
		case wheels === 2:
			console.log('Велосипед или мотоцикл');
			break;
		case wheels === 3:
			console.log('Трицикл');
			break;
		case wheels === 4:
			console.log('Автомобиль');
			break;
		default:
			console.log('Неизвестный транспорт');
	}
} else {
	console.log('Это не транспорт');
}

const orderNumber = -4;
console.log(Number.isInteger(orderNumber));

if (Number.isInteger(orderNumber) && Number(orderNumber) > 0) {
  switch (orderNumber) {
    case 1001: 
      console.log('Заказ в обработке');
      break;
    case 1002: 
      console.log('Заказ отправлен');
      break;
    case 1003: 
      console.log('Заказ доставлен');
      break;
    case 1004: 
      console.log('Заказ отменен');
      break;
    default: 
      console.log('Заказ не найден');
  }
} else {
  console.log('Введите целое положительное число');
};


const dayNumber = 3;

if (Number.isInteger(dayNumber)) {
  switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log('Будний день');
      break;
    case 6:
    case 7:
      console.log('Выходной день');
      break;
    default: 
    	console.log('Некорректный номер дня');
  }
} else {
  console.log('Некорректный номер дня');
};


const productCode = 300;

if (Number.isInteger(productCode)) {
  if (productCode > 0) {
    switch (productCode) {
      case 100:
        console.log('Электроника');
				break;
      case 200:
        console.log('Одежда');
				break;
      case 300:
        console.log('Книги');
				break;
      case 400:
        console.log('Спорт');
				break;
      case 500:
        console.log('Дом и сад');
				break;
      default:
        console.log('Категория не определена');
    }
  } else {
		console.log('Категория не определена');
	}
} else {
  console.log('Категория не определена');
};


const urgent = true;
const important = false;
let decision;

if (typeof urgent === 'boolean' && typeof important === 'boolean') {
  switch (true) {
    case urgent === true && important === true:
      decision = 'Высокий приоритет';
			break;
    case urgent === true && important === false:
      decision = 'Средний приоритет';
			break;
    case urgent === false && important === true:
      decision = 'Низкий приоритет';
			break;
    case urgent === false && important === false:
      decision = 'Отложить';
  }
  console.log(decision)
} else {
  console.log('Переменные не того типа');
};


const password = 'admin123';
let messagePass;

if (typeof password === 'string') {
  switch (password) {
    case 'admin123': 
      messagePass = 'Доступ предоставлен';
      break;
    case 'user456': 
      messagePass = 'Ограниченный доступ';
      break;
    default: 
      messagePass = 'Доступ запрещен';
  }
  console.log(messagePass);
} else {
  console.log('Ошибка формата');
}


let permission = 'read';
let messageRoot;
permission = permission.trim(); // убирает пробелбные символы (пробел, табуляция) в начале и конце строки

console.log(permission);

if (typeof permission === 'string') {
  switch (permission) {
    case 'read':
      messageRoot = 'Только чтение';
      break;
    case 'write':
      messageRoot = 'Запись разрешена';
      break;
    case 'execute':
      messageRoot = 'Выполнение разрешено';
      break;
    case 'admin':
      messageRoot = 'Полный доступ';
      break;
    default:
      messageRoot = 'Доступ ограничен';
  };
  console.log(messageRoot);
} else {
  console.log('Неверный формат');
}


const userId = 2;

if (Number.isInteger(userId) && userId > 0) {
  switch (userId) {
    case 1:
      console.log('Базовая подписка');
      break;
    case 2:
      console.log('Премиум подписка');
      break;
    case 3:
      console.log('VIP подписка');
      break;
    case 4:
      console.log('Корпоративная подписка');
      break;
    default:
      console.log('Подписка не найдена');
  }
} else {
  console.log('Неверный формат');
}