const { User } = require('../db');

//Midleware for handling authentication
function userMiddleware(req, res, next)
{
    //Implement admin authentication
    //You need to check the headers and validate the admin from the admin database
    //Check readme for the exact headers to be expected

    const username = req.headers.username; //eg. harkirat@gmail.com
    const password = req.headers.password; //eg. 123456

    //check if the admin exists in the database with the given username and password
    User.findOne({
        username: username, //if username == harkirat@gmail.com
        password: password  //and password == 123456
    })
     .then(function(value){  
        if(value)   //if the value is present in the database, then call the next() and move the control to the purchased courses function
        {
            next();
        }
        else
        {
            res.status(403).json({
                msg: "User doesnt exist !"
            })
        }
    })
} 

module.exports = userMiddleware;