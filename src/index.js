import "./styles.css";

const addTodo = () => {
  // 入力されたテキストの表示
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addIncompleteList(input_text);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addIncompleteList = (text) => {
  // TODOの追加
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.innerText = text;
  div.appendChild(p);
  // console.log(div);

  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親（li）を削除したい
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(completeTarget);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const todo_text = addTarget.firstElementChild.innerText;

    // div以下の初期化
    addTarget.textContent = null;
    console.log(addTarget);

    const add_p = document.createElement("p");
    add_p.innerText = todo_text;

    const back = document.createElement("button");
    back.innerText = "戻す";
    back.addEventListener("click", () => {
      const deleteTarget = back.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const back_todo_text = back.parentNode.firstElementChild.innerText;
      addIncompleteList(back_todo_text);
    });
    addTarget.appendChild(add_p);
    addTarget.appendChild(back);

    const add_li = document.createElement("li");
    add_li.appendChild(addTarget);

    const ul = document.getElementById("complete-list");
    ul.appendChild(add_li);
  });
  div.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親（li）を削除したい
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  div.appendChild(deleteButton);

  const li = document.createElement("li");
  li.appendChild(div);
  console.log(li);

  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addTodo());
