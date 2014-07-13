$(function(){
	//スクロール
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var here=target.offset().top - 44;
		$('body,html').animate({scrollTop:here},600);
		return false;
	});
	//スクロール終了
	//テキストフォーカス時消す
	$('textarea,input[type="text"]').focusin(function(){
		$(this).css({"backgroundColor":"#ffff99"});
		if($(this).val()==this.defaultValue){
			$(this).val('');
		};
	}).blur(function(){
		$(this).css({"backgroundColor":"#ffffff"});
		if($(this).val() == this.defaultValue || $(this).val()==''){
			$(this).val(this.defaultValue);
		};
	});
	//テキストフォーカス時消す終了
	//
	$('#btn input').focusin(function(){
		$('#btn li:not(:last)').animate({width:960 / 9 - 5},500);
		$('#btn li:last').animate({width:960 / 9 + 40},500);
		$('#btn input').animate({width:960 / 9 + 20},500);
	});
	$('#btn input').blur(function(){
		$('#btn li').animate({width:960 / 9},500);
		$('#btn input').animate({width:80},500);
	});
});

