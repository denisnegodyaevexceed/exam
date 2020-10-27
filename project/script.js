let next = document.querySelector('.next')
let nazad = document.querySelector('.nazad')
let charName = document.querySelector('.items_post');
let j = 0;

const test = async() => {
    let listModal = document.querySelector('.modal_content');
    const id = event.target.id
    console.log(id)
    const people = await fetch(`https://swapi.dev/api/people/?search=${id}`)
    const normPeople = await people.json()
    const { results } = normPeople
    console.log(results[0].height)
    listModal.innerHTML += `
    <div class="img_hero">
        <img class="hero" src="img/${id}.jpg" alt=""> 
    </div>
        <div class="hero_info">
        
                                <div class="modal_name">Имя: ${results[0].name}</div>
                                <div class="modal_birth_year">Дата рождения: ${results[0].birth_year}</div>
                                <div class="modal_height">Рост: ${results[0].height}</div>
                                <div class="modal_mass">Вес: ${results[0].mass}</div>
                                <div class="modal_eye_color">Цвет глаз: ${results[0].eye_color}</div>                    
        </div>                        
                            `
    modal.style.display = "block";
}
async function getResponse(i) {

    let response = await fetch(`${i}`)
    let content = await response.json()
    console.log(content.next);
    let list = document.querySelector('.char');


    content.results.forEach((element, idx) => {
        console.log(element)
        return (

            list.innerHTML += `<div class = box_image>
            <img class="hero2" src="img/${element.name}.jpg" alt="" onClick="test()" id='${element.name}'> 
            <div class="text_user">                 
            <div class = "items_post${idx}" id='${element.name}' onClick="test()">${element.name} </div>
            </div>  
                                </div>
            `


        )
    });


}
next.addEventListener("click", function() {

    if (j >= 9) {
        document.querySelector('.next').innerHTML = ''; // удалили DIV
    } else {

        j = j + 1;
        console.log(j);

        getResponse(`http://swapi.dev/api/people/?page=${j}`);
    }

});

// nazad.addEventListener("click", function() {
//     document.querySelector('.char').innerHTML = ''; // удалили DIV
//     if (j <= 1) {
//         getResponse(`http://swapi.dev/api/people/?page=${1}`);
//     } else {

//         j = j - 1;
//         console.log(j);

//         getResponse(`http://swapi.dev/api/people/?page=${j}`);
//     }

// });






// nazad.addEventListener("click", function() {

// });