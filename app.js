const config = require('./config.json')
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

// Projects
app.get("/hastebin", (req, res) => { res.redirect("https://bin.justinnn.dev")});
app.get("/mcbuild-announcer", (req, res) => { res.redirect("https://github.com/Jqstln/mcbuild-announcer")});
app.get("/celendi", (req, res) => { res.redirect("https://celendi.me/")});

// Socials
app.get("/instagram", (req, res) => { res.redirect("https://www.instagram.com/jqstln/")});
app.get("/twitter", (req, res) => { res.redirect("https://twitter.com/Jqstln")});
app.get("/github", (req, res) => { res.redirect("https://github.com/Jqstln")});
app.get("/youtube", (req, res) => { res.redirect("https://www.youtube.com/channel/UCpPz4HF7Z3Ma8VA1TG1oJIw")});
app.get("/discord", (req, res) => { res.redirect("https://discord.com/users/570708109413187621")});

app.listen(config.port, () => console.log(`The server is now running on port ${config.port}`));