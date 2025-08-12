
const cards = document.querySelector('#cards');

async function getTrendingBooks() {
  const genre = "romance"; 
  const apiKey = "AIzaSyBfbXAgbgIlgq4-qmQeyvSY4XPiICw61AM";
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&orderBy=newest&key=${apiKey}&maxResults=12`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const data = await response.json();
    displayBooks(data.items);

  } catch (error) {
    console.error(error.message);
  }
}

function displayBooks(books) {
  cards.innerHTML = "";

  books.forEach(book => {
    const info = book.volumeInfo;
    const card = document.createElement('section');

    const title = document.createElement('h2');
    title.textContent = info.title;

    const author = document.createElement('p');
    author.textContent = info.authors ? info.authors.join(", ") : "Unknown Author";

    const rating = document.createElement('p');
    rating.textContent = info.averageRating ? `Rating: ${info.averageRating}` : "No rating available";

    const desc = document.createElement('p');
    desc.textContent = info.description ? info.description.substring(0, 150) + "..." : "No description available.";

    const image = document.createElement('img');

    image.src = info.imageLinks ? info.imageLinks.thumbnail : "placeholder.jpg";
    image.setAttribute("loading", "lazy");
    image.setAttribute("alt", info.title);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(rating);
    card.appendChild(desc);
    card.appendChild(image);

    cards.appendChild(card);
  });
}

getTrendingBooks();
