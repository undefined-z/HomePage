/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/4/7
 */
define(['text!../js/modal/demo/demo.html'], function () {
    var html='<iframe class="" id="iframe"  frameborder="0" height="100%" width="100%"></iframe>';
    var $html=$(html);
    function init(param) {
        $html.attr('src','../../../githubShow/project/demo/'+param.urlParam[0]+'.html');
    }
    return {
        init: init,
        html:$html[0]
    }
});