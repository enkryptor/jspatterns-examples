
class Service {
	doSomething() { /* ... */ }
	static getInstance() {
		if (!Service.instance) {
			Service.instance = new Service();
		}
		return Service.instance;
	}
}

// альтернатива через ES Module
export const service = new Service();

