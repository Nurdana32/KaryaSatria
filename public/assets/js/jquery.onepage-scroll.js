

    	$(document).ready(function(){
    		var heighHeader = $(".header").height();
    		var stickyNav = function(){
    			var scrollTop = $(window).scrollTop();
    			if(scrollTop > heighHeader){
    				$(".menu").css({'position':'fixed', 'top':'0','left':'0', 'z-index':'999', 'width':'100%'}).slideDown("fast");
    			}else{
    				$(".menu").slideUp("fast", function(){
    					$(".menu").css({"position":"relative"});
    				})
    			}
    		}

        $(".one a, .arrow a").click(function(){
          var pos = $(this).attr("class");
              posi = $("#"+pos).offset().top;
              console.log(pos + posi)
              $("body, html").animate({scrollTop:posi-40}, 800)
        })

    		$(window).scroll(function(){
    			stickyNav();
    		})




    	})
