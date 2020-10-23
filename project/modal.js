let modal = document.getElementById('mymodal');
let btn = document.querySelector('.items_post');
let closeApp = document.getElementsByClassName('close_modal_window')[0];


btn.onclick = function() {
    modal.style.display = "block";
}

closeApp.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }

}