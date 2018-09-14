$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
    /* ��ȡһ������*/
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response) {
            //console.log(response);
            var html = template('category-first', {result: response.rows});
            //console.log(html);
            $('#links').html(html);

            // ���һ�����������ݵĻ�  ��ҳ����ؾ���ʾ������
            if(response.rows.length) {
                $('#links').find('a').eq(0).addClass('active');
                // ��ȡ��һ��һ�������ID
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

    /* ��ȡ��������*/
    $('#links').on('tap','a',function() {
        //��ȡ��ǰ�����һ�������ID
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
        // ����һ������ID��ȡ��������
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
