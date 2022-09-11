const xhr = new XMLHttpRequest();
const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");

const random = Math.floor(Math.random() * 31);
xhr.onload = function () {
  const result = JSON.parse(this.responseText);

  quotes.innerText = result.quotes[random].quote;
  author.innerText = result.quotes[random].author;
};
xhr.onerror = function () {
  console.log("Somethink wrong dude");
};
xhr.open("GET", "https://dummyjson.com/quotes");
xhr.send();
