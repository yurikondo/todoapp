const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("タスク全取得");
});

router.post("/", (req, res) => {
  res.send("タスクを新規作成");
});

router.get("/:id", (req, res) => {
  res.send("ある特定のタスク");
});

router.patch("/:id", (req, res) => {
  res.send("ある特定のタスクを更新");
});

router.delete("/:id", (req, res) => {
  res.send("ある特定のタスクを削除");
});

module.exports = router;
