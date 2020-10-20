let userName = prompt("кто там?", '');
if (userName == 'админ') {
    let pass = prompt('пароль?', '');
    if (pass == 'я главный') {
        alert('здравствуйте!');
    } else if (pass == '' || pass == null) {
        alert('отменено');
    } else {
        alert('неверный пароль');
    }
} else if (userName == '' || userName == null) {
    alert('отменено');
} else {
    alert("я вас не знаю");
}