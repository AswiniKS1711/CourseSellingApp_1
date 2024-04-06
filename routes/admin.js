const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const router = Router()
const { Admin, Course, User } = require('../db')


//Admin Routes
router.post('/signup', function(req, res){
    //Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a username with this username already exist
    Admin.create({
        username: username,
        password: password
    })
    
    res.json({
        message: "Admin created successfully !"
    })

});

router.post('/courses', adminMiddleware, async function(req, res){
    //Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    //Ideally we should have used zod library for input validation in real world

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: "Course created successfully !",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async function(req, res){
    //Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

// router.get('/allusers', async function(req,res){

//     const response = await User.find({});

//     res.json({
//         users : response
//     })

// });

module.exports = router;