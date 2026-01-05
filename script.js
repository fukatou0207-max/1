// ページが読み込まれたら動くよ
document.addEventListener("DOMContentLoaded", () => {
  console.log("JSがちゃんと読み込まれたよ！");

  // h1 の文字色を変えてみる
  const title = document.querySelector("h1");
  if (title) {
    title.style.color = "hotpink";
  }

  // クリックしたらメッセージが出るボタンを追加
  const btn = document.createElement("button");
  btn.textContent = "押してね！";
  btn.style.fontSize = "20px";
  btn.style.marginTop = "20px";

  btn.addEventListener("click", () => {
    alert("JS動いてるよ！！✨");
  });

  document.body.appendChild(btn);
});
