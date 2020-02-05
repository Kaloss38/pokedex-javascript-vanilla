import retrieveContent from './query.js';
import Pokedex from './Pokedex.js';

async function getContent() {
  try {

    let pokemons = [];

    let count = 1;

    let loader = document.getElementById('loader');
    loader.style.display = "";

    while(count <= 807){
      const content = await retrieveContent(count);
      pokemons.push({
        id: content.id,
        sprite: content.sprites.front_default, 
        name: content.name,
        types: content.types.map(type => type.type.name)
      });
      count++;
    }

    displayContent(pokemons);
    loader.style.display = "none";
    

    } catch (e) {
    console.log('Error', e);
  }
}

getContent();

let input = document.getElementById("myInput");

input.addEventListener("keyup", e => {
  let filter, article, p, txtValue;
  filter = input.value.toLowerCase();
  article = document.getElementsByTagName('article');
  
  for(let i = 0; i < article.length; i++) {
    p = article[i].getElementsByTagName("p")[0];
    txtValue = p.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
  
});


function displayContent(arr){
  const mainDiv = document.getElementById('main');
  for(let i = 0; i < arr.length; i++){
    let createArticle = document.createElement('article');
    createArticle.id = arr[i].name;
    mainDiv.appendChild(createArticle);
    
    let spanId = document.createElement('span');
    spanId.setAttribute("class", "pokemon-id");
    spanId.innerHTML = arr[i].id + ".";
    createArticle.appendChild(spanId);

    let spanImg = document.createElement('span');
    spanImg.setAttribute("class", "pokemon-sprite");
    let sprite = document.createElement('img');
    sprite.setAttribute("src", arr[i].sprite);
    spanImg.appendChild(sprite);
    createArticle.appendChild(spanImg);

    let spanName = document.createElement('span');
    spanName.setAttribute("class", "pokemon-name");
    let p = document.createElement('p');
    p.textContent = arr[i].name;
    spanName.appendChild(p);
    createArticle.appendChild(spanName);
  }
}

