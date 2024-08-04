const { check } = require('express-validator');

exports.signUpValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmpty(),
    check('password', 'Password should contain at least one number and one letter').matches(/^(?=.*[a-z])(?=.*\d).+$/),
    check('password', 'Password should contain at least 8 characters').isLength({ min: 8 }),
    //the password must contain at least one uppercase letter,one lower case letter and a number
    check("password").matches(/(?=.*[0-9])(?=.*[!@#$%^&*])/, "i"),
    (req, res) => {
        const errors = req.validationErrors();]