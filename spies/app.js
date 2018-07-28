var db = require('./db')
module.exports.handleSignup = (email , password) => {
    //check if user already exist
    db.saveUser({ email , password });
    // save the user  tp db
    
    //send welcome msg
} 