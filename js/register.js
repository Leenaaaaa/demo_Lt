/**
 * Created by beiqi on 2018/9/15.
 */
$(function() {
    // ��ע�ᰴťע�������¼�
    $('#register-btn').on('tap',function() {
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var againPass = $('[name="againPass"]').val();
        var vCode = $('[name="vCode"]').val();

    })

    // ����ȡ��֤����¼� ��ȡע����֤��
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