const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const { check } = require('express-validator')

module.exports = function(app) {
  // app.post(
  //   "/api/auth/signup",
  //   [
  //     verifySignUp.checkDuplicateUsernameOrEmail,
  //     verifySignUp.checkRolesExisted
  //   ],
  //   controller.create
  // );

  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/signup", [
    check('username')
      .notEmpty()
      .withMessage('username is required'),
    check('email')
      .notEmpty()
      .withMessage('email is required'),
    check('password')
      .notEmpty()
      .withMessage('password is required'),
  ], 
  controller.signup);
};
