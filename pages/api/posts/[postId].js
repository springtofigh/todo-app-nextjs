export default function handler(req,res) {
    const { query } = req
    console.log(req.query);
    return res.status(200).json({ posts : query.postId })
}