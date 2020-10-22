function fff() {

    let name = prompt('введите имя', '');
    let nameOne = name.slice(1, 1000);
    let nameTwo = name.slice(0, 1);
    nameTwo = nameTwo.toUpperCase();
    alert(nameTwo + nameOne);

}
fff();