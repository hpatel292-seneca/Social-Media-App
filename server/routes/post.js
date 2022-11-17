import  Express  from "express";
import { getPost, createPost } from "../controllers/posts.js";

const router = Express.Router();

router.get("/", getPost);
router.post("/", createPost);

export default router;