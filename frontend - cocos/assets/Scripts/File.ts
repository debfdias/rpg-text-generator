
import { _decorator, Component, Node, EditBox } from 'cc';
import SemiOriginalCharacterDataType from "../../../middleware/SemiOriginalCharacterDataType"
import CommunicationManager from './CommunicationManager';
const { ccclass, property } = _decorator;
 
@ccclass('File')
export class File extends Component {
    @property(Node) waitingNode: Node = null;

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

    communication : CommunicationManager = null;

    start() {
        this.waitingNode.active = false;
        this.communication = new CommunicationManager();
    }

    public onCompleteFileButton() {
        this.waitingNode.active = true;
        this.communication.getSemiOriginalCharacter(this.getFileContent()).then(completedCharacter => {
            console.log(completedCharacter);
            this.waitingNode.active = false;
        })
    }

    public getFileContent() : SemiOriginalCharacterDataType {
        return {
            maxTokens: 500,
            temp: 0.7,
            freqPenalty: 0.3,
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

    public setFileContent(content: SemiOriginalCharacterDataType)
    {
        this.characterName.string = content.name;
        this.race.string = content.race;
        this.class.string = content.class;
        this.level.string = content.level.toString();
        this.weapon.string = content.preferred_weapon;
        this.str.string = content.strength.toString();
        this.dex.string = content.dexterity.toString();
        this.con.string = content.constitution.toString();
        this.int.string = content.intelligence.toString();
        this.wis.string = content.wisdom.toString();
        this.cha.string = content.charisma.toString();
        this.alignment.string = content.alignment;
        this.ideals.string = content.ideals;
        this.flaws.string = content.flaws;
        this.features.string = content.features_traits;
        this.proficiencies.string = content.proficiencies_languages;
        this.history.string = content.background;
    }
}