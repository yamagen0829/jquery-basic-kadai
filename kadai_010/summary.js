$(function() {
  // 文字色変化をクリックした場合、targetの色が変わる 
  $('#change-color').on('click',function(){
    $('#target').css('color', 'red');
  });
  // 文字内容変化をクリック場合、targetの文字が変わる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  // フェードアウトをクリックするとtargetがフェードアウトする
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
   // フェードインをクリックするとtargetがフェードインする
   $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});