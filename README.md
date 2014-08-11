Slide-de-Not-cias
=================

Slide de Notícia para Bootstrap


Plugin Desenvolvido por Lucas Miranda


Como instalar:

Coloque a versão mais nova do Jquery
  
  <script src="js/jquery-1.10.2.min.js"></script>

Coloque os arquivos slide.css e slide.js no <head>

  <link href="css/layout.css" rel="stylesheet">
  <script src="js/slide.js"></script>
  
Crie sua DIV princiapal do slide
  
<div class="SlideNoticia"></div>

Para cada slide, crie uma uma DIV com a classe SlideGrande com o atributo 'data-num' começando de 0 e coloque a Imagem e o conteudo:

<div class="slideGrande" data-num="0">
					<img src="img/slide1.png">
					<p class="cat">Categoria Notícia1</p>
					<p class="tlt">Titulo</p>
</div>

Logo apos crie uma uma DIV com a Classe marcador e coloque <li> para criar os marcadores:

<div class="col-md-12 marcador">
			<li data-num="2"></li>
			<li data-num="1"></li>
			<li class="ativo" data-num="0"></li>
		</div>
	
Crie uma div com a Classe SlidesPequenos para colocar as miniaturas:
<div class="SlidesPequenos"></div>

Crie dentro dessa DIV as DIVs das miniaturas:
<div class="col-md-4 SlidePequeno" data-num="1">
			<img src="img/slide2.png">
			<p>Categoria Notícia2</p>
			<p>Titulo</p>
			Ver Mais
		</div>
		
		
Exemplo:
https://github.com/lucasmiranda5/Slide-de-Not-cias/tree/master/demo
  
