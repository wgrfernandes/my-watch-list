const { Router } = require("express");
const userController = require("../controllers/user-controller");

const userRoutes = Router();

userRoutes.get("/users/:id", userController.findUserById);
userRoutes.put("/users/:id", userController.updateUser);

module.exports = {
  userRoutes,
};
