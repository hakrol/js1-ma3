// QUESTION 1
(a, b) => a - b;

//QUESTION 2
const sportNames = "https://api.rawg.io/api/games?genres=sports";

fetch(sportNames)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    logNames(json);
  })
  .catch(function(error) {
    //redirect to error.html
    window.location.href = "error.html";
  });

function logNames(json) {
  const names = json.results;

  for (let i = 0; i < names.length; i++) {
    console.log(names[i].name);
  }
}

//QUESTION 3
const string = "These cats are outrageous.";

const stringReplaced = string.replace("cats", "giraffes");

console.log(stringReplaced);

//QUESTION 4
// https://my.site.com?userId=7
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has(userId)) {
  userId = params.get("userId");
}

if (userId < 10) {
  document.location.href = "first.html";
} else if (userId >= 10) {
  document.location.href = "second.html";
} else {
  document.location.href = "third.html";
}

//QUESTION 5
const container = document.querySelector(".container");
const button = document.querySelector("button");

container.removeChild(button);

//QUESTION 6
const animalList = document.querySelector(".animals");

const cowsNode = document.querySelector(".cows");

const createParrotsLi = document.createElement("li");

const parrotsNode = document.createTextNode("Parrots");

createParrotsLi.appendChild(parrotsNode);

createParrotsLi.className = "parrots";

animalList.appendChild(createParrotsLi);

cowsNode.after(createParrotsLi);

//QUESTION 7

const gameRating = "https://api.rawg.io/api/games/3801";

fetch(gameRating)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    assignRating(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function assignRating(json) {
  console.dir(json);
  let ratingContainer = document.querySelector(".rating");

  const rating = json.rating;

  ratingContainer.innerText = rating;
}
