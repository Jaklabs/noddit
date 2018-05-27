var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Post = mongoose.model('Post');

router.route('/posts')
	.get((req, res, next) => {
		Post.find((err, posts) => {
			if (err)) return next(err);
			res.json(posts);
		});
	})
	.post((req, res, next) => {
		Post.create(req.body, (err, post) => {
			if (err) return next(err);
			res.json(post);
		});
	});


router.route('/posts:/id')
	.get((req, res, next) => {
		Post.findById(req.params.id, (err, post) => {
			if (err) return next(err);
			res.json(post);
		})
	})
	.put((req, res, next) => {
		Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
			if (err) return next(err);
			res.json(post);
		});
	})
	.delete((req, res, next) => {
		Post.findByIdAndRemove(req.params.id, (err, post) => {
			if (err) return next(err);
			res.json(post);
		})
	});

module.exports = router;