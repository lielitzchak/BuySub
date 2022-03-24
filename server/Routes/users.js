const express = require('express');
const router = express.Router();
const {getUsers,getUserById,addUser,updateUser,changeUserPassword,deleteUser} = require('../Controllers/usersController');


router.get('/users',getUsers)

router.get('/users/:id',getUserById)

router.post('/users',addUser)

router.put('/users/:id',updateUser)

router.put('/users/password/:id',changeUserPassword)

router.delete('/users/:id',deleteUser)



module.exports = router;
