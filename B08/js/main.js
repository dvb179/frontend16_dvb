const setFunction = () => {
    let a = 10;
    let b ='xxx'
    for (let i = 0; i < a; i++) {
        let c;
        c = i + b 
        for (let j = i + 1; j < a; i++) {
            c += j + b
        }
    }
    document.write(c)
}
setFunction();