const bcrypt = require('bcryptjs');
const userModel = require('../models/users');
const tokenGenerator = require('../controllers/tokenGenerator')

const userLogin = async (req,res) => {
    const {userEmail,password} = req.body;
    try {
        const userEmaildata = await userModel.findOne({ Email: userEmail})
        if(!userEmaildata){
            res.status(400).json({message: 'please try to register first'});
        }
        else if(userEmaildata){
            const passwordcheck = await bcrypt.compare(password, userEmaildata.password)

            if(!passwordcheck){
                res.status(400).json({message:"check the password"});
            }
            else{
                const token = await tokenGenerator({
                    id: userEmaildata._id,
                    Email: userEmaildata.Email,
                })
                res.status(200).json({Token:token})
            }
        }        
    } 
    catch (error) {
        res.status(400).json({message:"unable to login"})
    }
}

const userSignup = async (req,res) => {
   const {Name,Email,passwd} = req.body
   console.log(Name,Email,passwd)   
   const salt = await bcrypt.genSalt(10);

   const userEmaildata = await userModel.find({Email});

   if(userEmaildata.length > 0){
    res.status(400).json({message:"Email already registered"});
   }

   const hashedpasswd = await bcrypt.hash(passwd,salt)


   try {
        const user = await  userModel.create({
            Name,
            Email,
            password:hashedpasswd
        })
        res.status(200).json({user})
   } catch (error) {
        res.status(400).json({"message":"unable to create new user"})
   }
}

module.exports = {
    userLogin,  
    userSignup
}