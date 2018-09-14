$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
    /* 获取一级分类*/
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response) {
            //console.log(response);
            var html = template('category-first', {result: response.rows});
            //console.log(html);
            $('#links').html(html);

            // 如果一级分类有数据的话  让页面加载就显示有数据
            if(response.rows.length) {
                $('#links').find('a').eq(0).addClass('active');
                // 获取第一个一级分类的ID
                var id = response.rows[0].id;
                //$.ajax({
                //    url:'/category/querySecondCategory',
                //    type:'get',
                //    data: {
                //        id: id
                //    },
                //    success: function(response) {
                //        console.log(response);
                //        var html = template('category-second', response);
                //        $('.brand-list').html(html);
                //    }
                //})
                getSecondCategory(id);
            }


        }
    })

    /* 获取二级分类*/
    $('#links').on('tap','a',function() {
        //获取当前点击的一级分类的ID
        var id = $(this).attr('data-id');
        $(this).addClass('active').siblings().removeClass('active');
        //$.ajax({
        //    url:'/category/querySecondCategory',
        //    type:'get',
        //    data: {
        //        id: id
        //    },
        //    success: function(response) {
        //        console.log(response);
        //        var html = template('category-second', response);
        //        $('.brand-list').html(html);
        //    }
        //})
        // 根据一级分类ID获取二级分类
        getSecondCategory(id);
    });
});

function getSecondCategory(id) {
    $.ajax({
        url:'/category/querySecondCategory',
        type:'get',
        data: {
            id: id
        },
        success: function(response) {
            console.log(response);
            var html = template('category-second', response);
            $('.brand-list').html(html);
        }
    })
}
