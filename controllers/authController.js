
const  User  = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middlewares/generateToken');

const registerNewUser = async(req, res) => {

    const {name, email, password} = req.body;

    const user = new User(req.body);

    try {
        const emailExists = await User.findOne({email});

        if(emailExists)
        {
            return res.status(400).json({
                ok: false,
                message: 'the email already exists'
            });
        }

        let salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateToken(user.id);

        res.json({
            user,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            message: 'something wrong in create user'
        });
    }

}



const logIn = async(req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({email});

        if(!user)
        {
            return res.status(404).json({
                ok: false,
                message: 'the email doesn´t match'
            });
        }

        const passwordMatches = bcrypt.compareSync(password, user.password);

        if(!passwordMatches)
        {
            return res.status(404).json({
                ok: false,
                message: 'the password doesn´t match'
            });
        }
        
        const token = await generateToken(user.id);
      
        

        res.json({
            user,
            token
        });

    } catch(error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            message: 'error login'
        });
    }
}



const getUsers = async(req, res) => {

    try {
        const users = await User.find({});
        res.json({
            users
        });
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            message: 'error get Users'
        });
    }

}

module.exports = {
    registerNewUser,
    logIn,
    getUsers,
}



