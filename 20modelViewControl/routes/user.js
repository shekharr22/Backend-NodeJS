const express = require("express");
const {handleGetAllUsers} = require('../controllers/user')

const router = express.Router();

router.get("/", handleGetAllUsers);


router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return req.status(404).json({ error: "User Not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "ALl fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });

  return res.status(201).json({ msg: "Success" });
});

module.exports = router;
