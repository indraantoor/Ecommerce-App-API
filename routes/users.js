const router = require("express").Router();

router.get("/userstest", (req, res) => {
  res.send("User test is ok!");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("your name is" + username);
});

module.exports = router;
