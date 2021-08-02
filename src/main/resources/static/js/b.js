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
            url:"/dome2",
            type:"get",
            dataType:"json",
            success:function (data){
                $.each(data,function (ia,n){
                    $("#wahaha").append("学员:<br/>")
                        .append("编号:<span id=\"id\"></span>"+n.id+"<br/>")
                        .append("姓名:<span id=\"name\"></span>"+n.name+"<br/>")
                        .append("年龄:<span id=\"age\"></span>"+n.age+"<br/>")
                        .append("<br/><br/>")

                })
            }
        })
    })

})