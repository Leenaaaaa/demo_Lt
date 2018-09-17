$(function() {
    // 恢复A元素跳转
    $('body').on('tap','a',function() {
        mui.openWindow({
            url: $(this).attr('href')
        });
    });
});

// 切割 获取地址栏中的参数
function getParamsByUrl(url,name) {
    var params = url.substr(url.indexOf('?') + 1);
    console.log(params);
    var param = params.split('&');
    console.log(param);
    for (var i = 0; i < param.length; i++) {
        var current = param[i].split('=');
        console.log(current);

        if(current[0] == name) {
            return current[1];
        }


    }
    return null;
}