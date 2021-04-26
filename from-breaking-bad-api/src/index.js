//Breaking Bad index
import "./styles.css";
import * as CharacterData from "./data-business";
import * as Utils from "./utils";

//Get character data from the API
CharacterData.getListOfCharacters().then(data => {
    const characterList = data;
    const nodes = [];
    var charId = "";
    //Create an HTML element for every character entry
    for (var character of characterList){
        const node = Utils.createCharacterRow(character);
        node.id = character.char_id;
        //Click event handler to display character information
        node.addEventListener("click", function(event){
            charId = event.target.parentNode.id;
            CharacterData.getCharacterById(charId).then(data => {
                const character = data[0];
                Utils.showCharacter(character);
            });
        });
        nodes.push(node);
    }
    //Append every character node to the root node in the HTML
    document.getElementById("root").innerHTML="";
    for (var node of nodes) {
        document.getElementById("root").append(node);
    }
});

