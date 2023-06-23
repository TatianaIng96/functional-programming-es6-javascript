const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

let array1 = arr.map(function(element){
    return element*2;
});

console.log(array1);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

let array2 = arr.filter(function(element){
    return element % 2 === 0;
});

console.log(array2);
// utilizar el método reduce para sumar todos los elementos
// 21

let total = arr.reduce(function(total,item){
    return total + item;
})

console.log(total);