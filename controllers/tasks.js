const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    return res.status(200).json(createTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createTask = (req, res) => {
  res.send("タスクを新規作成");
};

const getSingleTask = (req, res) => {
  res.send("ある特定のタスク");
};

const updateTask = (req, res) => {
  res.send("ある特定のタスクを更新");
};

const deleteTask = (req, res) => {
  res.send("ある特定のタスクを削除");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
