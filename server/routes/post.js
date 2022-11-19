import  Express  from "express";
import { getPost, createPost } from "../controllers/posts.js";

const router = Express.Router();

router.get("/", getPost);
router.get("/po", createPost);

export default router;