const Post = require('./../../models/post');

module.exports = async (req, res) => {
    const post = new Post(req.body);
    try {
        const saved = await post.save();
        return res.status(201).end({ post: saved });
    } catch (err) {
        return res.status(500).json({ err });
    }
}