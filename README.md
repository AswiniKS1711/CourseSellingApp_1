# Created a course selling app

### Description

I have implemented a course selling app. It supports two types of users :

1. Admins

2. Users

Admins are allowed to sign up, create courses and view courses.

Users are allowed to sign up, view all the courses, purchase courses, and view all the purchased courses.

This, in the real world, would translate to an app like Udemy.

Here, as of now, I have used username and password for authentication. I haven't used JWT for authentication. Therefore, I haven't implemented a sign-in route, because the role of JWT is send us back a token for logging in.

So, to store all the data persistently, I have used MongoDb.

# Routes

### Admin Routes

- POST /admin/signup

  Description: Creates a new admin account

  Input Body: { 'username':'admin', 'password':'pass' }

  Output: { message:'Admin created successfully' }

- POST /admin/courses

  Description: Creates a new course

  Input Body: Headers: { 'username':'username', 'password':'password' },

  Body : { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com'}

  Output: { message:'Course created successfully', courseId: "new course id }

- GET /admin/courses

  Description: Returns all the courses

  Input Body: Headers: { 'username':'username', 'password':'password' }

  Output: { courses: [ {
  id: 1,
  title: 'course title',
  description: 'course description',
  price: 100,
  imageLink: 'https://linktoimage.com',
  published: true},
  ... ] }

### User routes

- POST /users/signup

  Description: Creates a new user account.

  Input: { 'username': 'user', 'password': 'pass' }

  Output: { message: 'User created successfully' }

- GET /users/courses

  Description: Lists all the courses.

  Input: Headers: { 'username': 'username', 'password': 'password' }

  Output: { courses: [ {
  id: 1,
  title: 'course title',
  description: 'course description',
  price: 100,
  imageLink: 'https://linktoimage.com',
  published: true },
  ... ] }

- POST /users/courses/:courseId

  Description: To purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.

  Input: Headers: { 'username': 'username ', 'password': 'password' }

  Output: { message: 'Course purchased successfully' }

- GET /users/purchasedCourses

  Description: Lists all the courses purchased by the user.

  Input: Headers: { 'username': 'username', 'password': 'password' }

  Output: { purchasedCourses: [ {
  id: 1,
  title: 'course title',
  description: 'course description',
  price: 100,
  imageLink: 'https://linktoimage.com',
  published: true },
  ... ] }

## Concepts I have learned after doing this project

1. Express JS
2. Middleware in Node JS
3. Defining routes
4. Use of async and await keywords
5. Promises in JS
6. Exporting and importing modules in JS
7. Got familiarity with MongoDB
8. Got familiarity with Postman, since we are sending requests using Postman
