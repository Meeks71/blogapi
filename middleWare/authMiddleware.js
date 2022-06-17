const jwt= require('jsonwebtoken')

module.exports = (req,res,next) => {
    //get the token from the headers objects
    const token = req.header('x-auth-token')
    //If no token

    if(!token) {
        return res.json('No Token, access is denied!')
    }
     //If we have a token
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded);

        next()
    } catch (error) {
        console.log(error);
       res.status(400).json('Token not valid') 
    }
}