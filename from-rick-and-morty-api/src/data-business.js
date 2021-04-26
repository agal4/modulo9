//Rick and Morty data-business
function getListOfCharacters() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json()
  );
}

function getCharacterById(charId) {
  return fetch(
    "https://rickandmortyapi.com/api/character/" + charId
  ).then((response) => response.json());
}

export { getListOfCharacters, getCharacterById };
