let next = document.querySelector('.next')
let nazad = document.querySelector('.nazad')
let charName = document.querySelector('.items_post');

const test = () => {

    modal.style.display = "block";
}
async function getResponse(i) {
    let response = await fetch(`https://swapi.dev/api/people/?page=${i}`)
    let content = await response.json()
    console.log(content.results);
    let list = document.querySelector('.char');
    let listModal = document.querySelector('.modal_content');
    let key;
    content.results.forEach((element, idx) => {
        console.log(element)
        return (
            list.innerHTML += `<div class = "items_post${idx}" onClick="test()"> ${element.name}</div>`,
            listModal.innerHTML += `<div class="modal_user">Вес: ${element.height}</div>`

        )
    });
}





getResponse(prompt('выберите раздел', 0));


next.addEventListener("click", function() {
    document.querySelector('.char').innerHTML = ''; // удалили DIV
    document.querySelector('.modal_content').innerHTML = ''; // удалили DIV
    getResponse(prompt('выберите раздел', 0));

});


// nazad.addEventListener("click", function() {

// });