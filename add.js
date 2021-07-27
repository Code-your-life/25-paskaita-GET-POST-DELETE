function postData(e) {
    e.preventDefault();

    let createProductId = 2;
    const image = document.querySelector('.imgPlace').value;
    const title = document.querySelector('.title').value;
    const price = document.querySelector('.price').value;

    
    fetch('https://golden-whispering-show.glitch.me', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({image, title, price})
        
    })
        .then(res => res.json())
        .then((data) => {
            createProductId= data.id;
            alert('You are the best!');
            window.location = 'index.html';
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });

}

const formAction = document.querySelector('.form-sub');
formAction.addEventListener('submit', postData);



  
