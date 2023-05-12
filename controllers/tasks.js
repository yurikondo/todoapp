const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    return res.status(200).json(allTasks);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    if (!getSingleTask) {
      return res.status(404).json(`_id${req.params.id}は存在しません`);
    }
    return res.status(200).json(createTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({ _id: req.params.id });
    return res.status(200).json(getSingleTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(updateTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json(deleteTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
