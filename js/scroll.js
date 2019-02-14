$(function() {
    var TopBtn = $('#PageTopBtn');    
    TopBtn.hide();
    //スクロール位置が100でボタンを表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 3000) {
            TopBtn.slideDown();
        } 
        else {
            TopBtn.slideUp();
        }
    });
    //ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});