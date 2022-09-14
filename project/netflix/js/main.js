// Expected results:
var arr = [
  ['name', 'binh dang'],
  ['age', 18],
];

const arrToObj = (arr) => {
  const array = arr.reduce((obj, item) => {
    obj[item[0]] = item[1]
    return obj
  },{})
  return array
}



console.log(arrToObj(arr)); 
