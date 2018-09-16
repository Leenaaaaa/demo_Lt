/**
 * Created by beiqi on 2018/9/15.
 */
$(function() {
    $('#modify-btn').on('tap', function(){
        var originPass = $('[name="originPass"]').val().trim();
        var newPass = $('[name="newPass"]').val().trim();
        var confirmNewPass = $('[name="confirmNewPass"]').val().trim();
        var vCode = $('[name="vCode"]').val().trim();
        // 验证密码
        var reg = /^[A-Za-z0-9]{6,20}$/;
        if (!reg.test(originPass)) {
            mui.toast('请输入6-20位字母数字组合的密码');
            return;
        }
        if(newPass != confirmNewPass){

            mui.toast('两次输入的密码不一致');

            return;

        }

        // 如果用户输入的信息都合理 那么就要跳转
        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: originPass,
                newPassword: newPass,
                vCode: vCode
            },
            success:function(res) {
                //console.log(res);
                if(res.success) {
                    mui.toast('修改密码成功');
                    setTimeout(function() {
                        location.href = "login.html";
                    },1000)
                }
            }
        })

        // 发送修改密码请求
    })

    // 获取认证码
    $('#getCode').on('tap',function() {
        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success:function(res) {
                console.log(res.vCode);
            }
        })
    })

})