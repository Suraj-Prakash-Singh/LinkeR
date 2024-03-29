import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("connected to db"))
        .catch((err) => console.log("Error connecting to the db", err));

const linkHistorySchema = mongoose.Schema({
    shortLink: String,
    originalLink: String,
    activeStatus: Boolean,
    date: String
});

export const linkHistoryModel = mongoose.model('Link-History', linkHistorySchema);



