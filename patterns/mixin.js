let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // мы также можем использовать Object.setPrototypeOf

    sayHi() {
        // вызываем метод родителя
        super.say(`Привет, ${this.name}`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
new User("Вася").sayHi(); // Привет, Вася!