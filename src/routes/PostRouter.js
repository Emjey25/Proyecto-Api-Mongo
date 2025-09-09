import { Router } from "express";

import {
	CreatePost,
	DeletePost,
	GetAllPosts,
	GetPostById,
	UpdatePost,
} from "../controllers/PostController.js";

const PostRouter = Router();

PostRouter.get("/", GetAllPosts);
PostRouter.get("/:id", GetPostById);
PostRouter.post("/", CreatePost);
PostRouter.put("/:id", UpdatePost);
PostRouter.delete("/:id", DeletePost);

export default PostRouter;
