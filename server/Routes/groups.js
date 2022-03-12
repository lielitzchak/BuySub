const express = require('express');
const router = express.Router();
const {getGroups,getGroupById,addGroup,updateGroup,deleteGroup} = require('../Controllers/groupsController');


router.get('/groups',getGroups)

router.get('/groups/:id',getGroupById)

router.post('/groups',addGroup)

router.put('/groups/:id',updateGroup)

router.delete('/groups/:id',deleteGroup)


module.exports = router;
