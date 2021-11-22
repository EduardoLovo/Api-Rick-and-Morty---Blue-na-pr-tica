
const urlApi = 'https://rickandmortyapi.com/api/character/'
const listEl = document.getElementById('list');

let nextUrl = '';
let prevUrl = '';

const getCharacters = async(url, name = '') => {
    if(name !== '') {
        var response = await fetch(`${url}?name=${name}`)
    } else {
        var response = await fetch(url)
    }

  
    const data = await response.json();

    nextUrl = data.info.next;
    prevurl = data. info.prev;

    const characters = data.results;

    render(characters);

    console.log(characters);
        
    };

const searchCharacters = (evento) => {
    evento.preventDefault();
    const text = document.querySelector("input").value;
    getCharacters(urlApi, text)
}

const render = (characters) => {
    listEl.innerHTML = ''
    characters.map((character) => {
        console.log(character.name);
        listEl.insertAdjacentHTML('beforeend', `
        <div class="card">

            <div class="card-header">
                <p class="card-title">${character.name}</p>
            </div>

            <div class="card-img">
                <img src="${character.image}" alt="${characters.name}"/>
            </div>

            <div class="card-body">
                <p><b>Genger:</b> ${character.gender}</p>
                <p><b>Sspecies:</b> ${character.species}</p>
                <p><b>Origin:</b> ${character.origin.name}</p>
            </div>
            
        </div>
        `)
    })
}

const nextPage = () => {
    getCharacters(nextUrl);
}

const prevPage = () => {
    getCharacters(prevUrl);
}

getCharacters(urlApi)