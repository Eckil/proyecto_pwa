class camara {
	constructor(videoNode){

		this.videoNode = videoNode;
		console.log('camara Class init');
	}

	encender()
	{
		navigator.mediaDevices.getUserMedia({
			audio: false,
			video:{width: 300, height: 300}
		}).then(stream=>{
			this.videoNode.scrObject = stream;
			this.stream = stream;

		});
	}

	apagar()
	{
		this.videoNode.pause();

		if (this.stream) {
			this.stream.getTracks()[0].stop();
		}
	}

	tomarfoto(){
		//Crear un elemento canvas para renderizar ahi la foto

		let canvas = document.createElement('canvas');

		//colocarlas dimenciones igual al elemento del video 

		canvas.setAttribute('width',300);
		canvas.setAttribute('height',300);

		//obtener la imagen dentro de canvas

		let context = canvas.getContext('2d');// una simple imagen 

		//dibujar la imagen dentro de canvas 

		context.dropImage(this.videoNode,0 ,0, canvas.width, canvas.height);

		this.foto = context.canvas.toDataURL();

		//limpieza

		canvas = null;
		context = null;

		return this.foto;
		
	}
}