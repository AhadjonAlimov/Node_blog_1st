const mongoose = require("mongoose");
const Post = require("./models/Post");

mongoose.connect("mongodb+srv://samar:zozmS9hwVNIpdsGr@cluster0.bbfkm.mongodb.net/node-blog-test");

// Post.find({}, (err, post) => console.log(post))
// Post.find({title: "My second blog"}, (err, post) => console.log(post))
// Post.findById("6198bc68c55902b97b30c8ab",(err, post) => console.log(post))
// Post.findByIdAndUpdate("6198bc68c55902b97b30c8ab", {
//   description: "It is beatufull description"
// }, (err, post) => console.log(post))
// Post.create({
//   title: "My second blog",
//   description: "My second description",
//   content: "Lorem ipsum second content"
// }, (err, post) => {console.log(err, post)})

const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        res.redirect("/")
      } else {
        res.redirect("/login");
      }

const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(user.password, salt);
user.save()