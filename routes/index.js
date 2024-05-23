const router = require("express").Router();
const apiRoutes = require("./api/index.js");


router.use("/api", apiRoutes);
router.use((req, res) => res.send("Nothing Here!"));

module.exports = router;