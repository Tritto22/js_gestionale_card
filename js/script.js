/*  ********variable********** */

const container = document.querySelector('.container');
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


/*  ********function********** */

function implementCard (box) {
    let card = '';
    for (let i = 0; i < box.length; i ++) {
        card = `
            <div class="card">
                <img src="${box[i].img}" alt="">
                <h2>${box[i].nome}</h2>
                <h3>${box[i].prezzo}</h3>
            </div>`;
        container.innerHTML += card;
    }
}











// ****************prova implemento card+*********************

// const immagine = {
//     img : 'img/1.jpg',
//     nome : 'ciao',
//     prezzo: '10€'
// };

// container.innerHTML = `
//     <div class="card">
//         <img src="${immagine.img}" alt="">
//         <h2>${immagine.nome}</h2>
//         <h3>${immagine.prezzo}</h3>
//     </div>`;