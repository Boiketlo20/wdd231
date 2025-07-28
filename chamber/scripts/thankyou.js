const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);

function setTimestamp() {
    const now = new Date().toISOString();
    const form = document.querySelector('form');
    form.action = `thankyou.html?submissionTime=${encodeURIComponent(now)}`;
    return true;
}

document.querySelector('#results').innerHTML = `
<p> Membership for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>${myInfo.get('business')} ${myInfo.get('membership')} membership, was submitted on ${myInfo.get('submissionTime')}</p>
<p>Your Phone Number: ${myInfo.get('phone')}</p>
<p>Your email address is: ${myInfo.get('email')}</p>`;

//(first name, last name, email, mobile number, business name, and current date timestamp from the hidden field). 