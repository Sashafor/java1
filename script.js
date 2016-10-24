/**
 * Created by Александр on 24.10.2016.
 */
var user = {
    name: "Александр"
};

var admin = user;

console.log(admin);

var login = prompt("Введите Ваш логин");

    if (login == "Админ") {
       var parol = prompt("Введите Ваш пароль");
            if (parol == "Чёрный Властелин") {
                alert("Добро пожаловать!")
            }

            else if (parol == null) {
                alert("Вход отменён")
            }

            else if (parol != "Чёрный Властелин") {
                alert("Пароль не верен")
            }
}
    else if (login == null) {
        alert("Вход отменён");
    }

    else  if (login != "Админ"){
        alert("Я вас не знаю");
}


