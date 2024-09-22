
//
// Пример сервиса, производящего конвертацию и отправку данных
//

const data = getData();
await service.sendSomething(data);

/*******************************************************
 * Пример сервиса до рефакторинга
 */
class BackendService {
    async getSomething() {
        const response = await fetch(this.baseUrl + "api/get/");
        if (!response.ok) {
            throw new Error("...");
        }
        const base64String = await response.text();
        const binString = atob(base64String);
        const byteArray = Uint8Array.from(binString, (b) => b.codePointAt(0));
        return new TextDecoder().decode(byteArray);
    }

    async sendSomething(text) {
        const byteArray = new TextEncoder().encode(text);
        const binString = Array.from(byteArray, (b) => String.fromCodePoint(b)).join("");
        const response = await fetch(this.baseUrl + "api/set/", { method: "POST", body: binString });
        if (!response.ok) {
            throw new Error("...");
        }
    }
}


















/*******************************************************
 * Первая попытка рефакторинга – извлечение метода
 */
class BackendService {
    async getSomething() {
        const base64 = await this.get("api/get/");
        return this.base64ToUnicode(base64);
    }

    async sendSomething(text) {
        const base64 = this.unicodeToBase64(text);
        await this.post("api/set/", base64);
    }

    async get(url) {
        const response = await fetch(this.baseUrl + url);
        if (!response.ok) {
            throw new Error("...");
        }
        return await response.text();
    }

   async post(url, body) {
        const response = await fetch(this.baseUrl + url, { method: "POST", body });
        if (!response.ok) {
            throw new Error("...");
        }
    }

    base64ToUnicode(base64String) {
        const binString = atob(base64String);
        const byteArray = Uint8Array.from(binString, (b) => b.codePointAt(0));
        return new TextDecoder().decode(byteArray);
    }

    unicodeToBase64(str) {
        const byteArray = new TextEncoder().encode(str);
        const binString = Array.from(byteArray, (b) => String.fromCodePoint(b)).join("");
        return btoa(binString);
    }
}

/*******************************************************
 * Вторая попытка рефакторинга – выделяем ответственность классов
 */
class BackendService {
    constructor(http) {
        this.http = http;
    }

    async getSomething() {
        const base64 = this.http.get(Endpoints.get, base64)
        return Converters.base64ToUnicode(base64);
    }

    async sendSomething(text) {
        const base64 = Converters.unicodeToBase64(text);
        await this.http.post(Endpoints.set, base64);
    }
}

class Endpoints {
    static get = "api/get";
    static set = "api/set";
}

class Converters {
    static unicodeToBase64(str) {
        // ...
    }

    static base64ToUnicode(str) {
        // ...
    }
}

class Http {}
