$(function() {
    // ��ȡ�û��洢���ջ��ַ
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