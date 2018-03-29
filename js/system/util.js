/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/28
 */
define([], function () {
    var Z = {
        info: 'v1.0@zhaohongyu',
        extend: function (sub, Parent) {
            var Temp = function () {
            }
            Temp.prototype = Parent.prototype;
            sub.prototype = new Temp();
            sub.prototype.constructor = sub;
        },
        $mainContainer:$('#mainContainer')

    };
    window.Z = Z;
    return Z;
});