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
    newCharacter["name"] = arr[0].split(": ")[1];
    newCharacter["race"] = arr[1].split(": ")[1];
    newCharacter["class"] = arr[2].split(": ")[1];
    newCharacter["level"] = (arr[3].split(": ")[1]);
    newCharacter["preferred_weapon"] = arr[4].split(": ")[1];
    newCharacter["strength"] = (arr[5].split(": ")[1]);
    newCharacter["dexterity"] = (arr[6].split(": ")[1]);
    newCharacter["constitution"] = (arr[7].split(": ")[1]);
    newCharacter["intelligence"] = (arr[8].split(": ")[1]);
    newCharacter["wisdom"] = (arr[9].split(": ")[1])
    newCharacter["charisma"] = (arr[10].split(": ")[1]);
    newCharacter["alignment"] = arr[11].split(": ")[1];
    newCharacter["ideals"] = arr[12].split(": ")[1];
    newCharacter["flaws"] = arr[13].split(": ")[1];
    newCharacter["features_traits"] = arr[14].split(": ")[1];
    newCharacter["proficiencies_languages"] = arr[15].split(": ")[1];
    if (typeof(newCharacter["background"]) !== 'undefined'){
        newCharacter["background"] = arr[16].split(": ")[1];
    } else {
        newCharacter["background"] = "Not enough tokens";
    }

    return newCharacter;
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

function removeNulls(data){
    if (data.level == null){
        data.level = "";
    }
    if (data.strength == null){
        data.strength = "";
    }
    if (data.dexterity == null){
        data.dexterity = "";
    }
    if (data.constitution == null){
        data.constitution = "";
    }
    if (data.intelligence == null){
        data.intelligence = "";
    }
    if (data.wisdom == null){
        data.wisdom = "";
    }
    if (data.wisdom == null){
        data.wisdom = "";
    }
    if (data.charisma == null){
        data.charisma = "";
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