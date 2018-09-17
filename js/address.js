$(function() {
    // 获取用户存储的收获地址

    // 存储收获地址
    var address = null;
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            console.log(res);
            address = res;
            var html = template('addressTpl',{result: res});
            //console.log(html)
            $('#address-box').html(html);
        }

    })

    // 删除
    $("#address-box").on('tap','.delete-btn',function() {
        var id = $(this).attr('data-id');
        var li = this.parentNode.parentNode;
        //var id = this.getAttribute('data-id');
        console.log(id);
        mui.confirm('确定要删除吗',function(message) {
            //console.log(message)
            if(message.index == 1) {
                // 确定 执行删除操作
                $.ajax({
                    type:'post',
                    url: ' /address/deleteAddress',
                    data: {
                        id: id
                    },
                    success:function(res) {
                        if(res.success) {
                            // 如果删除成功就重新加载当前页面
                            location.reload();

                        }
                    }
                })

            }else {
                // 点击取消
                mui.swipeoutClose(li);

            }
        })
    })

    // 编辑
    $("#address-box").on('click','.edit-btn',function() {
        var id = $(this).attr('data-id');
        //console.log(address);
        for (var i = 0; i < address.length; i++) {
            if(address[i].id == id) {
                localStorage.setItem('editAddress',JSON.stringify(address[i]));
                // 终止循环
                break;
            }

        }
        // 跳转到编辑页面
        location.href = "addAddress.html?isEdit=1";
    });


});