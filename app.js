const config = require('./config.json')
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/hastebin", (req, res) => { res.redirect("https://bin.justinnn.dev")});
app.get("/mcbuild-announcer", (req, res) => { res.redirect("https://discord.gg/GWdnwwYMjZ")});

app.listen(config.port, () => console.log(`The server is now running on port ${config.port}`));