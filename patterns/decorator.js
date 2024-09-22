// Пример — логирующий декоратор:

const measure = (f) => {
    return (...args) => {
        const startTime = performance.now();
        const result = f(...args);
        const endTime = performance.now();
        console.log(`Выполнение заняло ${endTime - startTime} мс`);
        return result;
    }
}


function isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

isPrime = measure(isPrime);













// улучшаем декоратор – используем фабрику

const measure2 = (name) => (f) => {
    return (...args) => {
        console.time(name)
        const result = f(...args);
        console.timeEnd(name);
        return result;
    }
}

isPrime = measure2("isPrime")(isPrime);



// классический пример – декоратор класса

class Player {
    play() { }
    pause() { }
}

class TvPlayer {
    constructor(player) {
        this.player = player;
    }

    switchChannel() { }

    play() {
        const startTime = performance.now();
        this.player.play();
        const endTime = performance.now();
        console.log(`Выполнение заняло ${endTime - startTime} мс`);
    }

    pause() {
        this.player.pause();
    }
}

const player = new Player();
const tvPlayer = new TvPlayer(player);
