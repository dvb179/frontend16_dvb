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
