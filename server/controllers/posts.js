import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

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
    console.log(req.body);
    let post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res)=>{
    const { id: _id } = req.params;
    // updated post
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    // the last param will just make sure that this request return new post back
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
    res.json(updatePost);
}