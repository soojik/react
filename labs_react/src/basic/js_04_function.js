function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); // 3

console.log(add(1)); // NaN
// 하지만 밑 add 메서드로 덮어 씌운 후에는 hoisting으로 인해 위에서 호출하는 add 메서드도 b를 0으로 초기화하니까 NaN가 나지 않는다.

function add(a, b = 0) {
    return a + b;
}

console.log(add(1)); // 1

console.log('-------------------');
function add2() {
    let c = 0;
    for (i = 0, cnt = arguments.length; i < cnt; i++) {
        c += Number(arguments[i]);
    }

    return c;
}

console.log(add2(1, 2)); // 따로 add2 메서드에 파라미터 설정을 하지 않아도 메서드 내에서 arguments로 관리할 수 있다.
console.log(add2(1, 2, 3, 4, 5));

console.log('-------------------');
function add3(...a) {
    c = 0;
    for (let i = 0, cnt = a.length; i < cnt; i++) {
        c += a[i];
    }

    c = 0;
    for (let i in a) {
        c += a[i];
    }

    // forEach
    c = 0;
    for (let v of a) {
        c += v;
    }

    c = 0;
    a.forEach((v) => (c += v));

    // reduce
    return a.reduce((prev, curr) => prev + curr);
}

console.log(add3(1, 2));
console.log(add3(1, 2, 3, 4, 5));

console.log('-------------------');
function add4(a, b, ...f) {
    let c = 0;
    f.forEach((fn) => (c += fn(a, b)));
    return c;
}

console.log(add4(1, 2, (a, b) => a + b));
console.log(
    add4(
        1,
        2,
        (a, b) => a + b, // 3
        (a, b) => a - b, // -1
        /* c = 3 + (-1)
        return c
        이므로 2가 반환 
        */
    ),
);

console.log('-------------------');
// Seperated Operator(전개 구문)
let arr = [1, 2, 3, 4, 5];
console.log(...arr);

let str = 'hello';
console.log(...str);

let obj = { name: '홍길동', addr: '서울' };
console.log(obj);

// deep copy
let obj2 = { ...obj, age: '20' };
console.log(obj2);

console.log('-------------------');
// 비구조화 할당
function circle(a, r) {
    console.log(a.x, a.y, r);
}

circle({ x: 10, y: 20 }, 100);

function circle1({ a = { x: 0, y: 0 }, r = 0 } = {}) {
    console.log(a.x, a.y, r);
}

circle1();

// 즉시 실행 함수
(function add(a, b) {
    console.log(a + b);
})(1, 2);
