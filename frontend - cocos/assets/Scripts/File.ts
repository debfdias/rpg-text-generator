
import { _decorator, Component, Node, EditBox } from 'cc';
import SemiOriginalCharacterDataType from "../../../middleware/SemiOriginalCharacterDataType"
const { ccclass, property } = _decorator;
 
@ccclass('File')
export class File extends Component {
    @property(EditBox) characterName: EditBox = null;
    @property(EditBox) history: EditBox = null;

    @property(EditBox) str: EditBox = null;
    @property(EditBox) dex: EditBox = null;
    @property(EditBox) con: EditBox = null;
    @property(EditBox) int: EditBox = null;
    @property(EditBox) wis: EditBox = null;
    @property(EditBox) cha: EditBox = null;

    @property(EditBox) race: EditBox = null;
    @property(EditBox) class: EditBox = null;
    @property(EditBox) level: EditBox = null;
    @property(EditBox) weapon: EditBox = null;

    @property(EditBox) alignment: EditBox = null;
    
    @property(EditBox) ideals: EditBox = null;
    @property(EditBox) flaws: EditBox = null;
    @property(EditBox) features: EditBox = null;
    @property(EditBox) proficiencies: EditBox = null;

    public getFileContent() : SemiOriginalCharacterDataType {
        return {
            maxTokens: 0,
            temp: 0,
            freqPenalty: 0,
            name: this.characterName.string,
            race: this.race.string,
            class: this.class.string,
            level: Number.parseInt(this.level.string),
            preferred_weapon: this.weapon.string,
            strength: Number.parseInt(this.str.string),
            dexterity: Number.parseInt(this.dex.string),
            constitution: Number.parseInt(this.con.string),
            intelligence: Number.parseInt(this.int.string),
            wisdom: Number.parseInt(this.wis.string),
            charisma: Number.parseInt(this.cha.string),
            alignment: this.alignment.string,
            ideals: this.ideals.string,
            flaws: this.flaws.string,
            features_traits: this.features.string,
            proficiencies_languages: this.proficiencies.string,
            background: this.history.string
        }
    }
}