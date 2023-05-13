const taskIdDOM = document.querySelector(".task-edit-id");
const taskNameDOM = document.querySelector(".task-edit-name");
 
const params = window.location.search;
const id = new URLSearchParams(params).get("id");

//一つの特定のタスクを表示する
const showTask = async () => {
  try {
    // dataという属性をtaskとして取得
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, name } = task;
    taskIdDOM.textContent = _id;
    taskNameDOM.value = name;
  } catch (err) {
    console.log(err);
  }
};
showTask();
