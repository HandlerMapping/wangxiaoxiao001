$(function () {
    $("#djBtn").click(function (){
        /*
            冠以同步和异步：
            设置
                async:true 异步
                    通过管擦得到结果，下面alert弹框没有等到上面的ajax执行完毕，就执行了
                    全程两根线程，一根主线程负责执行方法中普通的代码，一根负责执行ajax
                    两根线程彼此之间项目独立，互相是不受影响的
                async：false同步
                    通过观察得到结果，下面的laert弹框必须要等到上面的ajax执行完毕后，才能够执行全程
                    是一根线程，线程是按照代码从上往下执行的下面代码必须等到上面代码完毕后才能执行

                    一般使用异步，特殊情况使用同步
         */
        $.ajax({
            url:"dome3",//访问后台servlet地址
            // data:{
            //     "key1":"value1",
            //     "key2":"value2"
            // },//表示要给后台传递的参数
            type:"get",//请求方式GET和POST
            dataType:"json",//从后台接收数据的方式，text,接收普通文本，json:接收json格式的文本
            async:true,
            success:function (data){//回调函数(该函数的执行时机是后台执行完毕后，该函数才会执行)
                //data：从后台响应回来的数据
                alert(data)
                $("#msg").html(data)
            }
        })
        alert(123);
    })


})