let arr = [100, 200, 300, 400, 500];
for (let i = 0, cnt = arr.length; i < cnt; i++) console.log(arr[i]);

console.log('--------------');
arr.forEach(function (item) {
    console.log(item);
});

let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.filter((x) => x % 2 == 0).reduce((i1, i2) => i1 + i2);
console.log(sum);

let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
// for (var idx in obj) console.log(obj[idx]);

Array.from(obj).forEach((value, idx) => console.log(value));
