const express = require('express');
const router = express.Router();
const {getUsers,getUserById,addUser,updateUser,deleteUser} = require('../Controllers/usersController');


router.get('/users',getUsers)

router.get('/users/:id',getUserById)

router.post('/users',addUser)

router.put('/users/:id',updateUser)

router.delete('/users/:id',deleteUser)


module.exports = router;
