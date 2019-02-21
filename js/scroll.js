$(function() {
  // 右下の上部へ戻るボタン
  var TopBtn = $('#PageTopBtn');    
  TopBtn.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      TopBtn.slideDown();
    } 
    else {
      TopBtn.slideUp();
    }
  });
  TopBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 'swing');
    return false;
  });

  // ページ内リンク
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
