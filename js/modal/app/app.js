define(['../js/modal/index/index','../js/modal/test/test'], function (index,test) {   //define的路径相对于data-main的文件路径
    function init() {
     //   alert('app模块')
    //    index.init();
        test.init();
    }

    return {
        init: init
    }
});