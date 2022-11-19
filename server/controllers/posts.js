import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res)=>{
    // it is better to use try and catch over here as an the model can give eror back
    try {
        const posts = await PostMessage.find();
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message}) 
    }
};

export const createPost = async (req, res)=>{
    let post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.send(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}