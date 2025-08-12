import {books} from '../data/books.mjs'
console.log(books)
import { Favourites } from './favourites.mjs';

const cards = document.querySelector('#cards');

function displayItems(books){
  cards.innerHTML = "";
    books.forEach(book => {
        const thecard = document.createElement('div')

        const bookTitle = document.createElement('h2')
        bookTitle.innerText = book.name
        thecard.appendChild(bookTitle)

        const author = document.createElement('h3')
        author.innerText = book.author
        thecard.appendChild(author)

        const thedesc = document.createElement('p')
        thedesc.innerText = book.description
        thedesc.classList.add("description");
        thecard.appendChild(thedesc)

        const rating = document.createElement('p')
        rating.innerText = `Star Rating: ${book.rating}`
        rating.classList.add("rating");
        thecard.appendChild(rating)

        const thephoto = document.createElement('img')
        thephoto.src = `${book.image_url}`
        thephoto.loading = 'lazy';
        thephoto.alt = book.name
        thephoto.width = 240
        thephoto.height = 340
        thecard.appendChild(thephoto)

        const heartBtn = document.createElement('button');
        heartBtn.innerHTML = Favourites.isFavourite(book.id) ? 'Added to Favourites ❤️' : 'Add to Favourites 🤍';
        heartBtn.addEventListener('click', () => {
          if (Favourites.isFavourite(book.id)) {
            Favourites.removeFavourite(book.id);
            heartBtn.innerHTML = 'Add to Favourites 🤍';
          } else {
            Favourites.addFavourite(book);
            heartBtn.innerHTML = 'Added to Favourites ❤️';
          }
        });
        thecard.appendChild(heartBtn);

        cards.appendChild(thecard)

    });
}

displayItems(books)



const romanceBooks = document.querySelector("#romance");
const selfHelpBooks = document.querySelector("#selfHelp");
const fantasyBooks = document.querySelector("#fantasy");
const yaBooks = document.querySelector("#youngAdult");
const allBooks = document.querySelector("#all");

romanceBooks.addEventListener("click", () => {
  displayItems(books.filter(book =>  book.genres.includes("romance")))
});

selfHelpBooks.addEventListener("click", () => {
  displayItems(books.filter(book =>  book.genres.includes("Self Help")))
});

fantasyBooks.addEventListener("click", () => {
  displayItems(books.filter(book =>  book.genres.includes("Fantasy")))
});

yaBooks.addEventListener("click", () => {
  displayItems(books.filter(book =>  book.genres.includes("YA")))
});

allBooks.addEventListener("click", () => {
  displayItems(books)
});

const favouritesButton = document.querySelector('#favourites');
favouritesButton.addEventListener('click', () => {
  displayItems(Favourites.getFavourites());
});

displayItems(books);