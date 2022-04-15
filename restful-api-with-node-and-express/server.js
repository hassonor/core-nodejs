global.config = require(process.env.NODE_ENV === "production"
  ? "./config-prod.json"
  : "./config-dev.json");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const expressRateLimit = require("express-rate-limit");
const sanitize = require("./middleware/sanitize");
const crmController = require("./controllers-layer/crm-controller");

const app = express();
// Prevent DOS attack:
app.use("/api/", expressRateLimit({
  windowMs: 1000, // 1 second
  max: 100, // max requests per IP for windowMs.
  message: "Calm down please!" // custom message to return
}));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Prevent XSS attack:
app.use(sanitize);


app.use("/api/contacts", crmController);
app.use("*", (request, response) => response.status(404).send("Route not found."));

const PORT = 3003 || process.env.PORT;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
