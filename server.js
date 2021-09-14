const express = require("express");
const path = require("path");
const Rollbar = require("rollbar");

let rollbar = new Rollbar({
    accesstoken: "a03378dc88e6432cb951b8dcad173608",
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    rollbar.info("HTML file served successfully!");
})

const port = process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`They're taking the Hobbits to ${port}!`);
})