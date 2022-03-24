const express = require("express");
const router = express.Router();

const {
  getGroups,
  getGroupById,
  getGroupProducts,
  getGroupInfo,
  addGroup,
  addProductToListToBuy,
  joinGroup,
  updateGroup,
  deleteProductFromListToBuy,
  deleteGroup,
  adminAddMember,
  adminRemoveMember,
  adminAddAdmin,
  adminRemoveAdmin,
  exitGroup
} = require("../Controllers/groupsController");

router.get("/groups", getGroups);

router.get("/groups/:id", getGroupById);

router.get("/groups/products/:groupName", getGroupProducts);

router.get("/groups/groupInfo/:groupName", getGroupInfo);

router.post("/groups/:id", addGroup);

router.post("/groups/ListToBuy/:groupName", addProductToListToBuy);

router.post("/groups/join/:id", joinGroup);

router.put("/groups/:id", updateGroup);

router.delete("/groups/ListToBuy/:groupName/:id", deleteProductFromListToBuy);

router.delete("/groups/:id", deleteGroup);

router.put("/groups/admin/removeMember/:id/:groupName", adminRemoveMember);

router.post("/groups/admin/adminAddMember/:groupName", adminAddMember);

router.post("/groups/admin/adminAddAdmin/:id", adminAddAdmin);

router.put("/groups/admin/adminRemoveAdmin/:id", adminRemoveAdmin);

router.put("/groups/admin/exitGroup/:id/:groupName", exitGroup);


module.exports = router;
