// функция шифрования пароля
const password = 'qwerty';

const crypto = (el) => {
	let passArr = el.split('');
	passArr.reverse();
	let newPassArr = passArr.concat(passArr.slice(-2));
	return newPassArr.join('');
}

const check = (el, elCrypto) => {
	let elCryptoArr = elCrypto.split('');
	elCryptoArr.splice(-2);
	elCryptoArr.reverse();
	if (elCryptoArr.join('') === el) {
		return true;
	} else {
		return false;
	}
}

check(password, crypto(password));
console.log(check(password, crypto(password)));