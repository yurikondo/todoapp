const getAllTasks = (req, res) => {
  res.send("タスク全取得");
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
