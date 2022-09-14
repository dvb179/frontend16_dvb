<<<<<<< HEAD
const ELEMENT_NAME = document.getElementsByTagName("td");

async function showData() {
  let url = "https://apiforlearning.zendvn.com/api/get-gold";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var htmls = data.map((item) => {
        return ` <tr>
                    <td>${item.type}</td>
                    <td>${item.buy}</td>
                    <td>${item.sell}</td>
                </tr>`;
      });
      let html = htmls.join('');
      document.getElementsById('body').innerHTML = htlm;
    })


    .catch((err) => {
      throw err;
    });
}
showData();
=======
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
>>>>>>> 8786d9856c2d4fb58f95a2e2a4e845819490d23b
