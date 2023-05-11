const express = require("express");
const app = express();
const taskRoute = require("./routers/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

const PORT = 4000;

//ルーティング設定
app.use("/api/v1/tasks", taskRoute);

const start = async () => {
  try {
    //データベースと接続
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバー起動中🚀"));
  } catch (err) {
    console.log(err);
  }
};

start();
