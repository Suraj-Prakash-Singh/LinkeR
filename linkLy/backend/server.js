const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.get("/getShortLink", (req, res) => {
    const { link } = req.headers;
    console.log(link);
    res.send({
        message: "link receieved by the backend"
    })
})

app.listen(3000, () => {
    console.log("server listening on port 3000")
});