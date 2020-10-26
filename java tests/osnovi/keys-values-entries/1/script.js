let sum = 0;


function sumSalaries(salaries) {
    for (let key of Object.values(salaries)) {
        sum += key
    }
    return sum;
}



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650