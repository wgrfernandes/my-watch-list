const { Router } = require("express");
const userController = require("../controllers/user-controller");

const authRoutes = Router();

authRoutes.post("/auth/register", userController.registerUser);
authRoutes.post("/auth/login", userController.loginUser);

module.exports = {
  authRoutes,
};
