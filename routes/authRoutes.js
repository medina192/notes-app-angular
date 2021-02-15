//  api/auth

const { Router } =require('express');
const { registerNewUser, logIn, getUsers } = require('../controllers/authController');

const router = Router();

router.post('/register', registerNewUser);
router.post('/login', logIn);
router.get('/getUsers', getUsers);

module.exports = router;

