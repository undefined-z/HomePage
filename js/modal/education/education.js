define(['text!../js/modal/education/education.html'],function (html) {
    function init(param) {
        alert(param.urlParam.param);
    }
    return{
        init:init,
        html:html
    }
});
