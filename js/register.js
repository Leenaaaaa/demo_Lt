/**
 * Created by beiqi on 2018/9/15.
 */
$(function() {
    // 给注册按钮注册轻敲事件
    $('#register-btn').on('tap',function() {
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();

    })

    // 给获取验证码绑定事件 获取注册验证码
    $('#getCode').on('tap',function() {
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success:function(res) {
                console.log(res.vCode);
            }

        })
    })
})