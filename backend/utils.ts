import { isConstructorDeclaration } from "typescript";
import SemiOriginalCharacterDataType from "../middleware/SemiOriginalCharacterDataType";

export function createFromString(data: string)
{
    let arr = data.split("\n");
    //remove "" strings from array
    arr = arr.filter(e => e);

    //remove "Status" string from array
    arr = arr.filter(function (item) {
        return item.indexOf("Status") !== 0;
    });

    //remove "Personality" string from array
    arr = arr.filter(function (item) {
        return item.indexOf("Personality") !== 0;
    });


    let newCharacter = new(SemiOriginalCharacterDataType);
    let types = ["name", "race", "class", "level", "preferred_weapon", "strength", 
                 "dexterity", "constitution", "intelligence", "wisdom", "charisma",
                 "alignment", "ideals", "flaws", "features_traits", "proficiencies_languages",
                 "background"];
    
    for(let i = 0; i < arr.length; i++)
    {
        newCharacter = testArray(newCharacter, types[i], arr[i]);
    }
    return newCharacter;
}

export function testArray(character : SemiOriginalCharacterDataType, type : string, array : string)
{   
    let tempString = array.split(": "); 

    if(typeof(tempString[1]) !== "undefined"){
        character[type] = tempString[1];
    }
    else{
        character[type] = "Not enough tokens";
    }
    return character;
}

export function processInput(inputData: SemiOriginalCharacterDataType){

    let data: SemiOriginalCharacterDataType = removeNulls(inputData);

    var input: string = "input:";

    input += "\nName: " + data.name;
    input += "\nRace: " + data.race;
    input += "\nClass: " + data.class;
    input += "\nLevel: " + data.level;
    input += "\nPreferred Weapon: " + data.preferred_weapon;

    input += "\n\nStatus"
    input += "\nStrength: " + data.strength;
    input += "\nDexterity: " + data.dexterity;
    input += "\nConstitution: " + data.constitution;
    input += "\nIntelligence: " + data.intelligence;
    input += "\nWisdom: " + data.wisdom;
    input += "\nCharisma: " + data.charisma;

    input += "\n\nPersonality"
    input += "\nAlignment: " + data.alignment;
    input += "\nIdeals: " + data.ideals;
    input += "\nFlaws: " + data.flaws;
    input += "\nFeatures & traits: " + data.features_traits;
    input += "\nProficiencies and languages: " + data.proficiencies_languages;
    input += "\nBackground: " + data.background;

    input += "\noutput:"

    return input;
}

function removeNulls(data: SemiOriginalCharacterDataType){
    if (data.name == null || data.name == ""){
        data.name = "#";
    }
    if (data.race == null || data.race == ""){
        data.race = "#";
    }
    if (data.class == null || data.class == ""){
        data.class = "#";
    }
    if (data.level == null || data.level == ""){
        data.level = "#";
    }
    if (data.preferred_weapon == null || data.preferred_weapon == ""){
        data.preferred_weapon = "#";
    }
    
    if (data.strength == null || data.strength == ""){
        data.strength = "#";
    }
    if (data.dexterity == null || data.dexterity == ""){
        data.dexterity = "#";
    }
    if (data.constitution == null || data.constitution == ""){
        data.constitution = "#";
    }
    if (data.intelligence == null || data.intelligence == ""){
        data.intelligence = "#";
    }
    if (data.wisdom == null || data.wisdom == ""){
        data.wisdom = "#";
    }
    if (data.charisma == null || data.charisma == ""){
        data.charisma = "#";
    }

    if (data.alignment == null || data.alignment == ""){
        data.alignment = "#";
    }
    if (data.ideals == null || data.ideals == ""){
        data.ideals = "#";
    }
    if (data.flaws == null || data.flaws == ""){
        data.flaws = "#";
    }
    if (data.features_traits == null || data.features_traits == ""){
        data.features_traits = "#";
    }
    if (data.proficiencies_languages == null || data.proficiencies_languages == ""){
        data.proficiencies_languages = "#";
    }
    if (data.background == null || data.background == ""){
        data.background = "#";
    }

    return data;
}

export function testProcessInput(){
    var data: SemiOriginalCharacterDataType = new SemiOriginalCharacterDataType;
    data.name = "Sir TestALot";
    data.race = "Human";
    data.class = "keyboard warrior";
    data.level = "1337";
    data.preferred_weapon = "keyboard";

    data.strength = "11";
    data.dexterity = "12";
    data.constitution = "13";
    data.intelligence = "14";
    data.wisdom = "15";
    data.charisma = "16";

    data.alignment = "True Neutral"; 
    data.ideals = "Likes to make everything works fine!"; 
    data.flaws = "Sometimes can test a bit too much..."; 
    data.features_traits = "Likes to comment the code a lot."; 
    data.proficiencies_languages = "basic Human language, advanced Typescript and advanced Python";

    data.background = "Fell down in a radioactive tank of programmer juice, and immediatly after was assigned a task to do unit testing.";

    return processInput(data)
}