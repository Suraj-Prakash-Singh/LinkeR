const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getShortLink", (req, res) => {
    const { link } = req.headers;
    console.log(link);
    const shorlUrl = crypto.randomBytes(3).toString('hex');
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

app.listen(3000, () => {
    console.log("server listening on port 3000")
});