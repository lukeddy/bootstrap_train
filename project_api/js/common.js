/**
 * Created by tangzq on 2014/9/30.
 */
$(document).ready(function() {
//菜单选中
    $('#navgation').load("menu.html", function () {
        var selectedID="menu1";
        if(location.href.indexOf("#")>0){
            var query=location.href.split("#");
            selectedID =query[1];
        }
        console.log("load menu successfully,bbb "+selectedID);
        $('a[href$="'+selectedID+'"]').addClass('active');
    });


// 回到顶部
// 滚动窗口来判断按钮显示或隐藏
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.back-to-top').fadeIn(100);
        } else {
            $('.back-to-top').fadeOut(100);
        }
    });
// jQuery实现动画滚动
    $('.back-to-top').click(function(event) {
        event.preventDefault();//这里很重要
        $('html, body').animate({scrollTop: 0}, 300);
    });
});
