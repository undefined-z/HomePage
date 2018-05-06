/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/28
 */
var globalConfig = (function () {
    var config = {
        baseUrl: 'js',
        modal: {
            text: "lib/bower_components/text/text",
            app: 'modal/app/app',
            demo:'modal/demo/demo',
            util: 'system/util',
            information: 'modal/information/information',
            notfound: 'modal/notfound/notfound',
            userInfo:'modal/userInfo/userInfo',
            indexPage: 'modal/indexPage/indexPage',
            cat: 'modal/cat/cat',
            meny:'system/meny',
            initMenu:'system/initMenu',
            eduction:'modal/education/education'
        },
        shim: {
         /*   initMenu:{
                deps:[],
                exports:'Meny'
            }*/
        },
        menu:[
            {name:'首页', href:'indexPage'},
            {name:'个人信息', href:'information'},
            {name:'技术栈', href:'technology'},
            {name:'首页', href:'indexPage'},
            {name:'首页', href:'indexPage'},
            {name:'首页', href:'indexPage'},
        ]


    }

    return {
        get: function (name) {
            return config[name] ? config[name] : null;
        }
    }
})();