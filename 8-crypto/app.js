// функция шифрования пароля
const password = 'qwerty';

const crypto = (el) => {
	let passArr = el.split('');
	console.log(passArr);
	passArr.reverse();
	return passArr.concat(passArr.slice(-2));
}

const check = (el, elCrypto) => {
	console.log(el, elCrypto);
	elCrypto.splice(-2);
	elCrypto.reverse();
	console.log(elCrypto);
	if (elCrypto.join('') === el) {
		return true;
	} else {
		return false;
	}
}

check(password, crypto(password));