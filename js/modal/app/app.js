define(['../js/modal/test/test'], function (test) {   //define的路径相对于data-main的文件路径

    function init() {
        //   test.init();
        initPage();
        initEvent();
    }
    function initPage() {
        initModalByHash();
    }
    function initEvent() {
        $(window).on('hashchange', function () {
            initModalByHash();
        })
    }
    function initModalByHash(){
        var locationHash=window.location.hash;
        var paramIndex=locationHash.lastIndexOf('?');
        var hash,param='';
        if (paramIndex===-1){
            hash = locationHash.substring(1);
        }else {
            hash = locationHash.substring(1,paramIndex);
            param=locationHash.substring(paramIndex+1).split(';');
        }

        Z.initModal(hash,param);
    }
    return {
        init: init
    }
});