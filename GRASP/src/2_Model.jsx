
export default class UserModel {
    constructor(data) {
        this.data = data ?? { name: "Иоганн", email: "test@example.com" };
    }

    rename() {
        const newData = {
            ...this.data,
            name: "Никифор",
        };
        return new UserModel(newData);
    }
}
