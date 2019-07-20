function fn(a){//a��ȡ�������a��ǩ��id
	console.log(1)
		var arr=[];
		//ͨ��id��ȡa��ǩ
		var a1=document.getElementById('sy');
		var a2=document.getElementById('cp');
		var a3=document.getElementById('dt');
		var a4=document.getElementById('al');
		var a5=document.getElementById('gy');
	    //��id���������
		arr.push(a1);
		arr.push(a2);
		arr.push(a3);
		arr.push(a4);
		arr.push(a5);
		var str=JSON.stringify(arr);
		console.log(str);
	 //�������飬�������ʽ��ʼ��
	for(var i=0;i<arr.length;i++){
		arr[i].className="nav-link";

	}
	//�������ʽ�ı仯
		var a0=document.getElementById(a);
		a0.className+=" a_onclick";

	}
	 
	 
	
