const taskDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

// /api/v1/tasks からタスクを読み込む
const showTasks = async () => {
  try {
    // 自作のAPIをたたく
    // dataという属性をtasksとして取得
    const { data: tasks } = await axios.get("/api/v1/tasks");

    //タスクが一つもない時
    if (tasks.length < 1) {
      taskDOM.innerHTML = `<H5 class="empty-list">タスクがありません</H5>`;
      return;
    }

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
        <a href="edit.html?id=${_id}" class="edit-link">
          <i class="fas fa-edit"></i>
        </a>
        <!-- ゴミ箱リンク -->
        <button class="delete-btn" type="button" data-id=${_id}>
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
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = "タスクを追加しました";
    formAlertDOM.classList.add("text-success");
  } catch (err) {
    console.log(err);
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = "無効です。もう一度やり直してください";
  }
  setTimeout(() => {
    formAlertDOM.style.display = "none";
    formAlertDOM.classList.remove("text-success");
  }, 3000);
});

//タスクを削除する
taskDOM.addEventListener("click", async (event) => {
  const element = event.target;
  if (element.parentElement.classList.contains("delete-btn")) {
    const id = element.parentElement.dataset.id;
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (err) {
      console.log(err);
    }
  }
});
