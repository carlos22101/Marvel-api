export class Series{
    #name 
    #uri 
    constructor(){}

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }

    setUri(uri){
        this.#uri = uri
    }
     getUri(){
        return this.#uri
     }
}