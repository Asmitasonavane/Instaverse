import { Router } from "express";
import { getStories, updateStory, createStories } from "../controllers/stories.js";
const router = Router();


router.get("/", getStories);
router.post("/", createStories);
router.patch("/:id", updateStory);

export default router;