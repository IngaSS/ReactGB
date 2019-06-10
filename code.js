//Задача номер 1

function loop(times = 0, callback = null) {
        for (let i = 0; i < times; i++) {
            callback()
        }
    return a;
};
let a = 0;
console.log(loop(5, function increm() { return a++ }));

// задача номер 2

function calculateArea(figure, a, b) {
    let area;
    let [, ...input] = arguments;
    area = a * b;

    return {figure, area, input}
}

console.log(calculateArea('square', 2, 4));

