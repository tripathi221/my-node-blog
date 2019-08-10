const Blog = require('../models/blog.model.js');

exports.create = (req, res) => {
    if (!req.body.blogDescription) {
        return res.status(400).send({
            message: 'Blog description can not be empty',
        });
    }

    const blog = new Blog({
        blogTitle: req.body.blogTitle || 'untitled',
        blogDescription: req.body.blogDescription,
    });

    blog.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'blog can not be created',
        });
    });
};

exports.findAll = (req, res) => {
    Blog.find().then(blogs => {
        res.send(blogs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'no blogs found',
        });
    });
};