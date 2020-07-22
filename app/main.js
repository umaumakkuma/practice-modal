// 即時関数 スコープを狭める
(function () {
  // 厳格なルールを用いる
  "use strict";

  // data-modal-trigger属性を持つ要素をすべて取得
  const modalTrigger = document.querySelectorAll('[data-modal-trigger]');

  // 取得した要素一つ一つに同じ処理を繰り返す
  for (let i = 0; i < modalTrigger.length; i++) {
    // 要素をクリックしたさいに toggleModal 関数を発火させる
    modalTrigger[i].addEventListener('click', toggleModal);
  }

  function toggleModal(e) {
    // クリックした要素とイベント発火した要素が違う場合
    if (e.target !== e.currentTarget) {
      // 処理終了
      return;
    }

    // クリックした要素のdata-modal-trigger属性の 属性値 を取得する
    const modalTriggerVal = e.target.getAttribute('data-modal-trigger');

    // 取得した属性値(属性はdata-modal-target)を元に要素を取得
    const modalTarget = document.querySelector(`[data-modal-target=${modalTriggerVal}]`);

    // 取得した要素のクラスを切り替える
    modalTarget.classList.toggle('show-modal');
  }
}());
