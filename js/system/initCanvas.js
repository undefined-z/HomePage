/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/29
 */
define([''], function () {
    function resetCanvas() {
        $('#canvas').remove();
        $('<canvas id="canvas" style="position: absolute"></canvas>').prependTo('body');
    }
    function star1() {
        resetCanvas();
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame
        })();
        var canvas = document.getElementById("canvas");
        var c = canvas.getContext("2d");

        var numStars = 1900;
        var radius = '0.' + Math.floor(Math.random() * 9) + 1;
        var focalLength = canvas.width * 2;
        var warp = 0;
        var centerX, centerY;

        var stars = [], star;
        var i;

        var animate = true;

        initializeStars();

        function executeFrame() {

            if (animate)
                requestAnimFrame(executeFrame);
            moveStars();
            drawStars();
        }

        function initializeStars() {
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            stars = [];
            for (i = 0; i < numStars; i++) {
                star = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    o: '0.' + Math.floor(Math.random() * 99) + 1
                };
                stars.push(star);
            }
        }

        function moveStars() {
            for (i = 0; i < numStars; i++) {
                star = stars[i];
                star.z--;

                if (star.z <= 0) {
                    star.z = canvas.width;
                }
            }
        }

        function drawStars() {
            var pixelX, pixelY, pixelRadius;

            // Resize to the screen
            if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initializeStars();
            }
            if (warp == 0) {
                c.fillStyle = "rgba(0,10,20,1)";
                c.fillRect(0, 0, canvas.width, canvas.height);
            }
            c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
            for (i = 0; i < numStars; i++) {
                star = stars[i];

                pixelX = (star.x - centerX) * (focalLength / star.z);
                pixelX += centerX;
                pixelY = (star.y - centerY) * (focalLength / star.z);
                pixelY += centerY;
                pixelRadius = 1 * (focalLength / star.z);

                c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
                c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
                //c.fill();
            }
        }

        executeFrame();
    }

    function star2() {
        resetCanvas();
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'),
            w = canvas.width = window.innerWidth,
            h = canvas.height = window.innerHeight,

            hue = 217,
            stars = [],
            count = 0,
            maxStars = 1200;

        var canvas2 = document.createElement('canvas'),
            ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2,
            gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#fff');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

// End cache

        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }

            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
        }

        var Star = function() {

            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 50000;
            this.alpha = random(2, 10) / 10;

            count++;
            stars[count] = this;
        }

        Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);

            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            }

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        }

        for (var i = 0; i < maxStars; i++) {
            new Star();
        }

        function animation() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
            ctx.fillRect(0, 0, w, h)

            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
            };

            window.requestAnimationFrame(animation);
        }

        animation();
    }
     function star3() {

         var canvas = document.getElementById('canvas'),
             ctx = canvas.getContext('2d'),
             w = canvas.width = window.innerWidth,
             h = canvas.height = window.innerHeight,

             hue = 217,
             stars = [],
             count = 0,
             maxStars = 1400;

// Thanks @jackrugile for the performance tip! http://codepen.io/jackrugile/pen/BjBGoM
// Cache gradient
         var canvas2 = document.createElement('canvas'),
             ctx2 = canvas2.getContext('2d');
         canvas2.width = 100;
         canvas2.height = 100;
         var half = canvas2.width/2,
             gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
         gradient2.addColorStop(0.025, '#fff');
         gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
         gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
         gradient2.addColorStop(1, 'transparent');

         ctx2.fillStyle = gradient2;
         ctx2.beginPath();
         ctx2.arc(half, half, half, 0, Math.PI * 2);
         ctx2.fill();

// End cache

         function random(min, max) {
             if (arguments.length < 2) {
                 max = min;
                 min = 0;
             }

             if (min > max) {
                 var hold = max;
                 max = min;
                 min = hold;
             }

             return Math.floor(Math.random() * (max - min + 1)) + min;
         }

         var Star = function() {

             this.orbitRadius = random(w / 2 - 50);
             this.radius = random(100, this.orbitRadius) / 10;
             this.orbitX = w / 2;
             this.orbitY = h / 2;
             this.timePassed = random(0, maxStars);
             this.speed = random(this.orbitRadius) / 100000;
             this.alpha = random(2, 10) / 10;

             count++;
             stars[count] = this;
         }

         Star.prototype.draw = function() {
             var x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX,
                 y = Math.cos(this.timePassed) * this.orbitRadius/2 + this.orbitY,
                 twinkle = random(10);

             if (twinkle === 1 && this.alpha > 0) {
                 this.alpha -= 0.05;
             } else if (twinkle === 2 && this.alpha < 1) {
                 this.alpha += 0.05;
             }

             ctx.globalAlpha = this.alpha;
             ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
             this.timePassed += this.speed;
         }

         for (var i = 0; i < maxStars; i++) {
             new Star();
         }

         function animation() {
             ctx.globalCompositeOperation = 'source-over';
             ctx.globalAlpha = 0.8;
             ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
             ctx.fillRect(0, 0, w, h)

             ctx.globalCompositeOperation = 'lighter';
             for (var i = 1, l = stars.length; i < l; i++) {
                 stars[i].draw();
             };

             window.requestAnimationFrame(animation);
         }

         animation();
     }
     function code1() {
         resetCanvas();
         var canvas=document.getElementById("canvas");
         var can=canvas.getContext("2d");
         var s=window.screen;//获取屏幕
         var w=canvas.width=s.width;//获取屏幕宽度
         var h=canvas.height=s.height;//获取屏幕高度

         can.fillStyle=color2();

         var words = Array(256).join("1").split("");
         //设置一个包含256个空元素的数组，join("1")用来把数组里的元素拼接成字符串，split("")过滤掉数组里的空元素

         setInterval(draw,50);


         // can.font="30px 微软雅黑"; //只设置一个不生效，一定要两个属性都设
         // //绘制实心的文本：绘制的文本，文本的坐标x，文本的坐标y
         // can.fillText("黑客帝国",100,100);
         // // setInterval(draw,50);



         function draw(){
             //can.fillRect()画一个实心矩形:坐标x，坐标y，矩形宽，举行高
             can.fillStyle='rgba(0,0,0,0.05)';
             can.fillRect(0,0,w,h);
             can.fillStyle=color2();
             words.map(function(y,n){
                 text=String.fromCharCode(Math.ceil(65+Math.random()*57)); //转换为键盘上值
                 x = n*10;
                 can.fillText(text,x,y)
                 words[n]=( y > 758 + Math.random()*484 ? 0:y+10 );
             });//数组元素的一个映射
         }

         //获取随机颜色，三种方法
         function color1(){
             var colors=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
             var color="";
             for( var i=0; i<6; i++){
                 //Math.random()产生一个0-1之间的小数
                 var n=Math.ceil(Math.random()*15);
                 color += "" + colors[n];
                 // console.log(color);
             }
             return '#'+color;
         }

         function color2(){
             var color = Math.ceil(Math.random()*16777215).toString(16);
             // for( var i=color.length; i<6; i++ ){
             // 	color = '0'+color;
             // }
             while(color.length<6){
                 color = '0'+color;
             }
             return '#'+color;
         }

         function color3(){
             return "#" + (function(color){
                 return new Array(7-color.length).join("0")+color;
                 //神奇的方法，总共字符串有6位，如果只产生了3位，则前面应该补三个0，在长度为7-3=4的空数组中利用join插入0，则为['',0,'',0,'',0,''],刚好三个0补在前面
             })((Math.random()*0x1000000 << 0).toString(16))
             // << 0 也是一种取整的方法
         }


     }
    return {
        star1: star1,
        star2: star2,
        star3:star3,
        code1:code1
    }
});