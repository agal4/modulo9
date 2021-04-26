//Breaking Bad data-business
function getListOfCharacters() {
  return fetch("https://breakingbadapi.com/api/characters").then((response) =>
    response.json()
  );
}

function getCharacterById(charId) {
  return fetch(
    "https://breakingbadapi.com/api/characters/" + charId
  ).then((response) => response.json());
}

function getRandomQuoteByName(charName) {
  const author = charName.replace(" ", "+");
  return fetch(
    "https://breakingbadapi.com/api/quote/random?author=" + author
  ).then((response) => response.json());
}

export { getListOfCharacters, getCharacterById, getRandomQuoteByName };
