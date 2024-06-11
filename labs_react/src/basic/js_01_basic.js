var a = 10;
console.log(a);

a = 'abc';
console.log(a);

console.log(10 + 20);

console.log(console);

// var console = '가나다라';
// console.log(console);
console.log('---------------------------');

console.log(typeof 10);
console.log(typeof 10.1);
console.log(typeof '12345');
console.log(typeof true);
console.log(typeof function () {});
console.log(typeof {});
console.log(typeof []);

console.log(1 + '2');
console.log('1' + 2);
console.log('1' / 2);
console.log('1' * 2);
console.log('1' * 1 + 2);

// 템플릿 문자열
console.log(`1+2=${1 + 2}`);
var today = new Date().getFullYear();
console.log(`올해는 ${today}년 입니다.`);

// 논리 비교연산자
console.log('273' == 273);

// 단축평가
true || console.log('실행1');
false || console.log('실행2');

true && console.log('실행1');
false && console.log('실행2');

// 형변환
console.log(Number('1') + 2);
console.log(Number(true) + 2);
console.log(Number('abcd') + 2);
console.log(Number('123abcd') + 2);
console.log(isNaN(Number('123abcd')));

// 구조 분해 할당(Destructuring)
var [a, b, c] = [1, 2, 3]; // 1, 2, 3 값이 각 a, b, c로 들어간다.
console.log(a);
console.log(b);
console.log(c);

// 정의 및 초기화
var { pro1, pro2, pro3 } = {
    pro1: 1,
    pro2: 'str',
    pro3: true,
};

console.log(pro1, pro2, pro3);

var { pro1 = 1, pro2 = 'str', pro3 = true } = {};

console.log(pro1, pro2, pro3);

var b = [1, 2, 3];
var [a, b, c] = b;

console.log(a, b, c);
