function cutFruitPieces(fruit){
    return fruit * 10;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `${applePieces} and ${orangePieces}`;
    return juice;
}
console.log(fruitProcessor(2,3));