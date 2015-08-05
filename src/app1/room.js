import Tibo from "app1/tibo.js";
import Developer from "base/developer.js";

class Room {

    constructor($room, developer){
        this.tibo = new Tibo("Tibo (grumpy)");
        this.developer = new Developer(developer.name);
        this.$room = $room;
        this.$developer_field = developer.field;
        this.$developer_field.onkeydown = this.onKeyDownDeveloperBtn.bind(this);
        this.$developer_btn = developer.btn;
        this.$developer_btn.onclick = this.onSubmitDeveloperField.bind(this);
    }

    addSentence(sentence){
        this.$room.value += `\n ${sentence}`;
    }

    tiboAnswer(){
        var sentence = this.tibo.say("");
        this.addSentence(sentence);
    }

    onKeyDownDeveloperBtn(event){
        if(event.keyCode == 13){
            this.onSubmitDeveloperField();
        }
    }
    onSubmitDeveloperField(){
        var field_value = this.$developer_field.value;
        var sentence = this.developer.say(field_value);
        this.addSentence(sentence);
        this.$developer_field.value = "";
        this.tiboAnswer();
    }
}

export default Room;