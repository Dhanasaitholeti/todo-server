const jwt = require('jsonwebtoken');

const tokenGenerator = async (payload) => {
        try {
            const token = jwt.sign(payload,"This_is_a_secret",{expiresIn:'2d'})
            return token
        } catch (error) {
            console.log(error);
        }
}


module.exports = tokenGenerator;