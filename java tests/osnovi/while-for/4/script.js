let n = prompt('введите число', 0);


tag1:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue tag1;
        }

        alert(i);
    }