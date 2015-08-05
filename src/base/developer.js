class Developer{
    
    constructor(name){
        this.name = name;
        this.is_intern = false;
    }

    make_cofee(){
        return this.is_intern;
    }
    
    say(sentence){
        return `#${this.name}: ${sentence}`;
    }

    toString(){
        return `I'm ${name} `;
    }
}

export default Developer