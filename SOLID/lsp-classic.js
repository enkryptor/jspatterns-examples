class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() { return this.width * this.height; }
}

class Square extends Rectangle {
    constructor(size) { super(size, size) }
    set width(n) { this._width = n; this._height = n; }
    set height(n) { this.width = n; }
}
