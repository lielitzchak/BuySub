const Group = require('../Models/Group');

let getGroups = async (req,res) => {
   await Group.find({}).then((data) => {
        res.send(data)
})};

let getGroupById = async (req,res) => {
   await Group.findOne(req.params.id).then((data) => {
        res.send(data)
})};


let addGroup = async (req,res) => {
   await Group.create(req.body).then((data) => { 
    res.send(data)
})};


let updateGroup = async (req,res) => {
   await Group.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
        Group.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
})};

let deleteGroup = async (req,res) => {
   await Group.findByIdAndRemove({_id : req.params.id}).then((data) => {
        res.send(data)
})};



module.exports = {
    getGroups,
    getGroupById,
    addGroup,
    updateGroup,
    deleteGroup
};

