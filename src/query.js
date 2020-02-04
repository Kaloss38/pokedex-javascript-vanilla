export default async function retrieveContent(id) {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    const response = await fetch(url);

    return response.json();
  }
  