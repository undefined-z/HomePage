/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/28
 */
define([], function () {
    var Z = {
        /**
         * 组件信息
         */
        info: 'v1.0@zhaohongyu',
        /**
         * 继承
         * @param sub
         * @param Parent
         */
        extend: function (sub, Parent) {
            var Temp = function () {
            }
            Temp.prototype = Parent.prototype;
            sub.prototype = new Temp();
            sub.prototype.constructor = sub;
        },
        /**
         * 主容器
         */
        $mainContainer: $('#mainContainer'),
        /**
         * 菜单容器
         */
        $mainMenu: $('#mainMenu'),
        /**
         * 卸载模块
         * @param modalName
         */
        destroyModal: function (modalName) {
            if (modalName) {
                $('[data-modal-name=' + modalName + ']').remove();
            } else {
                this.$mainContainer.empty();
            }

        },
        setUrl: function (name) {
            var url = location.origin + location.pathname + location.search + '#' + name;
            location.href = url;
        },
        initModal: function (hash, param) {
            this.destroyModal();
            //var path='modal/'+hash+'/'+hash;
            var hash = hash;
            if (!globalConfig.get('modal')[hash] && hash !== '') {
                hash = 'notfound';
            } else if (hash === '') {
                hash = 'indexPage';
            }
            require([hash], function (modal) {
                Z.$mainContainer.html(modal.html);
                modal.init({urlParam: param});
            });


        }

    };
    window.Z = Z;
    return Z;
});