const validateFieldTitle = (request, response, next) => {
    const { body } = request; 

    if (body.title === undefined) {
        response.status(400).json({message: 'the field "title" is required'});
    }
    if (body.title === '') {
        response.status(400).json({message: '"title" cannot be empty'});
    }

    next();
};

const validateFieldStatus = (request, response, next) => {
    const { body } = request; 

    if (body.status === undefined) {
        response.status(400).json({message: 'the field "status" is required'});
    }
    if (body.status === '') {
        response.status(400).json({message: '"status" cannot be empty'});
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
}