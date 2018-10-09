/**
* 使用js的setInterval 和 setTimeout会因为js是单线程的，导致无法按照预定的效果执行，
* 可使用d3.js的timer函数来实现这一效果
*/
let deg = 0;
d3.timer( () => {
   deg = deg + this.speed;
   this.gOfAll.attr('transform', 'rotate(' + (deg) + ',' + rotateCenterX + ',' + rotateCenterY + ')');
});