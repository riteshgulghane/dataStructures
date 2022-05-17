export default class Queue {

    constructor(value) {
        this.#map = [];
    }

    enQueue(val) {
        this.#map.push(val);
    }

    deQueue() {
        return this.#map.shift();
    }

    peek() {
        if (!this.#map.length)
            return null;
        return this.#map[0];
    }

    getSize() {
        return this.#map.length;
    }

    isEmpty() {
        return this.#map.length == 0;
    }
}