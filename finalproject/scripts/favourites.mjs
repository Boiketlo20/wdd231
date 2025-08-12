import {books} from '../data/books.mjs'
//console.log(books)

export const Favourites = {

  getFavourites: () => {
    const favs = localStorage.getItem('favourites');
    return favs ? JSON.parse(favs) : [];
  },

  addFavourite: (book) => {
    const favs = Favourites.getFavourites();
    if (!favs.some((fav) => fav.id === book.id)) {
      favs.push(book);
      localStorage.setItem('favourites', JSON.stringify(favs));
    }
  },

  removeFavourite: (bookId) => {
    const favs = Favourites.getFavourites().filter((fav) => fav.id !== bookId);
    localStorage.setItem('favourites', JSON.stringify(favs));
  },

  isFavourite: (bookId) => {
    return Favourites.getFavourites().some((fav) => fav.id === bookId);
  },
};