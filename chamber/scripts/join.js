//Learn More membership buttons
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogText = document.querySelector('#info');

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>Cost: Free</p>
        <p> For registered non-profit organizations</p>
        <p>Includes:</p>
        <p>Basic directory listing</p>
        <p>invitation to community events</p>
        <p>Access to public news and announcements</p>`;
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> Cost: Entry-level fee</P>
    <p>Includes:</p>
    <p>Enhanced directory listing (logo, contact info, description)</p>
    <p>Access to chamber-hosted networking events</p>
    <p>Monthly newsletter mention</p>
    <p>Member-only training opportunities</p>`;
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> Cost: Moderate fee</P>
    <p>Includes everything in Bronze, plus:</p>
    <p>Spotlight position on the home page (rotating banner)</p>
    <p>Priority placement in directory</p>
    <p>10% discount on event tickets</p>
    <p>Business promotion on social media</p>`;
});

openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> Cost: Premium fee</P>
    <p>Includes everything in Silver, plus:</p>
    <p>Featured spotlight on the homepage</p>
    <p>First-priority placement in all listings</p>
    <p>Free booth at Chamber events (where applicable)</p>
    <p>Exclusive invitation to Gold-only leadership roundtables</p>
    <p>Quarterly business highlight in Chamber newsletter</p>`;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});