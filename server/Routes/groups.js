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
  adminAddMember,
  adminRemoveMember,
  adminAddAdmin,
} = require("../Controllers/groupsController");

router.get("/groups", getGroups);

router.get("/groups/:id", getGroupById);

router.get("/groups/products/:groupName", getGroupProducts);

router.get("/groups/groupInfo/:groupName", getGroupInfo);

router.post("/groups/:id", addGroup);

router.post("/groups/join/:id", joinGroup);

router.put("/groups/:id", updateGroup);

router.delete("/groups/:id", deleteGroup);

router.put("/groups/admin/removeMember", adminRemoveMember);

router.post("/groups/admin/adminAddMember", adminAddMember);

router.post("/groups/admin/adminAddAdmin", adminAddAdmin);


module.exports = router;
