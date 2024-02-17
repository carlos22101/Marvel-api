export class Display{
    #creators=[]

   addcreators(creator){
    this.#creators.push(creator)
   }
   getcreators(){
    return this.#creators
   }


}