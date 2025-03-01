

class BaseService {
    async sendSomething(data) {
        const body = this.encode(data);
        await this.send(body);
    }

    encode(data) {
        // реализация по умолчанию
        return data;
    }

    async send() {
        // абстрактный метод
        throw new Error("Not implemented");
    }
}


class Service extends BaseService {
    constructor({ http }) {
        this.http = http;
    }

    encode(data) {
        return Converters.base64ToUnicode(data);
    }

    async send(body) {
        await this.http.post(Endpoints.set, body);
    }
}



// распределение ответственности по наследникам

class HttpService extends BaseService {
    // Пример с приватным полем
    #http

    constructor({ http }) {
        this.#http = http;
    }

    async send(body) {
        await this.#http.post(Endpoints.set, body);
    }
}

class EncodedDataService extends HttpService {
    encode(text) {
        // ....
    }
}





// Особенность JS при использовании конструктора в качестве шаблонного метода:

class Animal {
    constructor() {
        this.announce();
    }
}
class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    announce() {
        console.log(`A dog named ${this.name} was born!`);
    }
}
const t = new Dog('Fido'); // выведет "A dog named undefined was born!"
