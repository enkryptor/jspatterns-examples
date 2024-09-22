
// как было:

class Service {
    doSomething() {
        localStorage.setItem(id, item);
        // ...
        localStorage.setItem(id2, item2);
        // ...
        localStorage.setItem(id3, item3);
    }
}


// выносим метод:

class Service {
    doSomething() {
        this.save(id, item);
        this.save(id2, item2);
        this.save(id3, item3);
    }

    save(id, item) {
        localStorage.setItem(id, item);
    }
}


// получаем зависимость снаружи:

class Service {
    constructor(storage) {
        this.storage = storage;
    }

    doSomething() {
        this.save(id, item);
        this.save(id2, item2);
        this.save(id3, item3);
    }

    save(id, item) {
        this.storage.setItem(id, item);
    }


    // можно сделать метод асинхронным
    async saveAsync(id, item) {
        return await this.storage.saveAsync(id, item);
      }
}

