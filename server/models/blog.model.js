const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    blogTitle: String,
    blogDescription: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);

