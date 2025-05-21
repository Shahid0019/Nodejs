// const express = require("express");
// const userRouter = require("./routes/user");
// const { connectMongoDb } = require("./config");
// const { logReqRes } = require("./Middleware/index");

// const app = express();
// const PORT = 3000;

// // Connection
// connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");
// // const User = mongoose.model("user", userSchema);
// // Middleware
// app.use(logReqRes("log.txt"));
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use("/user", userRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./config"); // Make sure this path is correct
const { logReqRes } = require("./middlewares/index");

const app = express();
const PORT = 3000;
// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => {
  console.log("✅ Connected to MongoDB");
}).catch((err) => {
  console.error("❌ Failed to connect to MongoDB", err);
  process.exit(1);
});

// Middleware
app.use(logReqRes("log.txt"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
