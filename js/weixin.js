var featureImgData=[];
function featureImage(data_all){
	featureImgData=data_all.data.list
}
featureImage({
	"errno": 0,
    "data": {
        "list": [
	        {
	            "featureImg0":"../imgs/gnico_01.png",
	            "featureImg1":"../imgs/gnico_01_1.png",
	            "featureWeb":"微网站" ,
	            "featureWords1":"5分钟轻松建站",
	            "featureWords2":"打造酷炫微官网"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_02.png",
	            "featureImg1":"../imgs/gnico_02_1.png",
	            "featureWeb":"微商城" ,
	            "featureWords1":"小微信也有大商城",
	            "featureWords2":"电商轻松就能走入微信"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_03.png",
	            "featureImg1":"../imgs/gnico_03_1.png",
	            "featureWeb":"微信会员卡" ,
	            "featureWords1":"方便携带  永不挂失",
	            "featureWords2":"消费积分  一卡配备"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_04.png",
	            "featureImg1":"../imgs/gnico_04_1.png",
	            "featureWeb":"微团购" ,
	            "featureWords1":"微团购适合商家搞团购活动及",
	            "featureWords2":"秒杀活动，能快速提升销售业绩"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_05.png",
	            "featureImg1":"../imgs/gnico_05_1.png",
	            "featureWeb":"微信刮刮卡" ,
	            "featureWords1":"震撼有趣的互动体验",
	            "featureWords2":"带动周边朋友一起分享"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_06.png",
	            "featureImg1":"../imgs/gnico_06_1.png",
	            "featureWeb":"微信优惠券" ,
	            "featureWords1":"先到先得抢票抽奖",
	            "featureWords2":"爆炸式的增长效果"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_07.png",
	            "featureImg1":"../imgs/gnico_07_1.png",
	            "featureWeb":"微相册" ,
	            "featureWords1":"各行各业",
	            "featureWords2":"照片展现轻松搞定"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_08.png",
	            "featureImg1":"../imgs/gnico_08_1.png",
	            "featureWeb":"自定义菜单" ,
	            "featureWords1":"无需定制  完全自定义",
	            "featureWords2":"无需触发  完全可视化"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_09.png",
	            "featureImg1":"../imgs/gnico_09_1.png",
	            "featureWeb":"微信LBS位置回复" ,
	            "featureWords1":"粉丝发送自己地理位置",
	            "featureWords2":"查找到周边的商家的位置"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_10.png",
	            "featureImg1":"../imgs/gnico_10_1.png",
	            "featureWeb":"微信大转盘" ,
	            "featureWords1":"吸引用户参与",
	            "featureWords2":"增强用户沉淀"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_11.png",
	            "featureImg1":"../imgs/gnico_11_1.png",
	            "featureWeb":"微订单" ,
	            "featureWords1":"5分钟轻松建站",
	            "featureWords2":"预约、酒店订房、包厢预订等"          	
	        },
	        {
	            "featureImg0":"../imgs/gnico_12.png",
	            "featureImg1":"../imgs/gnico_12_1.png",
	            "featureWeb":"微统计" ,
	            "featureWords1":"折线图清晰查询数据",
	            "featureWords2":"助理企业营销"          	
	        }
        ]
    }
});
window.onload=function(){
	var featureImg=document.getElementById('featureImg');
	creatEfeatureImg();
	function creatEfeatureImg(){
		for (var i = 0; i < featureImgData.length; i++) {
			var tureImgli=document.createElement("li");
			tureImgli.className="tureImgli";
			var tureImgliA=document.createElement("a");
			tureImgliA.className="tureImgliA";
            tureImgli.appendChild(tureImgliA);
			// 创建图片
			var liAImg=document.createElement("img");
			liAImg.src=featureImgData[i].featureImg0;
			liAImg.className="liAImg";
			tureImgliA.appendChild(liAImg);
            //创建商户名字
            var liAImgBusiness=document.createElement("p");
            liAImgBusiness.className="liAImgBusiness";
            liAImgBusiness.innerHTML=featureImgData[i].featureWeb;
            tureImgli.appendChild(liAImgBusiness);
		    featureImg.appendChild(tureImgli);
		    //创建商户简介
		    var liAImgWords=document.createElement("p");
            liAImgWords.className="liAImgWords";
            liAImgWords.innerHTML=featureImgData[i].featureWords1;
            tureImgli.appendChild(liAImgWords);
		    //创建商户分享
		    var liAImgWords2=document.createElement("p");
            liAImgWords2.className="liAImgWords2";
            liAImgWords2.innerHTML=featureImgData[i].featureWords2;
            tureImgli.appendChild(liAImgWords2);
		    featureImg.appendChild(tureImgli);
		};
		var liAImgChange=document.getElementsByClassName("liAImg");
		var tureImgliChange=document.getElementsByClassName("tureImgli");
		for (var i = 0; i < tureImgliChange.length; i++) {
			tureImgliChange[i].index=i;
            tureImgliChange[i].onmouseover=function(){
            	var x=this.index;
            	for (var s= 0; s < tureImgliChange.length; s++) {
            		liAImgChange[s].src=featureImgData[s].featureImg0;
            	};
            	liAImgChange[x].src=featureImgData[x].featureImg1;
            }
            tureImgliChange[i].onmouseout=function(){
            	for (var s= 0; s < tureImgliChange.length; s++) {
            		liAImgChange[s].src=featureImgData[s].featureImg0;
            	};
            }
		};
	}
	
}