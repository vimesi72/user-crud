const express = require("express");
const router = express.Router();

// colocar las rutas aquí
//router.use("/users", userRouter);
router.use("/users", userRouter);

module.exports = router;
