window.onload=function(){
	var ul=document.getElementsByTagName('ul');
	var text=document.getElementById('text');
	var box=document.getElementById('box');
	var temp=[];

	text.onfocus=function(){
		box.style.display='block';
	}

	//渲染热门城市
	for (var i = 0; i < cityData.hot.length; i++) {
		temp.push('<li>'+cityData.hot[i].name+'</li>')
	}
	ul[0].innerHTML=temp.join('');

	//单击事件
	var lis=ul[0].getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick=function(){
			text.value=this.innerHTML;
		}
	}

	//渲染省份
	var arr=[];
	for (var j = 0; j < cityData.province.length; j++) {
		arr.push('<li>'+cityData.province[j].name+'</li>');
	}
	ul[1].innerHTML=arr.join('')+'<label>清空</label>';


	//单击哪个li，只让当前盒子显示，其他隐藏
	var li=ul[1].getElementsByTagName('li');			
	var brr=[];
	for (var x = 0; x < li.length; x++) {
		brr.push(li[x].innerHTML);
	}

	function back(){
		for (var y = 0; y < li.length; y++) {
			li[y].innerHTML=brr[y];			
		}
	}

	//单击li创建一个盒子，把所有省份放到盒子里
	for (var m = 0; m < li.length; m++) {
		li[m].index=m;
		li[m].onclick=function(){
			var str='';
			back();			
			for (var n = 0; n < cityData.province.length; n++) {
				if(this.innerHTML==cityData.province[n].name){
					for (var k = 0; k < cityData.province[n].city.length; k++) {
						var newdiv=document.createElement('div');
							 newdiv.className='hv';
						    str+='<span>'+cityData.province[n].city[k].name+'</span>';
					}
				}								
			}
			newdiv.innerHTML=str;
			this.appendChild(newdiv);	
			var span=ul[1].getElementsByTagName('span');
			for (var l = 0; l < span.length; l++) {
				span[l].onclick=function(){
					text.value=this.innerHTML;
					box.style.display='none';
				}
			}

		}
	}
	//清空
	var label=ul[1].getElementsByTagName('label')[0];
	label.onclick=function(){
		for (var i = 0; i < li.length; i++) {
			li[i].style.display='none';
		}
	}

}