var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	text: String,
	id: Number
})

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;