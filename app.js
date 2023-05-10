const express = require("express");
const app = express();
const PORT = 4000;

app.get("/api/v1/tasks", (req, res) => {
  res.send("タスク全取得");
});

app.post("/api/v1/tasks", (req, res) => {
  res.send("タスクを新規作成");
});

app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスク");
});

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを更新");
});

app.delete("/api/v1/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを削除");
});



app.listen(PORT, console.log("サーバー起動中🚀"));
