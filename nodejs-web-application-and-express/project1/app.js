const path = require("path");
const express = require("express");
const morgan = require("morgan");
const sessions = require("./src/data/sessions.json");

const app = express();
const sessionsRouter = express.Router();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

sessionsRouter.route("/")
  .get((req, res) => {
    res.render("sessions", {
      sessions
    });
  });

sessionsRouter.route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.render("session", { session: sessions[id] });
  });

app.use("/sessions", sessionsRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Or Hasson Site!", data: ["a", "b", "c"] });
});

const PORT = process.env.PORT || 3003;

app.listen(3003, () => {
  console.log(`Listening on ${PORT}...`);
});