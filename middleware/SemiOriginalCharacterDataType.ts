///ESSE ARQUIVO DEVE SER SEMPRE IGUAL AOS DENTRO DE:
///1 - middleware/SemiOriginalCharacterDataType.ts
///2 - frontend/src/SemiOriginalCharacterDataType.ts

export default class SemiOriginalCharacterDataType {
    maxTokens: number = 0;
    temp: number = 0;
    freqPenalty: number = 0;

    name: string = "";
    race: string = "";
    class: string = "";
    level: string = "";
    preferred_weapon: string = "";

    strength: string = "";
    dexterity: string = "";
    constitution: string = "";
    intelligence: string = "";
    wisdom: string = "";
    charisma: string = "";

    alignment: string = ""; 
    ideals: string = ""; 
    flaws: string = ""; 
    features_traits: string = ""; 
    proficiencies_languages: string = "";

    background: string = "";
}