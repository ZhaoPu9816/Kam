$(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() >= 60) {
			$(".nav").css({
				"position": "fixed",
				"background": "white",
				"border-bottom": "1px solid #ccc",
				"height": "60px"
			})
			$(".logo-text").css({
				"display": "none"
			})
			$(".kam-head").css({
				"margin-top": "0px"
			})
			$(".kam-nav li").css({
				"height": "60px"
			})
			$(".kam-nav a").css({
				"line-height": "60px"
			})
			$(".kam-head-bg").css({
				"height": "485px"
			})
		} else {
			$(".nav").css({
				"position": "relative",
    			"z-index": "100",
    			"width": "100%",
    			"background": "none",
    			"border-bottom": "none",
    			"height": "100px"
			})
			$(".logo-text").css({
				"display": "inlink-block"
			})
			$(".kam-head").css({
				"margin-top": "25px"
			})
			$(".kam-nav li").css({
				"height": "100px"
			})
			$(".kam-nav a").css({
				"line-height": "100px"
			})
			$(".kam-head-bg").css({
				"height": "380px"
			})
		}
		
	})
})

$('.sm-nav').click(function() {
	$('.sm-nav-open').toggle('fast')
})

//翻转动画
let wid = window.screen.availWidth
let heit = window.screen.availHeight
let fontsize = $(document).width()*100/wid

$(document).scroll(function(){
	console.log($(document).scrollTop())
	addcss('.kam-content',10)
	addcss('.myserve-content',100)
	addcss('.mycase-content',666)
	addcss('.myclassic-content',1440)
	addcss('.myrecruit-content',2200)
	addcss('.mycomment-content',2800)
})

function addcss(name,scrolltop) {
	if($(document).scrollTop() >= scrolltop*fontsize/100) {
		$(name).css({
			'transform': 'translateY(0)',
			opacity: '1'
		})
	}
}

//发表评论
var send = $(".comment-btn")

send.click(function() {

	var value = $(".publish-text-textarea").val()
	console.log(value)
	if(value) {

		if(confirm("是否提交评论")) {
			var html = `						
						<li>
							<div class="media">
							  	<div class="media-left">
							    	<a href="#">
							      		<img class="media-object" src="img/77.png" alt="...">
							    	</a>
							  	</div>
							  	<div class="media-body">
							    	<h4 class="media-heading iblock">
							    		<span>用户名</span>
							    		<span class="fr white">2019-9-18 12:00</span>
							    	</h4>
							    	<p>${value}</p>	
							    	<div class="fr">
						    			<span class="praise">赞</span>
							    		<span class="praise-num">2</span>
							    		<span class="reply">回复</span>
						    		</div>
							  	</div>
							</div>
						</li> `
			//添加到前面
			$(html).prependTo($(".new-comment"))
			$(".publish-text-textarea").val('')

		}

	}

})