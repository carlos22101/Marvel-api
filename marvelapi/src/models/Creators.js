export class Creators{
#Name
#id
#comics = []
#events = []
#Series = []
#Stories =[]

constructor(){}

setId(id){
    this.#id=id;
}

getId(){
    return this.#id;
}

setName(Name){
    this.#Name=Name;
}
getName(){
    return this.#Name
}
 setComics(comics){
    this.#comics = comics
 }
 getComics(){
    return this.#comics
 }
 setEvents(events){
    this.#events = events
 }
 getEvents(){
    return this.#events
 }
 setSeries(Series){
    this.#Series = Series
 }
 getSeries(){
    return this.#Series
 }

 setStories(Stories){
    this.#Stories = Stories
 }
 getStories(){
    return this.#Stories
 }
}