const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hello world from express api");
})

module.exports = router;