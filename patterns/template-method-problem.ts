
namespace ProblemExample {

    abstract class Animal {
        constructor() {
            this.announce();
        }

        protected abstract announce(): void;
    }

    class Dog extends Animal {
        constructor(private name: string) {
            super();
        }

        protected announce(): void {
            console.log(`A dog named ${this.name} was born!`);
        }
    }

    const t = new Dog('Fido');

}
