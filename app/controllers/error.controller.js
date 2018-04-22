const getMongoDBErrorMessage = (error) => {
    if (!error.code) {
        console.log("Can't find MongoDB error message");
        return "Internal Server Error" + error;
    }

    switch(error.code) {
        case 11000:
        case 11001:
            return "Please use other one";
        default:
            return "Internal Server Error: " + error.code;
    }
};