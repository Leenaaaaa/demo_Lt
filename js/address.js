$(function() {
    // 获取用户存储的收获地址
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            console.log(res);
            var html = template('addressTpl',{result: res});
            //console.log(html)
            $('#address-box').html(html);
        }

    })
})