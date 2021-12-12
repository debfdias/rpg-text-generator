
import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { File } from "./File";
import { FileSelector } from './FileSelector';
const { ccclass, property } = _decorator;
 
@ccclass('FileManager')
export class FileManager extends Component {
    @property(Prefab) filePrefab: Prefab;
    @property(Prefab) fileNamePrefab: Prefab;
    @property(Node) fileRoot: Node;
    @property(Node) fileNameRoot: Node;

    activeFile : FileSelector = null;

    start () {
    }

    public OnNewFileButton() {
        var fileInstance: Node = instantiate(this.filePrefab);
        fileInstance.parent = this.fileRoot;
        var fileScript = fileInstance.getComponent(File);

        var fileNameInstance : Node = instantiate(this.fileNamePrefab);
        var fileNameScript : FileSelector = fileNameInstance.getComponent(FileSelector);
        this.fileNameRoot.insertChild(fileNameInstance, this.fileNameRoot.children.length - 1);
    
        fileNameScript.Init(this.OnSelectedFile.bind(this), fileScript);
        this.OnSelectedFile(fileNameScript);
    }

    OnSelectedFile(selectedFile: FileSelector) {
        if(this.activeFile != null) {
            this.activeFile.Diselect();
        }
        selectedFile.Select();
        this.activeFile = selectedFile;
    }
}