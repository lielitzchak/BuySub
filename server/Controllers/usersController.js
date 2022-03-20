const User = require("../Models/User");
const Group = require("../Models/Group");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  await User.find({}).then((data) => {
    res.send(data);
  });
};

const getUserById = async (req, res) => {
  await User.findOne(req.body.id).then((data) => res.send(data));
};

const addUser = async (req, res) => {
  const { email, password } = req.body;

  if (await User.exists({ email: email }))
    return res.status(400).send({ message: "Email Already Exists" });

  bcrypt.hash(password, 10, async (err, hashPassword) => {
    if (err) return res.status(500).send({ message: err });

    req.body.password = hashPassword;
    await User.create(req.body)
      .then((result) =>
        res.status(200).send({ message: "User has been Added", result })
      )
      .catch((err) => res.status(500).send(err));
  });
};

const updateUser = async (req, res) => {
  await User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
};

const deleteUser = async (req, res) => {
  const userToDelete = await User.findByIdAndRemove({ _id: req.params.id })

  Group.findOne({groupName: userToDelete.groupName}).then((groupMember) => {
    
    const member = groupMember.members;
    member.splice(member.indexOf(userToDelete.id),1)
    groupMember.save();
    res.send({Message : groupMember.members,userToDelete})
  })  
};


module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
