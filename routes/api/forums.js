const router = require("express").Router();
const Forum = require("../models/Forum");
const User = require("../models/User");

//create a forum

router.forum("/", async (req, res) => {
  const newPost = new Forum(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a forum

router.put("/:id", async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (forum.userId === req.body.userId) {
      await forum.updateOne({ $set: req.body });
      res.status(200).json("the forum has been updated");
    } else {
      res.status(403).json("you can update only your forum");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a forum

router.delete("/:id", async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (forum.userId === req.body.userId) {
      await forum.deleteOne();
      res.status(200).json("the forum has been deleted");
    } else {
      res.status(403).json("you can delete only your forum");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like / dislike a forum

router.put("/:id/like", async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum.likes.includes(req.body.userId)) {
      await forum.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The forum has been liked");
    } else {
      await forum.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The forum has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a forum

router.get("/:id", async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    res.status(200).json(forum);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline forums

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Forum.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Forum.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all forums

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const forums = await Forum.find({ userId: user._id });
    res.status(200).json(forums);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;