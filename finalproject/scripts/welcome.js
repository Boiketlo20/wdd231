const getString = window.location.search;
//console.log(getString);

const myInfo = new URLSearchParams(getString);
const selectedForums = [];
for (const [key, value] of myInfo.entries()) {
  if (key.startsWith('forum') && value) {
    selectedForums.push(value);
  }
}

const forumsDisplay = selectedForums.length > 0 
  ? selectedForums.join(', ') 
  : "None selected";


document.querySelector('#results').innerHTML = `
  <p>Hello, ${myInfo.get('first')} ${myInfo.get('last')}!</p>
  <p>We’re thrilled you’ve subscribed to receive personalized book recommendations in your favorite genre: ${myInfo.get('genre')}.</p>
  
  <p><strong>Updates you’ll receive:</strong></p>
  <ul>
    <li>New releases from <strong>${myInfo.get('author')}</strong>.</li>
    <li>Curated recommendations sent to: <strong>${myInfo.get('email')}</strong>.</li>
    ${myInfo.get('phone') ? `<li>SMS updates to: <strong>${myInfo.get('phone')}</strong></li>` : ''}
  </ul>

  <p>Forums you’ve joined: ${forumsDisplay}</p>
  <p>Thank you for trusting us with your reading journey! 🎉</p>
  <p><em>The Literary Escape Team</em></p>
`;

