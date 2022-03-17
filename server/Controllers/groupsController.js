const Group = require('../Models/Group');
const User = require('../Models/User');
const bcrypt = require('bcrypt');


let getGroups = async (req,res) => {
   await Group.find({}).then((data) => {
        res.send(data)
})};

let getGroupProducts = async (req,res) => {
   const groupProdcts = await Group.findOne({groupName: req.params.groupName}).populate('products');
   if(groupProdcts.products){

       res.status(200).send(groupProdcts.products)
   }else{
       res.status(200).send({message: 'The Are No Products'})
   }
}

let getGroupById = async (req,res) => {
   await Group.findOne(req.params.id).then((data) => {
        res.send(data)
})};


let addGroup = async (req,res) => {

  const user = await User.findOne({_id : req.params.id});
  console.log(user);
  user.role.push('Admin');
  
  bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
    if (err) return res.status(500).send({ message: err });
    req.body.password = hashPassword;
    const newGroup = await Group.create(req.body);
    newGroup.members.push(user._id);
    user.groupName = newGroup.groupName;
    
    await newGroup.save();
    await user.save();
    
    res.send({message :'The Group added and Linked Sucessfully',newGroup})  

  });
};

let joinGroup = async (req,res) => {

    const user = await User.findOne({_id : req.params.id})
    console.log(user);

    const groupToJoin = await Group.findOne({groupName: req.body.groupName}).then((group) => {

        bcrypt.compare(req.body.password ,group.password, async (err,isMatch)=>{
            if(err) return res.status(400).send({message:"error in pas"})
            if(!isMatch) return res.status(403).send({message:"Password incorrect"})
            group.members.push(user._id);
            user.groupName = group.groupName;
            
            await group.save();
            await user.save();

            res.send({message :`You Join The ${group.groupName}  Group and Linked Sucessfully`,groupToJoin})  

        })

    }).catch((err)=>{res.status(400).send({message:`${err}`})})

}



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
    getGroupProducts,
    addGroup,
    joinGroup,
    updateGroup,
    deleteGroup
};

