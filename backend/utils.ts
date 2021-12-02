import SemiOriginalCharacterDataType from "../middleware/SemiOriginalCharacterDataType";


export function processInput(data: SemiOriginalCharacterDataType){
    var input: string = "input:";

    input += "\nName: " + data.name;
    input += "\nRace: " + data.race;
    input += "\nClass: " + data.class;
    input += "\nLevel: " + data.level;
    input += "\nPreferred Weapon: " + data.preferred_weapon;

    input += "\nStrength: " + data.strength;
    input += "\nDexterity: " + data.dexterity;
    input += "\nConstitution: " + data.constitution;
    input += "\nIntelligence: " + data.intelligence;
    input += "\nWisdom: " + data.wisdom;
    input += "\nCharisma: " + data.charisma;

    input += "\nAlignment: " + data.alignment;
    input += "\nIdeals: " + data.ideals;
    input += "\nFlaws: " + data.flaws;
    input += "\nFeatures & traits: " + data.features_traits;
    input += "\nProficiencies and languages: " + data.proficiencies_languages;
    input += "\nBackground: " + data.background;

    input += "\noutput:"

    return input;
}