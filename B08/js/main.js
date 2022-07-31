const myFunction = () => {
    let a = 9;
    let b = 'xxx'
    for (let i = 0; i <= a; i++) {
        let c;
        c = i + b

        for (let j = i + 1; j <= a; j++) {
            c = c + j + b;

        }
        document.write(c + '</br>')
    }
}
myFunction()