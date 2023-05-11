const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("すべてのタスクを取得");
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    return res.status(200).json(createTask);
  } catch (err) {
    return res.status(500).json(err);
  }
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
