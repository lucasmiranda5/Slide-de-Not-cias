jQuery.fn.SlideNoticia = function(tempo) {
	if(!tempo)
		tempo = 5000;
	
		
	var classe= '.'+this.attr('class');
	
		var numSlides = $( classe + ' .slideGrande').length;
		var numSlidesP = $(classe + ' .SlidePequeno').length;
		if(numSlides != numSlidesP){
			alert("O numero de slides grandes e diferente do de slides pequenos");
			$(classe).css("display","none");
			
		}else{

			$(classe+' .slideGrande').each( function(index, value) { 
					if($(this).attr('data-num') != 0)
						$(this).css("display","none");
					else
						$(this).addClass('ativo');
			});


		}
		setInterval(function(){

			var atual = $(classe+' .slideGrande.ativo').attr('data-num');
			atual++;
			if(atual < numSlides)
				mudarSlide(atual);
			else
				mudarSlide(0);


		}, tempo);
	
	
	
		function mudarSlide(num){

		if(num != $(classe+' .slideGrande.ativo').attr('data-num')){
			
			var SlidePequenoV = classe+' .SlidePequeno[data-num="'+num+'"]';
			var SlideGradeV = classe+' .slideGrande[data-num="'+num+'"]';
			var MarcadoV = classe+' .marcador li[data-num="'+num+'"]';
					
							$(classe+' .slideGrande.ativo').fadeOut('slow',function(){
								$(SlideGradeV).fadeIn('slow');
								$(this).removeClass('ativo');
								$(SlideGradeV).addClass('ativo');
								$(classe+' .SlidePequeno.ativo').removeClass('ativo');
								$(classe+' .marcador li.ativo').removeClass('ativo');
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
		
		
};

