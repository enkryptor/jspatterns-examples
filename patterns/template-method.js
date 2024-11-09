

class BaseService {
    async sendSomething(data) {
        const body = this.prepare(data);
        await this.send(body);
    }

    prepare(data) {
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

    prepare(data) {
        return Converters.base64ToUnicode(data);
    }

    async send(body) {
        await this.http.post(Endpoints.set, body);
    }
}



// где уместно, можно распределить ответственность по наследникам

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

class PreparedDataService extends HttpService {
    prepare(text) {
        // ....
    }
}
