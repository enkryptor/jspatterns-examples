
// Обычная реализация
const myCar = new Car();
myCar.setSpeed(100);
myCar.setColor('blue');
myCar.setDoors(5);

// "Текучий" интерфейс
const myCar2 = new Car().setSpeed(100).setColor('blue').setDoors(5);

// Вариант реализации:
class Car {
    setSpeed(value){
        this.speed = value;
        return this;
    }

    setColor(value){
        this.color = value;
        return this;
    }

    setDoors(value){
        this.doors = value;
        return this;
    }
}

// пример из реальной жизни — инициализация приложения Vue:
createApp()
	.use(plugin)
	.mount('#app');

// или React
createRoot().render();





// как это можно сделать без классов

const Car = () => {
	let speed, color, doors, car;
		 
	function setSpeed(new_speed) {
		speed = new_speed;
		return car;
	}
	 
	function setColor(new_color) {
		color = new_color;
		return car;
	}
	 
	function setDoors(new_doors) {
		doors = new_doors;
		return car;
	}

    function dir() {
        return { speed, color, doors }
    }

	car = {
		'setSpeed': setSpeed,
		'setColor': setColor,
		'setDoors': setDoors,
        'dir': dir
	};

	return car;
}

const myCar3 = Car().setSpeed(100).setColor('blue').setDoors(5);

console.log(myCar3.dir()); // {speed: 100, color: 'blue', doors: 5}
