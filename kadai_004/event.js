// loadイベント
$(window).on('load',function() {
  console.log('loadイベントが発生しました');
});
// scrollイベント
$(function() { 
   $(document).on('scroll', function(){
      console.log('scrollイベントが発生しました');
   });
 });