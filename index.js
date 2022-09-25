"use strict";

class ValidatorStatic {
    static isEmail(e) {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(e)) {
            console.log(`Электронный адрес корректно указан (статическая версия)`);
            return true;
        }
        else {
            console.log(`Электронный адрес некорректно указан (статическая версия)`);
            return false;
        }
    }

    static isDomain(e) {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(e)) {
            console.log(`Доменное имя корректно указано (статическая версия)`);
            return true;
        }
        else {
            console.log(`Доменное имя некорректно указано (статическая версия)`);
            return false;
        }
    }

    static isDate(e) {
        if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(e)) {
            console.log('Дата корректно указана (статическая версия)');
            return true;
        }
        else {
            console.log('Дата некорректно указана (статическая версия)');
            return false;
        }
    }

    static isPhone(e) {
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e)) {
            console.log('Номер телефона корректно указан (статическая версия)');
            return true;
        }
        else {
            console.log('Номер телефона некорректно указан (статическая версия)');
            return false;
        }
    }
}


class Validator {
    isEmail(e) {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(e)) {
            console.log(`Электронный адрес корректно указан (стандартная версия)`);
            return true;
        }
        else {
            console.log(`Электронный адрес некорректно указан (стандартная версия)`);
            return false;
        }
    }

    isDomain(e) {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(e)) {
            console.log(`Доменное имя корректно указано (стандартная версия)`);
            return true;
        }
        else {
            console.log(`Доменное имя некорректно указано (стандартная версия)`);
            return false;
        }
    }

    isDate(e) {
        if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(e)) {
            console.log('Дата корректно указана (стандартная версия)');
            return true;
        }
        else {
            console.log('Дата некорректно указана (стандартная версия)');
            return false;
        }
    }

    isPhone(e) {
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e)) {
            console.log('Номер телефона корректно указан (стандартная версия)');
            return true;
        }
        else {
            console.log('Номер телефона некорректно указан (стандартная версия)');
            return false;
        }
    }
}

var validator = new Validator();

// обычная
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

//статическая
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));