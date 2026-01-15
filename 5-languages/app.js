let lang = 'ru';

if (typeof lang === 'string') {
	lang = lang.trim();
	switch (lang) {
		case 'en':
			console.log('Hello!');
			break;
		case 'ru':
			console.log('Привет!');
			break;
		case 'de':
			console.log('Gutten tag!!');
			break;
		default:
			console.log('Tervetuloa!');
	}
} else {
	console.log('Неверный формат записи');
}
