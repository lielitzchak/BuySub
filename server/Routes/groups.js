const express = require("express");
const router = express.Router();

const {
  getGroups,
  getGroupById,
  getGroupProducts,
  getGroupInfo,
  addGroup,
  joinGroup,
  updateGroup,
  deleteGroup,
} = require("../Controllers/groupsController");

router.get("/groups", getGroups);

router.get("/groups/:id", getGroupById);

router.get("/groups/products/:groupName", getGroupProducts);

router.post("/groups/:id", addGroup);

router.get("/groups/groupInfo/:groupName", getGroupInfo);

router.post("/groups/:id", addGroup);

router.put("/groups/:id", updateGroup);

router.delete("/groups/:id", deleteGroup);

module.exports = router;
