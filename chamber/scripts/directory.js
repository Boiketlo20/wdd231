const cards = document.querySelector('#cards');

async function getMembers() {
  const response = await fetch("data/members.json"); // request
  const data = await response.json(); // parse the JSON data
  //console.table(data.prophets); 
  displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let address = document.createElement('p')
        let email = document.createElement('p')
        let phone = document.createElement('p')
        let websiteUrl = document.createElement('p')
        let image = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        email.textContent = `${member.email}`; 
        phone.textContent = `${member.phone}`; 
        websiteUrl.textContent = `${member.website}`; 
        // Build the image portrait by setting all the relevant attributes
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Portrait of ${member.name} ______________`); 
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); 
        card.appendChild(address);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(websiteUrl);
        card.appendChild(image);

        cards.appendChild(card);  
    });
}