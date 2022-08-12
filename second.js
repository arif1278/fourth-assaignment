/* Start Check whether the given file name is a javaScript file or not*/


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

/*-----------------------End---------------------------*/