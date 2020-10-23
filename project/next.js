let next = document.querySelector('.next')
let nazad = document.querySelector('.nazad')
let charName = document.querySelector('.items_post');


async function getResponse(i) {
    let response = await fetch(`https://swapi.dev/api/people/?page=${i}`)
    let content = await response.json()
    console.log(content.results);
    let list = document.querySelector('.char');
    let key;
    content.results.forEach(element => {
        console.log(element)
        return (
            list.innerHTML += `<div class = "items_post" > ${element.name}</div>`
        )
    });
}





getResponse(prompt('выберите раздел', 0));