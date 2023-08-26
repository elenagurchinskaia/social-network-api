const router = require("express").Router();
const userRoutes = require("./userRouter");
const thoughtRoutes = require("./thoughtRouter");

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);

module.exports = router;
