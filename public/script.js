// /api/v1/tasks からタスクを読み込む

const showTasks = async () => {
  try {
    // 自作のAPIをたたく
    // dataという属性をtasksとして取得　
    const { data: tasks } = await axios.get("/api/v1/tasks");
    console.log(tasks);
  } catch (err) {
    console.log(err);
  }
};
showTasks();
