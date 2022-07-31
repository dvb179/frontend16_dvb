const myFunction = () => {
    let a = 9;
    let b = 'xxx'
    for (let i = 0; i <= a; i++) {
        let c;
        c = i + b

        for (let j = i + 1; j <= a; j++) {
            c = c + j + b;

        }
        console.log(c + '</br>')
    }
}
myFunction()


/* --------------find max------------------ */
const findMax = (a, b, c) => {
    let max = a

    if (b > max) max = b
    if (c > max) max = c;
    return max
}

console.log(findMax(2, 8, 4));

/*--------------find max in array------------------ */


const findMaxArray = (NumberList) => {
    if (!Array.isArray(NumberList) || NumberList.length === 0 || typeof NumberList === '') return -1;
    //     let max = NumberList[0];
    //     for (let i = 0; i < NumberList.length; i++) {
    //         if ((NumberList[i] > 0) && (NumberList[i] > max)) max = NumberList[i];

    //     }
    //     return max
    // }
    // console.log(findMaxArray([23, 43, '6']));




    return NumberList.reduce((max, numbers) => numbers > max ? numbers : max);
}
console.log(findMaxArray([23, '43']));