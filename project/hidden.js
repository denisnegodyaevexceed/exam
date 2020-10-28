let modal = document.getElementById('mymodal');
let btn = document.querySelector('.char')
let closeApp = document.querySelector('.close');
let closeAppP = document.querySelector('.items_post');


closeApp.onclick = function() {
    modal.style.display = "none";
    document.querySelector('.modal_content').innerHTML = '';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.querySelector('.modal_content').innerHTML = '';
    }

}