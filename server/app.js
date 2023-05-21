import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';

const app = express()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())
app.use("/stories", storyRoutes);

const MONGO_URI = "mongodb+srv://ashusonavane98:Asmita%40123@cluster0.uwcda3c.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
    }
    catch (err) {
        console.log("connection to mongoDB failed", err.message);

    }
}
connectDB();
mongoose.connection.on("open", () => console.log("connection to database has been established successfully"));
mongoose.connection.on("error", (err) => console.log(err));

