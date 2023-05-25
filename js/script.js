/*  ********global variable********** */

let container = document.querySelector('.container');
const boxItems = [
    {
        img : 'img/1.jpg',
        nome : '1',
        prezzo: '10€'
    },
        {
        img : 'img/2.jpg',
        nome : '2',
        prezzo: '20€'
    },
        {
        img : 'img/3.jpg',
        nome : '3',
        prezzo: '30€'
    },
        {
        img : 'img/4.jpg',
        nome : '4',
        prezzo: '40€'
    },
        {
        img : 'img/5.jpg',
        nome : '5',
        prezzo: '50€'
    },
        {
        img : 'img/6.jpg',
        nome : '6',
        prezzo: '60€'
    }
];

/*  ********code********** */

implementCard(boxItems);
pushCard();

/*  ********function********** */

function implementCard (box) {
    let card = '';
    let boxCards = [];
    container.innerHTML = '';
    for (let i = 0; i < box.length; i ++) {
        card = `
            <div class="card">
                <img src="${box[i].img}" alt="">
                <h2>${box[i].nome}</h2>
                <h3>${box[i].prezzo}</h3>
            </div>`;

        boxCards.push(card);
        container.innerHTML += boxCards[i];
    }
}

function pushCard () {
    const add = document.getElementById('add');

    add.addEventListener('click', function(){
        let newImg = document.getElementById('add-img');
        let newName = document.getElementById('add-name');
        let newPrice = document.getElementById('add-price');
        boxItems.push({
            img: newImg.value,
            nome: newName.value,
            prezzo: newPrice.value
        })

        console.log(boxItems);
        implementCard(boxItems);
        clear(newImg);
        clear(newName);
        clear(newPrice);
    })
}

function clear(input) {
    input.value = '';
    input.textContent = '';
}