function numbersPar() {
    let num = 0;
    var x = 0;
    while (x <= 100) {
        if (num % 2 == 0) {
            console.log(num);
        }
        x++;
        num++
    }
    console.log();
}

function arraySoma() {
    const numbers = [2, 4, 6, 8];
    var x = 0;
    let soma = 0;
    while (x <= 3) {
        soma = soma + numbers[x];
        x++
    }
    console.log(soma);
    console.log();
}

function arrayPositivo() {
    const array = [-1, 1, 2, -2, -3, 3];
    const arrayFiltrado = [];
    var x = 0;
    while (x <= array.length) {
        if (array[x] >= 0) {
            arrayFiltrado[x] = array[x];
            console.log(arrayFiltrado[x]);
        }
        x++;
    }
    console.log();
}

function arrayMultiDois() {
    const array = [1, 2, 3, 4, 5];
    const arrayMultiploDois = [];
    var x = 0;
    while (x <= array.length - 1) {
        arrayMultiploDois.push(array[x] * 2);
        console.log(arrayMultiploDois);
        x++;
    }
    console.log();
}

numbersPar();
arraySoma();
arrayPositivo();
arrayMultiDois();