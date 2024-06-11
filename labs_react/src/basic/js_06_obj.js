let calc = {
    a: 1,
    b: 2,
    add: function () {
        return this.a + this.b;
    },
};

console.log(calc.add());

let cal2 = {};
cal2.a = 1;
cal2.b = 2;
cal2.add = function () {
    return this.a + this.b;
};

console.log(cal2.add());

// 생성자
function calc3(a, b) {
    this.a = a;
    this.b = b;
}

calc3.prototype.add = function () {
    return this.a + this.b;
};

let obj3 = new calc3(1, 2);
console.log(obj3.add());

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    print() {
        console.log('면적: ', this.area);
    }
}

let poly = new Polygon(10, 20);
console.log(poly.area);
poly.print();

class Square extends Polygon {
    constructor(length) {
        super(length, length);
    }
}

let squ = new Square(10);
console.log(squ.area);
squ.print();
