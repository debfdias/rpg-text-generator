
import { _decorator, Component, Label, Sprite, Color, RichText } from 'cc';
import { File } from './File';
const { ccclass, property } = _decorator;
 
@ccclass('FileSelector')
export class FileSelector extends Component {
    @property(RichText) characterName : RichText = null;
    @property(Sprite) background : Sprite = null;

    file: File;
    active: boolean = false;

    onClickCallback: (fileSelector: FileSelector) => void = null;

    public Init(onClickCallback: (fileSelector: FileSelector) => void, file: File) {
        this.onClickCallback = onClickCallback;
        this.file = file;
    }

    public Select() {
        this.background.color = new Color(60, 60, 60, 255);
        this.active = true;
        this.file.node.active = true;
    }

    public Diselect() {
        this.background.color = Color.WHITE;
        this.active = false;
        this.file.node.active = false;
    }

    public OnClick() {
        this.onClickCallback(this);
    }

    update() {
        var name = "NEW";
        if(this.file.characterName.string != "") name = this.file.characterName.string;

        if(this.active) this.characterName.string = "<color=WHITE>"+name+"</color>";
        else this.characterName.string = "<color=BLACK>"+name+"</color>" 
    }
}