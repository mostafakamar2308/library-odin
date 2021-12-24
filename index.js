/* Open and close the modal to add new books*/
//Defining Constants of the modal
const modal = document.querySelector("#add-new-book");
const form = document.querySelector("#book-form");
const submit = document.querySelector("#submit");
const modalStop = document.querySelector(".close");
const modalAppearNav = document.querySelector(".add-new-btn-nav");
const modalAppearBody = document.querySelector(".add-new-btn-body");
const myLibrary = document.querySelector(".books");
//Adding the functionalities
modalStop.addEventListener("click", closeModal);
modalAppearNav.addEventListener("click", openModal);
modalAppearBody.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}
function openModal() {
  modal.style.display = "block";
}
/*End of Open and close the modal to add new books*/
/*Adding the Book Constructors */
function book(bookName, author, pageNumber, completed) {
  this.bookName = bookName;
  this.author = author;
  this.pageNumber = pageNumber;
  this.completed = completed;
}

/*Make an array to store the books*/
const myBooks = [];
/*Take the value by the user to make new books and push it to the array*/
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let newBookName = document.querySelector("#name").value;
  let newBookAuthor = document.querySelector("#author").value;
  let newBookPageNum = document.querySelector("#num").value;
  let newBookCompleted = document.querySelector("#completed").value;
  console.log(newBookName, newBookAuthor, newBookPageNum, newBookCompleted);

  myBooks.push(
    new book(newBookName, newBookAuthor, newBookPageNum, newBookCompleted)
  );
  document.querySelector("#name").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#num").value = "";
  document.querySelector("#completed").value = "";
  closeModal();
  myLibrary.innerHTML = "";
  for (let i = 0; i < myBooks.length; i++) {
    displayBooks(myBooks[i]);
  }
});

/*Display the books in the DOM */
function displayBooks(e) {
  let i = 0;
  let article = document.createElement("article");
  article.classList.add(`book-${i + 1}`);
  let name = document.createElement("h4");
  name.innerHTML = e.bookName;
  let author = document.createElement("h5");
  author.innerHTML = e.author;
  let pageNum = document.createElement("p");
  pageNum.innerHTML = `Number of pages: <span class="number">${e.pageNumber} </span>`;
  let remove = document.createElement("span");
  remove.innerHTML = `X`;
  remove.classList.add("removeBook");
  let completed = document.createElement("p");
  completed.innerHTML = `Completed <span
  class="completed"
  style="
  font-weight: bolder;
  font-size: 1.2em;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  "
  >
  &#10003;
  </span>`;
  article.appendChild(name);
  article.appendChild(author);
  article.appendChild(pageNum);
  article.appendChild(completed);
  article.appendChild(remove);
  myLibrary.appendChild(article);
  i++;
}
//remove elements from the Dom and Database
window.onclick = (e) => {
  if (e.target.parentNode.tagName === "ARTICLE") {
    let article = e.target.parentNode;
    // e.target.parentElement.remove();
    // console.log(myBooks);

    let index = Array.from(article.parentNode.children).indexOf(
      e.target.parentNode
    );
    console.log(index);
    myBooks.splice(index, 1);
    console.log(myBooks);
    myLibrary.innerHTML = "";
    for (let i = 0; i < myBooks.length; i++) {
      displayBooks(myBooks[i]);
    }
  }
};
