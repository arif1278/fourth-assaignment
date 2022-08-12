/* Start Calculate the total oil price that i have to pay.*/

function oilPrice(diselQuantity, petrolQuantity, octaneQuantity) {
    const perDiselOil = 114;
    const perPetrolOil = 130;
    const perOctaneOil = 135;

    const deselOil = diselQuantity * perDiselOil;
    const petrolOil = petrolQuantity * perPetrolOil;
    const octaneOil = octaneQuantity * perOctaneOil;
    const totalPrice = deselOil + petrolOil + octaneOil;
    return totalPrice;
}
/*------------------End---------------------------------*/

