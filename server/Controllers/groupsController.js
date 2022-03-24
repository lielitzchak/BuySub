const Group = require("../Models/Group");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const Product = require("../Models/Product");

let getGroups = async (req, res) => {
    await Group.find({}).then((data) => {
        res.send(data);
    });
};

let getGroupProducts = async (req, res) => {
    await Group.findOne({ groupName: req.params.groupName.toLowerCase()})
        .populate("products")
        .then((groupProdcts) => {
            if (groupProdcts.products.length >= 1) {
                res.status(200).send(groupProdcts.products);
            } else {
                res.status(200).send({ message: "The Are No Products" });
            }
        });
};

let getGroupInfo = async (req, res) => {
    await Group.findOne({ groupName: req.params.groupName }).populate("members")
        .then((groupProdcts) => {
            if (groupProdcts) {
                res.status(200).send(groupProdcts);
            } else {
                res.status(200).send({ message: "The Are No Products" });
            }
        });
};

let getGroupById = async (req, res) => {
    await Group.findOne(req.params.id).then((data) => {
        res.send(data);
    });
};


let addProductToListToBuy = async (req,res) => {
    const group = await Group.findOne({groupName : req.params.groupName}); 
    group.listToBuy.push(req.body); 
    await group.save();
    
    res.send({message :'The Product added ti listSucessfully',group})  
 };
 

let addGroup = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    console.log(user);
    user.role.push("Admin");

    bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
        if (err) return res.status(500).send({ message: err });
        req.body.password = hashPassword;
        const newGroup = await Group.create(req.body);
        newGroup.members.push(user._id);
        user.groupName = newGroup.groupName;

        await newGroup.save();
        await user.save();

        res.send({ message: "The Group added and Linked Sucessfully", newGroup });
    });
};

let joinGroup = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    console.log(user);

    const groupToJoin = await Group.findOne({groupName: req.body.groupName.toLowerCase()}).then((group) => {
        console.log(req.body);
        bcrypt.compare(req.body.password,group.password,async (err, isMatch) => {
            if (err) return res.status(400).send({ message: "error in pas" });
            if (!isMatch) return res.status(403).send({ message: "Password incorrect" });
                console.log('the user enter metch the password');
            group.members.push(user._id);
            user.groupName = group.groupName;
            await group.save();
            await user.save();
            res.send({message: `You Join The Group and Linked Sucessfully`,group});
        });
        
    }).catch((err) => {
            res.status(400).send({ message: `${err}` });
    });
};

let updateGroup = async (req, res) => {
   const groupToUpdate = await Group.findByIdAndUpdate({ _id: req.params.id }, req.body);

    if(groupToUpdate.groupName != req.body.groupName.toLowerCase()){

      await User.find({ groupName: groupToUpdate.groupName }).then((usersToUpdate) => {

           console.log(usersToUpdate);
           usersToUpdate.forEach((user) => {
               user.groupName = req.body.groupName;
               user.save();
           })
           
      })
   }

    await Group.findOne({ _id: req.params.id }).then((data) => {
         res.send({Message : 'Group Updated Successfully', data});
     });
};

let deleteProductFromListToBuy = async (req,res) => {
    
    await Group.findOne({groupName: req.params.groupName}).then((group) => {
       const productsFromList = group.listToBuy;
       productsFromList.forEach((item,index) => {
            if(item._id == req.params.id){

                productsFromList.splice(index,1);
                group.save();
            }
       })
       res.send({Message : `The Product Deleted From The List`})
     })  
 };


let deleteGroup = async (req, res) => {
    const groupToDelete = await Group.findByIdAndRemove({ _id: req.params.id });

    await User.find({ groupName: groupToDelete.groupName }).then((users) => 
    // console.log(users),
    users.forEach((user) => {
        user.groupName = '';
        user.save();
    })
    )

    groupToDelete.products.forEach( product => {

        Product.findByIdAndRemove({ _id: product._id }).then((product) => {
            product.save();
        });
    });

    res.send({ Message: "Group Deleted Successfully" })
}

const adminAddMember = async (req, res) => {
    if(await User.exists({email: req.body.email}) == false) return res.status(400).send({message:"User not exist"});
    const userToAddAsMember = await User.findOne({email: req.body.email})
    
    await Group.findOne({ groupName: req.params.groupName }).then((group) => {
        group.members.push(userToAddAsMember._id);
        userToAddAsMember.groupName = group.groupName;
        group.save();
        userToAddAsMember.save();
        res.send({message :`The User ${userToAddAsMember.email} Added To ${group.groupName} Group`})
    })
};

const adminRemoveMember = async (req, res) => {

    if(await User.exists({_id: req.params.id}) == false) return res.status(400).send({message:"User not exist"});
    const userMemberToRemove = await User.findOne({_id: req.params.id});

     await Group.findOne({ groupName : req.params.groupName }).then((groupToRemoveMember) => {
        if(userMemberToRemove.role.includes("Admin")){

            const member = groupToRemoveMember.members
            member.splice(member.indexOf(userMemberToRemove._id),1)

            userMemberToRemove.groupName = '';
            const RemoveAdminRole = userMemberToRemove.role
            RemoveAdminRole.splice(RemoveAdminRole.indexOf('Admin'),1)
            userMemberToRemove.save()
            groupToRemoveMember.save();
            res.send({Message : `The User ${userMemberToRemove.email} Removed Successfully`})
        }else{
            const member = groupToRemoveMember.members
            member.splice(member.indexOf(userMemberToRemove._id),1)
            userMemberToRemove.groupName = '';
            
            userMemberToRemove.save()
            groupToRemoveMember.save();
            res.send({Message : `The User ${userMemberToRemove.email} Removed Successfully`})

        }
   })

};

const adminAddAdmin = async (req, res) => {
  try {
        await User.findOne({_id: req.params.id}).then((userToBecomeAdmin) => {
            userToBecomeAdmin.role.push("Admin");
            userToBecomeAdmin.save();
            res.send({message :`The User ${userToBecomeAdmin.email} Is Changed To Be Admin`})
        })
  } catch (error) {
    res.send({ massaged: "error" });
  }
};

const adminRemoveAdmin = async (req, res) => {
  try {
        await User.findOne({_id: req.params.id}).then((userToRemoveAdmin) => {

            const RemoveAdminRole = userToRemoveAdmin.role
            RemoveAdminRole.splice(RemoveAdminRole.indexOf('Admin'),1)
            userToRemoveAdmin.save();
            res.send({message :`The User ${userToRemoveAdmin.email} Is Not Admin Now`})
        })
  } catch (error) {
    res.send({ massaged: "error" });
  }
};

const exitGroup = async(req,res) => {

    if(await User.exists({email: req.params.email}) == false) return res.status(400).send({message:"User not exist"});

    await User.findOne({ _id: req.params.id }).then(async(userMemberToRemove) => {
        if(userMemberToRemove.role.includes("Admin")){

            await Group.findOne({ groupName : req.params.groupName }).then((group) => {
    
                userMemberToRemove.groupName = '';
                const RemoveAdminRole = userMemberToRemove.role
                RemoveAdminRole.splice(RemoveAdminRole.indexOf('Admin'),1)
                const member = group.members
                member.splice(member.indexOf(userMemberToRemove._id),1)
                userMemberToRemove.save();
                let random = Math.floor(Math.random() * group.members.length);
                console.log(random);
                let randomId = group.members[random];
                console.log(randomId);
                User.findOne({ _id: randomId }).then((user) => {
                    console.log(user);
                    user.role.push('Admin');
                    user.save();
                })
                group.save();
            })
    
            res.send({Message : `The User ${userMemberToRemove.email} Removed and Exit Successfully`})
    
        }else{
             await Group.findOne({ groupName : req.params.groupName }).then((group) => {
    
                userMemberToRemove.groupName = '';
                const member = group.members
                member.splice(member.indexOf(userMemberToRemove._id),1)
                group.save();
                res.send({Message : `The User ${userMemberToRemove.email} Removed and Exit Successfully`})
            })
        }
    }) 
}

module.exports = {
    getGroups,
    getGroupById,
    getGroupProducts,
    getGroupInfo,
    addProductToListToBuy,
    addGroup,
    joinGroup,
    updateGroup,
    deleteProductFromListToBuy,
    deleteGroup,
    adminAddMember,
    adminRemoveMember,
    adminAddAdmin,
    adminRemoveAdmin,
    exitGroup
};
