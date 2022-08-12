/*Number:1. Start convert radian to degree*/


function radianToDegree(radian) {
    if (typeof (radian) == 'number') {
        let degree = radian * (180 / Math.PI);
        const fixedDecimal2 = degree.toFixed(2);
        const degreeResult = parseFloat(fixedDecimal2);
        return degreeResult;
    }
    else if (typeof (radian) == 'string') {
        const errorMassageOne = "Warning:Radian anglecant be string.Please enter a valid number";
        return errorMassageOne;
    }
    else if (typeof (radian) == 'boolean') {
        const errorMassageTwo = "Warning:Radian anglecant be boolean.Please enter a valid number";
        return errorMassageTwo;
    }
}

const myradian = true;
const myRadian = radianToDegree(myradian);
console.log(myRadian);

/*-------------------------End------------------------------*/




// /* Number:2.  Start Check whether the given file name is a javaScript file or not*/


function isJavaScriptFile(file) {
    if (typeof (file) == 'string') {
        const fileName = file.toLowerCase();
        const fileType = fileName.endsWith('.js')
        return fileType;

    }
    else {
        const errorMassage = "Please enter a single valid file name";
        return errorMassage;
    }
}

const myFile = ('Amar.Js');
const myFileName = isJavaScriptFile(myFile);
console.log(myFileName);

/*-----------------------End---------------------------*/


// /*Number:3.  Start Calculate the total oil price that i have to pay.*/

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

const myoil = oilPrice(1, 1, 1);
console.log(myoil);

/*------------------End---------------------------------*/


/*Number:4. -----------Start reserved bus ----->50
-------------------microbus------>11--------
rest people will go by public bus----------*/


function publicBusFare(passengerNumber) {
    if ((typeof (passengerNumber) == 'number') && (passengerNumber >= 0)) {
        const privatBusTicket = 250;
        let restPassangerAfterPrivateBus = passengerNumber % 50;
        let restPassangerAfterMicroBus = restPassangerAfterPrivateBus % 11;
        const publicBusTraveller = restPassangerAfterMicroBus;
        const totalFareForPublicBus = privatBusTicket * publicBusTraveller;
        return totalFareForPublicBus;
    }
    else {
        const errorMassage = "Please entera valid passenger number";
        return errorMassage;
    }
}

const mypassanger = 123;
const myPassanger = publicBusFare(mypassanger);
console.log(myPassanger);

/*---------------------------End------------------------------*/



// /* Number: 5.------------------ Start best friend--------------------*/


function isBestFriend(friend1, friend2) {
    if ((Array.isArray(friend1) === true) || (Array.isArray(friend2) === true)) {
        const errorMassageOne = "Warning:Please dont Give any arry.Just input Two object only";
        return errorMassageOne;
    }
    else if ((Object.hasOwn(friend1, 'name') !== true) || (Object.hasOwn(friend1, 'friend') !== true) ||
        (Object.hasOwn(friend2, 'name') !== true) || (Object.hasOwn(friend2, 'friend') !== true)) {
        const errorMassageTwo = "Warning:All keys doesnt exit or case-sensetive issue.Please check your keys name and try again.";
        return errorMassageTwo;
    }
    else if ((typeof (friend1) == 'object') && (typeof (friend2 == 'object'))) {
        if ((typeof (friend1.name) !== 'string') || (typeof (friend1.friend) !== 'string') || (typeof (friend2.name)
            !== 'string') || (typeof (friend2.friend) !== 'string')) {
            const errorMassagethree = "Warning: 'name'and'friend' property can't create with number or boolean or undifind etc,";
            return errorMassagethree;
        }
        else if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
            return true;
        }
        else {
            return false
        }
    }


}

const friend1 = {
    name: 'tom', friend: 'rock'
}
const friend2 = {
    name: 'rock', friend: 'tom'
}
const result = isBestFriend(friend1, friend2);
console.log(result);


// /*---------------------End--------------------*/