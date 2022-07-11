let arr = [5, 6, 3, 66, 8, 9, 0, 13, 15, 65]
let accumulator = 0;

for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i]
}
console.log(accumulator);