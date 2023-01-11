export default function handler(req,res) {
    console.log(req.method);
    return res.status(200).json({ posts : [{ title: "posts 1" } , {title: "posts 2"}] })
}