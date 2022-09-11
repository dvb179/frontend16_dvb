const stu = [
    {id: 1, name: 'test', scholl: 'NVC'},
    {id: 2, name: 'test 2', scholl: 'NVC 2'}
]

const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];


const sum = numbers.reduce((number, curr) =>{
  return number + curr
}, 0);
console.log(sum);