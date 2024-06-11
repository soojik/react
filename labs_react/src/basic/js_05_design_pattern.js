function cnt1() {
    var count = 0;
    return ++count;
}

console.log(cnt1());
console.log(cnt1());

let count = 0;
function cnt2() {
    return ++count;
}

count = 200; // 갑자기 이 명령이 끼면 내가 예상했던 1, 2가 아니라 201, 202가 출력된다 -> side effect

console.log(cnt2());
console.log(cnt2());

// closure 디자인 패턴
// 함수 선언식
function cnt3() {
    let count = 0;
    return function () {
        return ++count;
    };
}

// 함수 표현식
let cnt4 = cnt3();
console.log(cnt4());
console.log(cnt4());
console.log(cnt4());

let cnt = 0;

function fib1(n) {
    ++cnt;

    if (n < 2) return n;

    return fib1(n - 2) + fib1(n - 1);
}

let r = fib1(5);
console.log(cnt, r);

// 메모이제이션
let result = [];
cnt = 0;

function fib2(n) {
    cnt++;

    if (n < 2) result[n] = n;

    if (result[n] == undefined) {
        result[n] = fib2(n - 1) + fib2(n - 2);
    }

    return result[n];
}

r = fib2(5);
console.log(cnt, r, result);
