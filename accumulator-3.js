const arr = ['JavaScript', 'Java', 'CSS', 'C#', 'Python', 'PHP', 'Forthan', 'GO', 'Rust'];
let i = 0;
let array = [];
for (let i = 0; i < arr.length; i++)_{
  if (arr[i].length > 3) {
   array.push(arr[i])
}
}
console.log(array);