const express = require("express");
const { authenticate, authorize } = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/demodash", authenticate, authorize(["user", "mentor", "admin"]), (req, res) => {
    res.json({ message: "Welcome to the user dashboard" });
});

router.get("/mentordash", authenticate, authorize(["mentor", "admin"]), (req, res) => {
    res.json({ message: "Welcome to the mentor dashboard" });
});

router.get("/organiserdash", authenticate, authorize(["admin"]), (req, res) => {
    res.json({ message: "Welcome to the admin dashboard" });
});

// router.get("/submissions", authenticate, authorize(["user"]), (req, res) => {
//     res.json({ message: "Welcome to submission portal" });
// });


router.post("/submissions", authenticate, authorize(["user"]), (req, res) => {
    const { title, gitrepo, projectdesc, ps, ppt, thumbnail, preport, doc, vid } = req.body;

    // Validate required fields
    if (!title || !gitrepo || !projectdesc || !ps) {
        return res.status(400).json({ message: "Title, GitHub repo, project description, and problem statement are required." });
    }

    const newSubmission = {
        title,
        gitrepo,
        projectdesc,
        ps,
        ppt: ppt || null,
        thumbnail: thumbnail || null,
        preport: preport || null,
        doc: doc || null,
        vid: vid || null,
        user: req.user.id,
        createdAt: new Date()
    };

    console.log("New Submission:", newSubmission);

    res.status(201).json({ message: "Submission successful", submission: newSubmission });
});

router.get("/profile", authenticate, authorize(["user", "mentor", "admin"]), (req, res) => {
    res.json({ message: "Welcome to your profile" });
});

router.get("/notifications", authenticate, authorize(["user", "mentor", "admin"]), (req, res) => {
    res.json({ message: "Here are your notifications" });
});

module.exports = router;

