var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=590;
var n=0;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			n=this.index;
			if(i>n){
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}else{
				ctbox[i].style.left=i*titleWidth+'px';
			}
		}
	}
}
/*
点击的序号记为n，则
ctbox序号小于等于n的时候，
	ctbox的left值计算公式为序号*titleWidth
ctbox序号大于等于n的时候，
	ctbox的left值计算公式为序号*titleWidth+contentWidth
点击0号标题
0|650px 710px 770px
点击1号标题
0 60px|710px 770px
点击2号标题
0 60px 120px|770px
点击3号标题
0 60px 120px 180px|
 */