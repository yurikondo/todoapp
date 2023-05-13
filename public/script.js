const taskDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");

// /api/v1/tasks からタスクを読み込む
const showTasks = async () => {
  try {
    // 自作のAPIをたたく
    // dataという属性をtasksとして取得
    const { data: tasks } = await axios.get("/api/v1/tasks");
    console.log(tasks);

    //タスクを出力
    const allTasks = tasks
      .map((task) => {
        const { completed, _id, name } = task;
        return `
      <div class="single-task">
      <h5>
        <span> <i class="far fa-check-circle"></i></span>${name}
      </h5>
      <!-- 編集リンク -->
      <div class="task-links">
        <a href="#" class="edit-link">
          <i class="fas fa-edit"></i>
        </a>
        <!-- ゴミ箱リンク -->
        <button class="delete-btn" type="button">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>`;
      })
      .join("");
    taskDOM.innerHTML = allTasks;
  } catch (err) {
    console.log(err);
  }
};
showTasks();

//タスクを新規作成する
formDOM.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post("/api/v1/tasks", { name: name });
    showTasks();
    taskInputDOM.value = "";
  } catch (err) {
    console.log(err);
  }
});
