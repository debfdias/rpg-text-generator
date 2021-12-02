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
    level: number = 0;
    preferred_weapon: string = "";

    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;

    alignment: string = ""; 
    ideals: string = ""; 
    flaws: string = ""; 
    features_traits: string = ""; 
    proficiencies_languages: string = "";

    background: string = "";
}