export class Comics{
    #name
    #uri
    constructor(){}

    setNames(name){
        this.#name = name
    }

    getNames(){
        return this.#name
    }


    setUri(uri){
        this.#uri = uri
    }
    getUri(){
        return this.#uri
    }
}