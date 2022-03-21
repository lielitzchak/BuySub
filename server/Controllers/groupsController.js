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
    await Group.findOne({ groupName: req.params.groupName })
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

    const groupToJoin = await Group.findOne({ groupName: req.body.groupName }).then((group) => {
        bcrypt.compare(req.body.password,group.password,async (err, isMatch) => {
            if (err) return res.status(400).send({ message: "error in pas" });
            if (!isMatch)
                return res.status(403).send({ message: "Password incorrect" });
            group.members.push(user._id);
            user.groupName = group.groupName;
            await group.save();
            await user.save();
            res.send({
                message: `You Join The ${group.groupName}  Group and Linked Sucessfully`,
                groupToJoin,
            });
        });
        
    }).catch((err) => {
            res.status(400).send({ message: `${err}` });
    });
};

let updateGroup = async (req, res) => {
    await Group.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        Group.findOne({ _id: req.params.id }).then((data) => {
            res.send(data);
        });
    });
};
// let updateGroup = async (req,res) => {
//    await Group.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
//         Group.findOne({_id : req.params.id}).then((data) => {
//             res.send(data)
//         })
// })};

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
    const userToAdd = res.body;
    let group = await Group.findOne({ groupName: req.params.groupName });
    group.members.push(userToAdd);
    userToAdd.groupName = group.groupName;
    await group.save();
    await userToAdd.save();
};

const adminRemoveMember = async (req, res) => {
    let group = await Group.findOne({ _id: req.params.id });
    let deleteMember = { ...req.body };
    let indexToDelete = group.members.indexOf(deleteMember._id);
    indexToDelete
        ? group.members.splice(indexToDelete, 1) + res.send(group)
        : res.send({ massaged: "user not found" });
};
const adminAddAdmin = async (req, res) => {
  try {
    const userAddToAdmin = await User.findOne({ email: req.body.email });
    userAddToAdmin.role.push("Admin");
    res.send({ massaged: "admin added successfully" });
  } catch (error) {
    res.send({ massaged: "error" });
  }
};

module.exports = {
    getGroups,
    getGroupById,
    getGroupProducts,
    getGroupInfo,
    addGroup,
    joinGroup,
    updateGroup,
    deleteGroup,
    adminAddMember,
    adminRemoveMember,
    adminAddAdmin,
};
