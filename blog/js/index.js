//背景
//主页
function webchange(){
	var webLi = $('.web-demo li');
	var webinfo = $('.more-web');
	webinfo.hide();
	webinfo.eq(0).show();
	webLi.each(function(i){
		webLi.eq(i).click(function(){
			webLi.removeClass("web-active");
			$(this).addClass("web-active");
			webinfo.hide();
			webinfo.eq(i).show();
		})
	})
}
function bannerchange(){
	var banindex = 0;
	var imgLi = $(".banner-img li");
	var potLi = $(".pointer li");
	imgLi.hide();
	imgLi.eq(0).show();
	var autoChange = setInterval(function(){
		if(banindex < imgLi.length-1){
			banindex++;
		}else{
			banindex = 0;
		}
		changeTo(banindex);
	},2500)
	function changeTo(num){
		imgLi.removeClass("imgOn").hide().eq(num).fadeIn(1500).addClass("imgOn");
		potLi.removeClass("active").eq(num).addClass("active");
	}
	potLi.each(function(item){
		$(this).click(function(){
			clearInterval(autoChange);
			changeTo(item);
			banindex = item;
			autoChange = setInterval(function(){
				if(banindex < imgLi.length-1){
					banindex++;
				}else{
					banindex = 0;
				}
				changeTo(banindex);
			},2500)
		});
	});
}
	//热门精选
function hotscroll(){
	var oUl = document.getElementById('hot-list');
	var oUl2 = document.getElementById('hot-btn');
	var hotLi = oUl.getElementsByTagName('li');
	var btnLi = oUl2.getElementsByTagName('li');
	var j=0
	hot_clear();
	hot_change();

	oUl.timer = setInterval(function(){
		for(var i=0;i<hotLi.length;i++){
			hot_clear();
		}	
		j++;
		if(j==4){
			j=0;
		}
		hot_change();
	},3000)
	for(var i=0;i<btnLi.length;i++){
		btnLi[i].index = i;
		btnLi[i].onclick = function(){
			hot_clear();
			hotLi[this.index].style.display = 'block';
			btnLi[this.index].className = 'btn-active';
			j = this.index;
		}
	}
	function hot_clear(){
		for(var i=0;i<hotLi.length;i++){
			hotLi[i].style.display = 'none';
			btnLi[i].className = '';
		}
	}
	function hot_change(){
		hotLi[j].style.display = 'block';
		btnLi[j].className = 'btn-active';
	}

}

//webstudy
function studychange(){
	var stuDe = $(".study-demo");
	stuDe.hide();
	stuDe.eq(0).show();
	var stuLi = $(".study-list li")
	stuLi.each(function(i){
		stuLi.eq(i).click(function(){
			stuLi.removeClass("stuli-active");
			$(this).addClass("stuli-active");
			stuDe.hide();
			stuDe.eq(i).show();
		})
	})
}

//board
function board(){
	var oCom = $(".comment1");
	var oCom2 = $(".comment2");
	var oRe = $(".board-right");
	var oRe2 = $(".re-message-input");
	var newH = 0;
	oCom.each(function(i){
		oCom.eq(i).click(function(){
			oRe.eq(i).slideToggle();
		})
	})
	oCom2.each(function(i){
		oCom2.eq(i).click(function(){
			oRe2.eq(i).toggle();
			var bgH = $("#artical-main").innerHeight();
			$(".container").height(bgH+50);
		})
		
	})
	
}
//resume
function resumeShow(){
	var reSpan = $(".s1-inner ul li")
	var reP = $(".s1-inner ul li p")
	reSpan.each(function(i){
		reSpan.eq(i).mouseenter(function(){
			reP.eq(i).slideDown();
		})
		reSpan.eq(i).mouseleave(function(){
			reP.slideUp();
		})
	})
}



