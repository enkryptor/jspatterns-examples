
export default class UserModel {
    constructor(data) {
        this.data = data ?? this.read();
    }

    create() {}

    update(patch) {
        const newData = {
            ...this.data,
            ...patch,
        };
        return new UserModel(newData);
    }

    read() {
        // получаем данные
        return { name: "Иоганн", email: "test@example.com" };
    }

    delete() {}
}
