/* --------------Start reserved bus ----->50
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

/*---------------------------End------------------------------*/