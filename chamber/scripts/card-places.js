import {places} from '../data/places.mjs'
console.log(places)

const showHere = document.querySelector("#allplaces");

function displayItems(places){
    places.forEach(x => {
        const thecard = document.createElement('div')

        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.imageURL}`
        thephoto.alt = x.name
        thephoto.width = 300
        thephoto.height = 200
        thecard.appendChild(thephoto)

        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)

        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        const myButton = document.createElement('button');
        myButton.textContent = "Learn More";
        thecard.appendChild(myButton); 

        showHere.appendChild(thecard)

    });
}

displayItems(places)

document.addEventListener('DOMContentLoaded', () => {
    const p = document.getElementById('message');
    const storedDate = Number(localStorage.getItem('message'));
    const visit = Date.now();

    const daysPassed = (visit - storedDate) / 86400000;

    if(!storedDate) {
        p.textContent = 'Welcome! Let us know if you have any questions.';
    }
    else if (daysPassed < 1) {
        p.textContent = `Back so soon! Awesome!`;
    }
    else if (daysPassed >= 1){
        const roundedDays = Math.floor(daysPassed);
        const dayLabel = roundedDays == 1 ? 'day' : 'days';
        p.textContent = `You last visited ${daysPassed} ${dayLabel} ago.`;
    }

    const now = Date.now();
    localStorage.setItem('message', now);

});





