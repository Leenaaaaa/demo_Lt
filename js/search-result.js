$(function() {
    var keyword = getParamsByUrl(location.href, 'keyword');

    $.ajax({
        url: '/product/queryProduct',
        type: 'get',
        data: {
            page: 1,
            pageSize: 6,
            proName: keyword
        },
        success:function(res){
            console.log(res);
            var html = template('searchTpl',res);
            console.log(html);
            $('#search-box').html(html);
        }
    })


})

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
