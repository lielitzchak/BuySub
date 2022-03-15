const User = require("../Models/User");
const bcrypt = require("bcrypt");

let getUsers = async (req, res) => {
  await User.find({}).then((data) => {
    res.send(data);
  });
};

let getUserById = async (req, res) => {
  await User.findOne(req.body.id).then((data) => res.send(data));
};

let addUser = async (req, res) => {
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

let updateUser = async (req, res) => {
  await User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    });
  });
};

let deleteUser = async (req, res) => {
  await User.findByIdAndRemove({ _id: req.params.id }).then((data) => {
    res.send(data);
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
