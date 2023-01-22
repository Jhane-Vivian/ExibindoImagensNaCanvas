
var canvas = new fabric.Canvas('mycanvas');
blockY = 1;
blockX = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (img) {
		block_Image_object = img;
		/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
		/*Troque a variável de dentro do () para a variável que armazena a largura da imagem    blockImageWidth.*/
		block_Image_object.scaleToWidth(block_Image_object);
		/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
		/*Troque a variável de dentro do () para a variável que armazena a altura da imagem       blockImageHeight.*/
		block_Image_object.scaleToHeight(block_Image_object);
		block_Image_object.set({
			top: blockY,
			left: blockX
		});
		canvas.add(block_Image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	/*O valor do teclado e é 69*/
	if (keyPressed == '101') {
		/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
		/*Adicione a posição x por exemplo blockX = 50;*/
		/* Troque o arquivo rr.png para rr.jpg*/

		newImage('rr.png');
		console.log("e");
	}
	if (keyPressed == '86') {

		blockX = 200;
		newImage('gr.png');
		console.log("v");
	}

	if (keyPressed == '65') {
		blockX = 350;
		newImage('yr.png');
		console.log("a");
	}
	if (keyPressed == '82') {
		blockX = 600;
		newImage('pr.png');
		console.log("r");
	}
	if (keyPressed == '73') {
		blockX = 700;
		newImage('br.png');
		console.log("i");
	}

}

