import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";

const secret = 'test';

export const signup = async(req, res) => {
    console.log("this is in backend signup function")
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,12);
    try {
        const result = await UserModel.create({email: email, password: hashedPassword});
        res.status(201).json({result});
    } catch(error) {
        res.status(500).json("{error: can not post user}");
        console.log(error);
    }
}

export const signin = async(req, res) => {
    console.log("this is in the signin function");
    const {email, password} = req.body;
    try{
        const oldUser = await UserModel.findOne({ email });
        if (!oldUser) return res.status(404).json({ message: "Invalid email" });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" });
        else {
            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
            res.status(200).json({ result: oldUser, token });
        }
    }catch(err){
        console.log("err: "+err);
        res.status(500).json({ message: "Something went wrong" , error: err});
    }
}