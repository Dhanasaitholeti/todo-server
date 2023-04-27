const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const token = req.headers.authorization.split(' ')[1];
            
            const decoded = jwt.verify(token,"This_is_a_secret");
            
            req.user = decoded.id;

            next();

        } catch (error) {
            console.log(error)
            res.status(400).json({"message":"session expired"})
        }       
    }
    else{
        res.status(404).json({"message":"Please try to login"});
    }
}


module.exports = authMiddleware