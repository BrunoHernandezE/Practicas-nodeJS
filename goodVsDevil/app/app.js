const winnerSpected = (sideOfGood, sideOfEvil) => {

    // Definimos la funcion para obtener el total de las tropas de cada equipo mas adelante
    const add = (accumulator, curr) => accumulator + curr;

    // Hacemos un arreglo con el string de tropas totales de cada equipo 
    let totalGood = sideOfGood.split(" ");
    let totalEvil = sideOfEvil.split(" ");

    // Convertimos cada elemento del arreglo string => int
    totalGood = totalGood.map((x) => {return parseInt(x)});
    totalEvil = totalEvil.map((x) => {return parseInt(x)});

    // Sumamos las tropas de cada equipo utilizando la funcion antes definida, add()
    totalGood = totalGood.reduce(add);
    totalEvil = totalEvil.reduce(add);

    // Retornamos un enunciado dependiendo del resultado del ganador
    let result = totalGood > totalEvil ? "Battle Result: Good triumphs over Evil": totalGood < totalEvil ? "Battle Result: Evil eradicates all trace of Good": "Battle Result: No victor on this battle field"

    return result
}

// Exportamos el modulo
module.exports = winnerSpected;