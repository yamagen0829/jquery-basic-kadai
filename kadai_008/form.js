$(function () {
  // class属性のbtnがクリックされたら
  $('.btn').on('click', function () {
    // テキストボックスに表示させる
     $('.text-box').val('クリックしました！');
  });
});