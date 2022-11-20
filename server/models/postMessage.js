import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    linkCount: {
        type: Number,
        dafault: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model("PostMessage", postSchema);
// Exporting this is important as We can use this model to find data and do CRUD operation on it. 
export default PostMessage;