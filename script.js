const poductAPI = 'https://golden-whispering-show.glitch.me';

let createProductId = 2;



fetch(poductAPI, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(element => createCard(element))
    });


function createCard(data) {
    const randomProd = data;

    const img = document.createElement('img');
    img.classList.add('prodImg');
    img.src = randomProd.image;

    const title = document.createElement('p').innerText = randomProd.title;
    const titleDiv = document.createElement('div');

    const price = document.createElement('h1').innerText = `€ ${randomProd.price}`;
    const priceDiv = document.createElement('div');
    priceDiv.classList.add('priceDiv');

    const btn = document.createElement('button');
    btn.innerText = 'Ištrinti';
    btn.classList.add('btn');
    btn.dataset.id = data.id;
    btn.addEventListener('click', deleteSelProduct);

    const article = document.createElement('article');
    article.classList.add('productCard');


    const container = document.querySelector('.container');


    priceDiv.append(price);
    titleDiv.append(title);
    article.append(img, titleDiv, priceDiv, btn);
    container.append(article);

}


//DELETE product 
const deleteSelProduct = (e) => {
    if (e.target.nodeName === 'BUTTON') {
        fetch(`${poductAPI}/${e.target.dataset.id}`, { method: 'DELETE' })
            .then(() => {
            window.location.reload()
        })
    }
}

