import Developer from "base/developer.js";

class Tibo extends Developer {

    constructor(name) {
        super(name);
        this.is_intern = true;
        this.said_id = [];
    }

    get bullshit() {
        return [
            "Encore des wesh wesh avec leurs skates",
            "J'aime pas le soleil, c'est chaud.",
            "On lui a parlé à lui?", "Nique ta maman",
            "Marie-Cyril!!!!",
            "J'aime les enfants.",
            "J'ai passé mon week end dans une cave."];
    }

    addSaidId(_id) {
        this.said_id.push(_id);
        if(this.said_id.length === this.bullshit.length){
            this.said_id = [];
        }
    }

    getRandomBullshit() {
        var random_id = -1;
        do {
            random_id = parseInt(Math.random() * this.bullshit.length);
        } while(this.said_id.indexOf(random_id) > -1);

        this.addSaidId(random_id);

        return this.bullshit[random_id];
    }

    answerTo(sentence){
        if (sentence.indexOf("windows") > -1) {
            sentence = "C'est de la merde";
        }else{
            sentence = "";
        }
        return this.say(sentence);
    }
    say(sentence = "") {
        if (!sentence) {
            sentence = this.getRandomBullshit();
        }
        return super.say(sentence);
    }
}

export default Tibo;