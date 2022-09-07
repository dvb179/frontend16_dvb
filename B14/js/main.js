const showData = () => {
    let url = 'http://apiforlearning.zendvn.com/api/get-gold'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let htmls = data.map(item => {
                console.log(item);
                return `<tr>
                            <td>${item.type}</td>
                            <td>${item.buy}</td>
                            <td>${item.sell}</td>
                        </tr>`
            })
            console.log(htmls);
            let html = htmls.join('')
            document.getElementById('body').innerHTML = html
        })


        .catch(err => { throw err });





}
showData();