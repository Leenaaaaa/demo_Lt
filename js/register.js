/**
 * Created by beiqi on 2018/9/15.
 */
$(function() {
    // 给注册按钮注册轻敲事件
    $('#register-btn').on('tap',function() {
        var username = $('[name="username"]').val().trim();
        var mobile = $('[name="mobile"]').val().trim();
        var password = $('[name="password"]').val().trim();
        var againPass = $('[name="againPass"]').val().trim();
        var vCode = $('[name="vCode"]').val().trim();

        if(!username){
            mui.toast('请输入用户名');
            return;

        }
        // 验证手机号码
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(mobile)) {
            mui.toast('请输入合法的手机号码');
            return;
        }

        // 验证密码
        var reg = /^[A-Za-z0-9]{6,20}$/;
        if (!reg.test(password)) {
            mui.toast('请输入6-20位字母数字组合的密码');
            return;
        }


        if(password != againPass) {
            mui.toast('两次密码不一致');
            return;
        }
        // 用户输入的内容都合法 就要调用注册接口了
        $.ajax({
            type:'post',
            url: '/user/register',
            data:{
                username: username,
                mobile: mobile,
                password: password,
                vCode: vCode
            },
            success:function(res) {
                //console.log(res)
                setTimeout(function() {
                    location.href = './login.html';
                },2000)

            }
        })



    });

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