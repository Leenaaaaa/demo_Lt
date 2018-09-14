/**
 * Created by beiqi on 2018/9/14.
 */
$(function() {
    $('#search-btn').on('tap',function() {
        var keyword = $(this).siblings('input').val();
        if(keyword) {
            location.href = "search-result.html?keyword="+keyword;
        }else {
            alert('请输入关键字');
        }
    })
})