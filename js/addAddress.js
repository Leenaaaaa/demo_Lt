/**
 * Created by beiqi on 2018/9/16.
 */
$(function() {
    // 创建PICKER选择器
    var picker = new mui.PopPicker({layer:3});
    // 为选择器添加数据
    picker.setData(cityData);

    $('#selectCity').on('tap',function() {
        picker.show(function(selectItems) {
            //console.log(selectItems[0].text);
            //console.log(selectItems[1].text);
            //console.log(selectItems[2].text);
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        });
    })

    // 添加收获地址
    $('#addAddress').on('tap',function() {
        var username = $('[name="username"]').val().trim();
        var postCode = $('[name="postCode"]').val().trim();
        var city = $('[name="city"]').val().trim();
        var detail = $('[name="detail"]').val().trim();

        if(!username) {
            mui.toast('请输入收获人姓名');
            return;
        }
        if(!postCode) {
            mui.toast('请输入邮政编码');
            return;
        }
        if(!city) {
            mui.toast('请输入省市区');
            return;
        }
        if(!detail) {
            mui.toast('请输入详细地址');
            return;
        }
        $.ajax({
            type:'post',
            url: '/address/addAddress',
            data: {
                address: city,
                addressDetail: detail,
                recipients: username,
                postcode: postCode

            },
            success:function(res) {
                //console.log(res);
                if(res.success) {
                    mui.toast('地址添加成功');
                    setTimeout(function() {
                        location.href = "./address.html";
                    },2000)

                }
            }
        })
    });
})