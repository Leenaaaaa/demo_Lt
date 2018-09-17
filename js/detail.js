$(function() {
    // 库存
    var KCnum = 0;
    var size = null;
    var id = getParamsByUrl(location.href,'id');
    var  productId = 0;

    //console.log(id);
    $.ajax({
        url:"/product/queryProductDetail",
        type: 'get',
        data:{
            id: id
        },
        success:function(res) {
            console.log(res)
            KCnum=res.num;
            productId = res.id;
            var html = template("productTpl",res);
            //console.log(html)
            $('.mui-slider').html(html);
            // 轮播图初始化
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval:1000
            });
        }
    })
    $('.mui-slider').on('tap','.size span',function() {
        $(this).addClass('active').siblings().removeClass('active');
        //
        size = $(this).html();
    })


    $('.mui-slider').on('tap','#increase',function() {

        var num = $('#inp').val( );
        num++;
        if(num>KCnum) {
            num=KCnum;
        }
        $('#inp').val(num);
    })
    $('.mui-slider').on('tap','#reduce',function() {
        var num = $('#inp').val( );
        num--;
        if(num<1) {
            num=1;
        }
        $('#inp').val(num);

    })


    $('.mui-slider').on('tap','#addCar',function() {
        if(!size) {
            mui.toast('请选择尺码')
            return;
        }
        $.ajax({
            url:'/cart/addCart',
            type:'post',
            data:{
                productId: productId,
                    num: KCnum,
                    size: size
            },
            success:function(res) {
                console.log(res)
                if(res.success) {
                    mui.confirm('加入购物车成功',function(message) {
                        //console.log(message)
                        if(message.index == 1) {
                            // 跳转到购物车
                            location.href = './cart.html';
                        }
                    });
                }
            }
        })
    })


})



