const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.header('x-token');
    
    if(!token)
    {
        res.status(404).json({
            ok: false,
            message: 'token does not exist'
        });
    }

    try {
        const response = jwt.verify(token, process.env.S_K);
        req.id = response.id;
        next();
    } catch(error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: 'error verify token'
        });
    }

}

module.exports = {
    verifyToken
}