
// пример с классами

class Player1 {
    play() {}
    stop() {}
}

class Player2 {
    startPlaying() {}
    stopPlaying() {}
}

class Player2Adapter {
    constructor(player) {
        this.player = player;
    }

    play() {
        this.player.startPlaying();
    }

    stop() {
        this.player.stopPlaying();
    }
}


function play(player) {
    player.play();
    player.stop();
}

play(new Player1())
play(new Player2Adapter(new Player2()))









// пример из https://learn.javascript.ru/promisify

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}

// использование:
loadScript('path/script.js', (err, script) => {...})

// превращаем в промис

function promisify(f) {
    return function (...args) { // возвращает функцию-обёртку
        return new Promise((resolve, reject) => {
            function callback(err, result) { // наш специальный колбэк для f
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // добавляем колбэк в конец аргументов f

            f.call(this, ...args); // вызываем оригинальную функцию
        });
    };
};

// использование:
const loadScriptPromise = promisify(loadScript);

const script = await loadScriptPromise('path/script.js');
