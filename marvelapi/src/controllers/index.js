import { Creators } from "../models/creators.js"
import { listcreators } from "./dependences.js"
import { Comics } from "../models/comics.js"
import { Events } from "../models/events.js"
import { Series } from "../models/series.js"
import { Stories } from "../models/Stories.js"

let api=document.getElementById("main-btn")
api.addEventListener("click", function(){
    let url="http://gateway.marvel.com/v1/public/creators?ts=3000&apikey=6144940298ab5ad9f19f0605b91a4454&hash=e9e3e19f35388de6d9e9b05ca0dd0b09"
    fetch(url).then(
        Response=>Response.json()
    ).then(
        data1=>{
            console.log(data1)
            data1.data.results.forEach(element => {
                let creators = new Creators();
                    creators.setId(element.id)
                    creators.setName(element.firstName)

                   element.comics.items.forEach(element2 => {
                    let comics = new Comics();
                    comics.setNames(element2.name)
                    comics.setUri(element2.resourceURI)
                    creators.getComics().push(comics)
                   });
                   
                   element.events.items.forEach(element3 => {
                    let event = new Events();
                    event.setNames(element3.name)
                    event.setUri(element3.resourceURI)
                    creators.getEvents().push(event)
                   });
                   
                   element.series.items.forEach(element4 => {
                    let series = new Series();
                    series.setName(element4.name)
                    series.setUri(element4.resourceURI)
                    creators.getSeries().push(series)
                   });
                   
                   element.stories.items.forEach(element5 => {
                    let stories = new Stories();
                    stories.setName(element5.name)
                    stories.setType(element5.resourceURI)
                    creators.getStories().push(stories)
                   });
                    listcreators.addcreators(creators)
                    console.log(creators)
            
                });
        }
    )
})

const view = document.getElementById("view")
view.addEventListener("click", ()=>{
    const divView = document.getElementById("div-view")
    listcreators.getcreators().forEach(data =>{

        let creator = document.createElement("div")
        divView.appendChild(creator)
        creator.setAttribute("id","cards")

        let creatId = document.createElement("h1")
        creatId.innerText ="ID DE CREADOR "+ data.getId()
        creator.appendChild(creatId)

        let creatname = document.createElement("h2")
        creatname.innerText ="CREADOR "+ data.getName()
        creator.appendChild(creatname)
        data.getComics().forEach(item => {
        let creatcomic = document.createElement("h4")
        creatcomic.innerText = "COMIC "+item.getNames()
        creator.appendChild(creatcomic)
    });
        data.getEvents().forEach(item2 => {
            let createvent = document.createElement("h4")
            createvent.innerText = "EVENT "+item2.getNames()
            creator.appendChild(createvent)
        });
        data.getSeries().forEach(item3 => {
            let creatser = document.createElement("h4")
            creatser.innerText ="SERIE "+ item3.getName()
            creator.appendChild(creatser)
    });
        data.getStories().forEach(item4 => {
            let creatstori = document.createElement("h4")
            creatstori.innerText ="STORIE "+ item4.getName()
            creator.appendChild(creatstori)
        
    });
    }) 
})