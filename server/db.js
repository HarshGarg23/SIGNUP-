import mongoose from "mongoose";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import router from "./routes/router.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.get("/",(req,res)=>{
    res.send("Success");
})
const PORT = 8000;
const Connection = async () => {
    const URL = `mongodb+srv://harsh:harsh1234@cluster0.xiyur8m.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }

}
Connection();
app.listen(PORT,()=>console.log(`server is running on port ${PORT} `))
