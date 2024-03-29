import express  from "express";
import cors from "cors";
import crypto from "crypto";
import { Resend } from 'resend';
import { linkHistoryModel } from "./db.mjs";
import moment from "moment/moment.js";

const app = express();
app.use(cors());
app.use(express.json());
// const resend = new Resend('re_hQ2ykXQ6_EyXdZhqxohMwMSTkMFTmzxtV');

app.get("/api/v1/getShortLink", (req, res) => {
    const { link } = req.headers;
    console.log(link);
    
    const shorlUrl = crypto.randomBytes(3).toString('hex');
    const currentDate = moment().format("MMM-Do-YYYY");

    const newLinkHistory = new linkHistoryModel({
        shortLink: shorlUrl,
        originalLink: link,
        activeStatus: true,
        date: currentDate
    });
    newLinkHistory.save();
    res.send({
        short: shorlUrl
    })
})

app.get("/:shortUrl", (req, res) => {
    const longUrl = "http://www.google.com/";

    res.set('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.set('Access-Control-Allow-Methods', 'GET'); // Allow GET method
    res.set('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
    res.redirect(longUrl);
})

app.get("/api/v1/getLinkHistory", async (req, res) => {
    console.log("getLinkHistory hit");
    linkHistoryModel.find({}, {__v: 0, _id: 0}).then((docs) => res.send({ links: docs }));
})

app.listen(3000, () => {
    console.log("server listening on port 3000")
});