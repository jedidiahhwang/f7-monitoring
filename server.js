const express = require("express");
const path = require("path");
const Rollbar = require("rollbar");

let rollbar = new Rollbar({
    accessToken: "794431ad7edb4db9965ca84f1f402e28",
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    rollbar.info("HTML file served successfully!");
})

const port = process.env.PORT || 4545;

app.use(rollbar.errorHandler());

app.listen(port, () => {
    console.log(`They're taking the Hobbits to ${port}!`);
})