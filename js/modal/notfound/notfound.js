/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/29
 */
define(["text!../js/modal/notfound/notfound.html"], function (html) {
    function initEvent() {
        $('#toInfo').on('click',function (e) {
            Z.initModal('eduction',{param:'aaaaa'});
            Z.setUrl('eduction');
        });
    }
    return {
        html: html,
        htmlName:'notfound',
        init:function () {
            initEvent();
        }
    }
});