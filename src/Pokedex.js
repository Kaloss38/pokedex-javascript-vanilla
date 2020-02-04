import retrieveContent from './query.js';

export default class Pokedex{
    
    constructor(){
        this.mainDiv = document.getElementById('main');;
    }

    displayContent(arr){
        for(let i = 0; i < arr.length; i++){
            let createArticle = document.createElement('article');
            createArticle.id = arr[i].name;
            this.mainDiv.appendChild(createArticle);
            this.createSpanId();
            this.createSpanImg();
            this.createSpanName()
        }    
        
    }

    createSpanId(){
        let spanId = document.createElement('span');
        spanId.setAttribute("class", "pokemon-id");
        spanId.innerHTML = arr[i].id + ".";
        createArticle.appendChild(spanId);
    }

    createSpanImg(){
        let spanImg = document.createElement('span');
        spanImg.setAttribute("class", "pokemon-sprite");
        let sprite = document.createElement('img');
        sprite.setAttribute("src", arr[i].sprite);
        spanImg.appendChild(sprite);
        createArticle.appendChild(spanImg);
    }

    createSpanName(){
        let spanName = document.createElement('span');
        spanName.setAttribute("class", "pokemon-name");
        let p = document.createElement('p');
        p.textContent = arr[i].name;
        spanName.appendChild(p);
        createArticle.appendChild(spanName);
    }

}