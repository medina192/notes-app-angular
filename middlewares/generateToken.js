const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    //process.env.S_K

    return new Promise((resolve, reject) => {
        const payload = {
            id
        };

        jwt.sign(payload, process.env.S_K,{
            expiresIn: '8640h'
        },(err, token) =>{
            if(err){
                console.log(err);
                reject('the token could not be generated');
            }
            else{
                resolve(token);
            }
        });

    });

}

module.exports = {
    generateToken
}

