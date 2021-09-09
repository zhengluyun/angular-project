import express from "express";
import router from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT=3000;
const DATABASE_URL = "mongodb+srv://Christine:970402@cluster0.sm9k6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/', router);
// app.get("/", function(req,res){
//     res.send("hello, this is from the server");
// })

mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log(`mongoose.connection.readyState: ${mongoose.connection.readyState}`);
        app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
    })
    .catch((err) => console.log("database connection error"))

// app.listen(PORT, function(){
//     console.log("Sever is running on localhost:"+ PORT);
// })