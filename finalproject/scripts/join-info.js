//Learn More buttons
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogText = document.querySelector('#info');

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>If you love to read romance novels, and you like reading challenges, come and join this group. If you look at your TBR list and don't know which book to start with, worry no more. We will give you a reason to. We have a variety of reading challenges, monthly book recommendations, buddy reads, book-and non-book-related discussions, 
    author interviews/giveaways and plenty of fun and games to keep you entertain while hanging out with a bunch of people that love to read 
    and talk about books. We know some members like to promote their work or a project but we ask that all promotion is posted in the allocated (Self) Promotions folder only.</p>
    <p>Happy Reading!</p>`;
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> Can't remember the title of a book you read? Come search our bookshelves and discussion posts. 
    If you don’t find it there, post a description on our UNSOLVED message board.</p>`;
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> Keeping romance, history, humor, mystery, love, intrigue, and passion interesting, fun, and clean for all 
    Christians. We discuss everything from reading to music to playing games to what makes a book good...and the best part? It's all clean!!</p>`;
});

openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p> This is a group for people who enjoy many different genre's. If you are someone who appreciates a good book, 
    regardless of the genre...this is the group for you! It is a haven for all bookaholics, and a place to discuss everything that books 
    encompass. Enjoy! </p>
    <p>Note: Authors and Bloggers are welcome. However, if you are mentioning your book or blog, please make sure it is in the Author, Book Giveaway, Blogs, or Promotional Discussions folders. :)</p>`;
});

openButton5.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>If you're addicted to Young Adult books, then this is the place for you! 
    Here, you can openly share your thoughts on YA books and connect with like-minded individuals who share your passion. 
    Join us in engaging group discussions about the books and their captivating characters. We wholeheartedly welcome new members 
    with open arms!</p>`;
});

openButton6.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>A place for booktokers to interact with each other and share the love</p>`;
});

openButton7.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>For readers of fantasy who are looking to find a partner or small group to read and discuss with! We run 
    several fun ongoing challenges and discussion topics. Come join us! :)</p>
    <p>Introduce yourself, see Current Events for info about what's happening, and if you have other questions, please see Everything you need to know </p>`;
});

openButton8.addEventListener("click", () => {
    dialogBox.showModal();
    dialogText.innerHTML = `<p>A space for readers to explore the lessons, tools, and insights from any Self Help Book you have read. 
    Share how you’ve applied emotional intelligence to overcome challenges, improve relationships, and enhance personal growth. Discuss key 
    takeaways, exchange practical tips, and connect with others on the journey to becoming more self-aware, resilient, and fulfilled.</p>`;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});