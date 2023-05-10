const express = require("express");
const app = express();
const taskRoute = require("./routers/tasks");

const PORT = 4000;

//ルーティング設定
app.use("/api/v1", taskRoute);

app.listen(PORT, console.log("サーバー起動中🚀"));
