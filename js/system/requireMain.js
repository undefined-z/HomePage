requirejs.config({
    baseUrl: 'js',    //相对于引入该js的html的路径
    paths: {
        text : "lib/bower_components/text/text",
        app: 'modal/app/app',
        util: 'system/util',
        information: 'modal/information/information',
        notfound: 'modal/notfound/notfound'
    }
});

require(['app', 'util', 'system/initCanvas', 'notfound', 'system/initMenu'],
    function (app, util, canvas, notfound) {
        app.init();
        window.canvas = canvas;
        Z.$mainContainer.html(notfound.html);
        canvas.star1();
    });