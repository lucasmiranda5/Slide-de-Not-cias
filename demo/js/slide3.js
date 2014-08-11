


$(document).ready(function() {
var numSlides = $('.SlideNoticia .slideGrande').length;
var numSlidesP = $('.SlideNoticia .SlidePequeno').length;
if(numSlides != numSlidesP){
	alert("O numero de slides grandes e diferente do de slides pequenos");
	$(".SlideNoticia").css("display","none");
	
}else{

	$('.SlideNoticia .slideGrande').each( function(index, value) { 
			if($(this).attr('data-num') != 0)
				$(this).css("display","none");
			else
				$(this).addClass('ativo');
	});


}
setInterval(function(){

	var atual = $('.SlideNoticia .slideGrande.ativo').attr('data-num');
	atual++;
	if(atual < numSlides)
		mudarSlide(atual);
	else
		mudarSlide(0);


}, 3000);
});



function mudarSlide(num){

	if(num != $('.SlideNoticia .slideGrande.ativo').attr('data-num')){
	
	var SlidePequenoV = '.SlideNoticia .SlidePequeno[data-num="'+num+'"]';
	var SlideGradeV = '.SlideNoticia .slideGrande[data-num="'+num+'"]';
	var MarcadoV = '.SlideNoticia .marcador li[data-num="'+num+'"]';
			
					$('.SlideNoticia .slideGrande.ativo').fadeOut('slow',function(){
						$(SlideGradeV).fadeIn('slow');
						$(this).removeClass('ativo');
						$(SlideGradeV).addClass('ativo');
						$('.SlideNoticia .SlidePequeno.ativo').removeClass('ativo');
						$('.SlideNoticia .marcador li.ativo').removeClass('ativo');
						$(SlidePequenoV).addClass('ativo');
						$(MarcadoV).addClass('ativo');
						var calc = 15 + (parseInt($(SlidePequenoV).attr('data-num')) * 34);
						calc = calc+'%';
						
						$('.seta-cima').css('margin-left',calc);
					
					});
			
	
	}


}

$('.SlideNoticia .SlidePequeno').click(function(){
	
	mudarSlide($(this).attr('data-num'));
});

$('.SlideNoticia .marcador li').click(function(){
	mudarSlide($(this).attr('data-num'));
	
});