TechBlogAPI


A blog API that allows user to register with Authorization Schema. User receives a Token at the header, with the token the user can access Public blogs and create a blog with a username at the endpoint. User can also find blog and can adjust/delete blog with id.
The API protects API with a hashed password. Usernames/Emails must also be unique during the registration process. Website:

Tech Stack
Server: Node, Express

Database: MongoDB

Tools: Postman

Environment Variables
To run this project, you will need to add the following environment variables to your .env file

MONGODB_URI
JWT_SECRET
SALT
Run Locally
To clone the project, you must follow all steps and have all dependencies in order to run the project locally.

Git clone - (https://github.com/Meeks71/blogapi)

Go to the DOCUMENTS directory

cd blogapi

Install dependencies
npm init -y

npm i:

-bcrypt
-dotenv
-express
-helmet
-jsonwebtoken
-mongoose
-morgan

Routes
- Endpoints, Parameters, Schema
server -app.get('/') returns message "WELCOME TO MY BLOG API!!"

Routes
Auth('/auth') creates Users and Login
Router.post('/register'): Register Users, AuthSchema is used. password is hashed

Router.post('/login'): Login with username and password only. Token is sent to header for further acess

userRouter.get('/'): base endpoint Finds all users. Protected with token sent to header No parameters

Blog('/blog')
router.get('/'): all Public blogs are included, must be logged in and have a token

router.post('/username/:username'): Creates Blog with blogSchema, username parameter(String) name is needed to post blog

router.put('/id/:id'): Updates blog with id, parameter(String) id is needed to update blog

router.get('/id/:id'): Returns blog associcated to id, parameter(String) id is required to find blog. onlyprivate blogs appear

router.delete('/id/:id): Deletes blog associated with id, need a token for Authorization and parameter(string) id is required to delete blog



Schemas
userSchema:
username:
    type: String,
    required: true

email: 
    type: String,
    required: true
  
birthday: 
    type: Date,
    required: true
        
age: 
    type: Number,
    required: true
        
   
password: 
    type: String, 
    required: true 



blogSchema:

username: 
type: String 
required: true,

password:
type: String, 
required: true,

email:
type: String, 
required: true,

birthday: 
type: Number, 
required: true,

age: type: Number


Middleware
verifyToken: gets token from header and check that it matches token sent.

CreateBlog: uses login function to verify user is logged to aceess and post blogs. userame and password required, if passwords or username do not match 400 error will be sent

