const author = document.getElementById("author");
const quotes = document.getElementById("quotes");
const famous = document.getElementById("famous");
const inspirational = document.getElementById("inspirational");
const random = document.getElementById("random");
const copy = document.getElementById("copy");

let quoteCat = "famous";
const renderQuotes = function (category) {
  const request = fetch(`https://api.api-ninjas.com/v1/quotes`, {
    method: "GET",
    headers: { "X-Api-Key": "Yj/SMs7Jx63NDLdP3a45Sw==6HoubvYbTcL0Mp4D" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayName(data[0].author);
      displayQuotes(data[0].quote);
    })
    .catch((error) => console.log(error));
};

const displayName = function (authorname) {
  author.textContent = authorname;
};

const displayQuotes = function (quotesText) {
  quotes.textContent = `"${quotesText}"`;
};

famous.addEventListener("click", function (e) {
  e.preventDefault();
  famous.classList.add("category");
  inspirational.classList.remove("category");
  //   renderQuotes("famous");
  quoteCat = "famous";
});

inspirational.addEventListener("click", function (e) {
  e.preventDefault();
  famous.classList.remove("category");
  inspirational.classList.add("category");
  //   renderQuotes("inspirational");
  quoteCat = "inspirational";
});

random.addEventListener("click", function (e) {
  renderQuotes(quoteCat);
});

copy.addEventListener("click", function (e) {
  e.preventDefault();
  let text = quotes.textContent;
  navigator.clipboard.writeText(text);
});

renderQuotes(quoteCat);
