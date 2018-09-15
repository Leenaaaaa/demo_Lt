/**
 * Created by beiqi on 2018/9/15.
 */
$(function() {
    $('#login-btn').on('tap',function() {
        var username = $('[name="username"]').val().trim();
        var password = $('[name="password"]').val().trim();
        if(!username){
            mui.toast('请输入用户名');
            return;

        }
        // 验证密码
        var reg = /^[A-Za-z0-9]{6,20}$/;
        if (!reg.test(password)) {
            mui.toast('请输入6-20位字母数字组合的密码');
            return;
        }
        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            beforeSend: function() {
                $('#login-btn').html('正在登录...');
            },
            success:function(res) {
                mui.toast('登录成功');
                $('#login-btn').html('登录');
                //console.log(res);
                setTimeout(function() {
                    location.href = './user.html';
                },2000)
            }

        })
    })

})