/*------------------ Start best friend--------------------*/


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


/*---------------------End--------------------*/



















