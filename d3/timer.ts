/**
* ʹ��js��setInterval �� setTimeout����Ϊjs�ǵ��̵߳ģ������޷�����Ԥ����Ч��ִ�У�
* ��ʹ��d3.js��timer������ʵ����һЧ��
*/
let deg = 0;
d3.timer( () => {
   deg = deg + this.speed;
   this.gOfAll.attr('transform', 'rotate(' + (deg) + ',' + rotateCenterX + ',' + rotateCenterY + ')');
});