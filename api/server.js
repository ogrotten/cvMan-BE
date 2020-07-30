const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const passport = require("passport");
// require("../passport/index");

const authRouter = require("../routes/authRouter")
const buildRouter = require("../routes/buildRouter")
const bulletRouter = require("../routes/bulletRouter")
const sectionRouter = require("../routes/sectionRouter")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(passport.initialize());

server.use("/api/auth", authRouter);
server.use("/api/build", buildRouter);
server.use("/api/bullet", bulletRouter);
server.use("/api/section", sectionRouter);

server.use("/public", express.static(path.join(__dirname, "../public")));

server.use(function (err, req, res, next){
	console.log("This is the invalid field -> ", err.field);
	next(err)
})

server.get("/", (req, res) => {
	res.status(200).json({ api: "cvMan is Up."})
})

module.exports = server;