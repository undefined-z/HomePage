requirejs.config({
    baseUrl: globalConfig.get('baseUrl'),    //相对于引入该js的html的路径
    paths:globalConfig.get('modal')
});

require(['app', 'util', 'system/initCanvas', 'notfound', 'indexPage','system/initMenu'],
    function (app, util, canvas, notfound, indexPage,menu) {
        var meny=menu.init();
  /*      meny.addEventListener( 'open', function(){ console.log( 'open' ); } );
        meny.addEventListener( 'close', function(){ console.log( 'close' ); } );*/
        app.init();
        window.canvas = canvas;
        //Z.initModal(indexPage);
        canvas.star1();

    });