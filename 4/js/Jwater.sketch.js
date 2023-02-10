let layer 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	layer = createGraphics(895, 1290, P2D, document.getElementById('canvas'))
	//createCanvas(895, 1920);
	layer.noStroke();
	layer.angleMode(DEGREES);
	//layer.pixelDensity(1);

}

function draw() {
	// layer.clear();
	layer.background(0, 9);
	layer.colorMode(RGB);
	//layer.noStroke();
	layer.stroke(0, 95.88, 136.7)
	layer.strokeWeight(30);
	


	let loopCount = 799
	for(let i = 0; i < loopCount; i+=10) {
		layer.push()
		layer.translate(layer.width / 2, layer.height / 2)
		layer.rotate(360*i / loopCount * i)
		layer.point((frameCount*1 + i * 20) % layer.width*1 / 1, noise(i*2 / 2 * frameCount * .1) * 275/i * i*3)
		layer.pop()
		
		

	}
	layer.rectMode(CENTER)
	layer.erase()
	layer.fill(255)
	layer.rect(layer.width/2, layer.height/2, layer.width/2, layer.height/2)
	layer.noErase()
	
	
	
	image(layer, 0, 0)
}