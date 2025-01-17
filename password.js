function checkPassword (yourPassword) {
    if (yourPassword.length >= 8 && /\d/.test(yourPassword) && yourPassword.toUpperCase() != yourPassword 
    && yourPassword.toLowerCase() != yourPassword) { 
        return 'Strong'
    } else {
        return 'Weak'
    }
}

console.log(checkPassword('1234qwertU'));