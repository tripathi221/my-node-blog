const express = require('express');
const app = express();
const blogRoutes = express.Router();

const blogs = require('../controllers/blog.controller.js');

blogRoutes.post('/create_blog', blogs.create);

blogRoutes.get('/blogs', blogs.findAll);

module.exports = blogRoutes;