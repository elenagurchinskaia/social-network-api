const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// start the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// --------------------------------------------------   01-Activities   -------------------------------------------------- //

// mongoose models
const User = require("./models/User");
const Thought = require("./models/Thought");
const Friend = require("./models/Friend");

// middleware
app.use(bodyParser.json());

// MongoDB
mongoose.connect("mongodb://localhost:27017/social-network", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/thoughts", require("./routes/thoughtRoutes"));
app.use("/api/friends", require("./routes/friendRoutes"));
