const Group = require('../Models/Group');
const User = require('../Models/User');

let getGroups = async (req,res) => {
   await Group.find({}).then((data) => {
        res.send(data)
})};

let getGroupById = async (req,res) => {
   await Group.findOne(req.params.id).then((data) => {
        res.send(data)
})};


let addGroup = async (req,res) => {
    const {userId} = req.params;

  const user = await User.findOne({userId});
  console.log(user);
  const newGroup = await Group.create(req.body);
  user.groupName = newGroup.groupName;
  newGroup.members.push(user);
  
  await user.save();
  await newGroup.save();
  
  res.send('The Gropup added and Linked Sucessfully')  
};



let updateGroup = async (req,res) => {
   await Group.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
        Group.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
    })
};
// let updateGroup = async (req,res) => {
//    await Group.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
//         Group.findOne({_id : req.params.id}).then((data) => {
//             res.send(data)
//         })
// })};

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

