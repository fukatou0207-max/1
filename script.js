/ ページが完全に読み込まれたら実行する関数
window.onload = function() {
  // リンクの要素を探して変数に入れる
  const chatAppLink = document.querySelector('a[href*="sharev3"]');

  // もしリンクが見つかったら
  if (chatAppLink) {
    // リンクにマウスが乗った時に実行される処理
    chatAppLink.addEventListener('mouseenter', function() {
      console.log("ユーザーがアプリに興味を持ったようです！");
      // リンクの文字色を赤くする
      chatAppLink.style.color = 'red';
      // 下線を消す
      chatAppLink.style.textDecoration = 'none';
    });

    // マウスが離れた時に実行される処理
    chatAppLink.addEventListener('mouseleave', function() {
      // 色と下線を元に戻す
      chatAppLink.style.color = ''; // CSSで設定した色に戻る
      chatAppLink.style.textDecoration = ''; // CSSで設定した下線に戻る
    });
  }
};
