const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/:tableName", require("./query.route"));
router.use("/razorpay", require("./razorpay.route"));
router.use("/job", require("./job.posting"));
module.exports = router;
