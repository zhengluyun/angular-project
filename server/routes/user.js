import express from "express";
import {signup, signin} from "../controllers/user.js"

const router = express.Router();

router.get("/test", (req,res)=>{
    res.send("this is sendback of get router");
})
router.post("/signup", signup);
router.post("/signin", signin);

export default router;