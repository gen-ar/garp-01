let invert = false; // set intial state 
let switch2 = false;
let switch3 = false;
let switch4 = false;
let switch5 = false;
let font 
let layerT, layerI, layerM, layerE
//let strokeColor = 0
let fillColor = 0
let layerScale = 1 // im AR 0.5!!!!
//let rotate = 0

function preload(){
	font = loadFont('data/GT-Ultra-Standard-Bold.ttf')
}

function setup() {
	//createCanvas(windowWidth, windowHeight);
	createCanvas(895, 1280)
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	layerT = createGraphics(895 * layerScale, 1280 * layerScale)
	layerI = createGraphics(895 * layerScale, 1280 * layerScale)
	layerM = createGraphics(895 * layerScale, 1280 * layerScale)
	layerE = createGraphics(895 * layerScale, 1280 * layerScale)
}

function draw() {

	if(frameCount % 360 == 0) {
		invert = !invert;
	}
	if(frameCount % 20 == 0) {
		switch2 = !switch2; // ein Knopf, der an und ausgeht.
	}
	if(frameCount % 100 == 0) {
		switch3 = !switch3; // ein Knopf, der an und ausgeht.
	}
	if(frameCount % 40 == 0) {
		switch4 = !switch4; // ein Knopf, der an und ausgeht.
	}
	if(frameCount % 10 == 0) {
		switch5 = !switch5; // ein Knopf, der an und ausgeht.
	}



	if(invert) { // change things depending on true/false 
		//background(0); 
		layerT.stroke (layerScale*2)
		layerT.fill(255)
		layerI.fill (255)
		layerM.stroke(0, 0, 255)
		layerM.fill(255)
		layerE.noFill()
	}

	// layerI.fill(255)
	// layerE.fill(0,0,255)

	if(switch2) {
		layerT.stroke (0, 0, 255)
		layerT.fill(255)
		layerI.fill(255)
		layerM.stroke(255)
		layerM.fill(255)
		layerE.fill(0, 0, 255)

	}

	if(switch3) {
		layerT.stroke(0)
		layerT.noFill ()
		layerI.rotate()
		layerM.stroke(0, 0, 255)
		layerE.noFill()
	
	}
	
	if(switch4) {
		layerT.stroke(0)
		layerT.fill (255)
		layerE.stroke(0)
		layerM.stroke(0)
	
	}
	
	if(switch5){
		layerT.stroke(0,0,255)
		layerT.strokeWeight(20*layerScale)
		layerM.noFill()
		
	}


	//fill(frameCount % 0, 0, 0, 50)
	//noFill()
	//layerT.fill(255);
	layerT.textSize(frameCount % 1500 * layerScale * 5)
	layerT.textAlign(CENTER, CENTER)
	layerT.strokeWeight(layerScale)
	layerT.textFont(font)
	layerT.text('t', frameCount * 2 % layerT.width / 2, frameCount % layerT.height / 2)



	//fill(frameCount % 0,0,0, 20)


	layerI.push()
	let s = map(second(), 0, 60, 0, 360)
	layerI.angleMode(DEGREES)
	layerI.translate(layerI.width / 2, layerI.height / 2)
	layerI.rotate(s)
	layerI.textSize(frameCount % 2000 * layerScale * 3)
	//layerI.fill(frameCount % 0, 0, 255, 55)
	//layerI.textAlign(CENTER, CENTER)
	layerI.stroke(0, 0, 255)
	layerI.strokeWeight(layerScale)
	layerI.textFont(font)
	layerI.text('i', 0, 0)
	//text(key, 0, 0)
	layerI.pop()

	layerM.textSize(frameCount % 1000 * layerScale * 2)
	layerM.textAlign(CENTER, CENTER)
	layerM.strokeWeight(layerScale)
	layerM.textFont(font)
	layerM.text('m', layerM.width / 2, layerM.height / 2)
	//layerE.fill(frameCount % 0, 0, 255, 10)


	layerE.textSize(frameCount % 1000 * layerScale * 5)
	layerE.textAlign(LEFT, CENTER)
	layerE.stroke(255)
	layerE.strokeWeight(layerScale)
	layerE.textFont(font)
	layerE.text('e', frameCount * 5 % layerE.width / 2, layerE.height / 2)

	// 't', frameCount * 2 % layerT.width / 2, frameCount % layerT.height / 2


	// Position der verschiedenen Layers, die oben, definiert werden
	ar.image(layerT, 0, 0, 895 / 2, 1280 / 2)
	ar.image(layerI, 895 / 2, 0, 895 / 2, 1280 / 2)
	ar.image(layerM, 0, 895 / 2, 895 / 2, 1280 / 2)
	ar.image(layerE, 895 / 2, 1280 / 2, 895 / 2, 1280 / 2)
image(ar, 0, 0)
	
}

function keyPressed() {
	if(key == 'T') {
		layerT.save("layerT.png")
	}
	if(key == 'I') {
		layerI.save("layerI.png")
	}
	if(key == 'M') {
		layerM.save("layerM.png")
	}
	if(key == 'E') {
		layerE.save("layerE.png")
	}


}