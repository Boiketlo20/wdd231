const cards = document.querySelector('#cards'); 

async function getMembers() {
  const response = await fetch("data/members.json"); 
  const data = await response.json(); 
  displaySpotlightMembers(data.members);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displaySpotlightMembers(members){
    const spotlightMembers = members.filter(member =>
      member.membershipLevel == 3 || member.membershipLevel == 2
    );

    const randomSpotlights = shuffle(spotlightMembers).slice(0, 2); // or 3

    cards.innerHTML = '';

    randomSpotlights.forEach(member => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let address = document.createElement('p')
        let email = document.createElement('p')
        let phone = document.createElement('p')
        let websiteUrl = document.createElement('a')
        let membershipLevel = document.createElement('p'); // ← ADD THIS LINE
        let image = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${member.name}`; 
        const levelText = member.membershipLevel == 3 ? 'Gold Member' : 'Silver Member';
        membershipLevel.textContent = levelText;
        address.textContent = `${member.address}`; 
        email.textContent = `${member.email}`; 
        phone.textContent = `${member.phone}`; 
        websiteUrl.textContent = `${member.website}`; 
        // Build the image portrait by setting all the relevant attributes
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Portrait of ${member.name}`); 
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '240');
        image.setAttribute('height', '340');

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(address);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(websiteUrl);
        card.appendChild(membershipLevel)
        card.appendChild(image);

        cards.appendChild(card);  
    });
}

getMembers();

// Set default view to grid
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.getElementById('cards');
  cards.classList.add('grid');
});

document.querySelector('#grid-view').addEventListener('click', () => {
  cards.classList.remove('list');
  cards.classList.add('grid');
});

document.querySelector('#list-view').addEventListener('click', () => {
  cards.classList.remove('grid');
  cards.classList.add('list');
});