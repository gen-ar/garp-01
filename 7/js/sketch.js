let layer1
let layer2
let layer3
let layer4

let libs = ['/bodymovin.min.js', '/lottie.min.js'];

let layer8
let layer9
let layer10
let layer11

let layer5
let layer6

let layer7
let layer12

let mil
let sec
let min
let h
let d
let m
let y

let anim1
let anim2

let lottie1
let lottie2
let lottielayer
var canvaslottie
let myFont

function preload() {
	myFont = loadFont('font/IBMPlexMono-SemiBold.ttf');
	anim1 = loadJSON('lottie1.json');
	anim2 = loadJSON('lottie2.json');
}

function setup() {
	createCanvas(895, 1280) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag

	// setup AR layer
	arlayer = createGraphics(width, height, P2D, document.getElementById('canvas'))
	// background(255, 255, 0) // optionally cover poster
	//lottie


	lottie1 = createDiv().id('lottiediv').style('visibility','hidden').size(427,640)
	;
	let params = {
		container: lottie1.elt,
		loop: true,
		autoplay: true,
		animationData: anim1,
		renderer: 'canvas',

	};
	anim1 = lottie.loadAnimation(params);
	lottie1.position(0, 0);
	
	//arlayer = createGraphics(895,1280);
	
	layer1 = createGraphics(1280 / 6, 1280 / 6)
	layer2 = createGraphics(1280 / 6, 1280 / 6)
	layer3 = createGraphics(1280 / 6, 1280 / 6)
	layer4 = createGraphics(1280 / 6, 1280 / 6)

	layer5 = createGraphics(1280 / 6 * 2, 1280 / 6)
	layer6 = createGraphics(1280 / 6 * 2, 1280 / 6)
	layer7 = createGraphics(1280 / 6 * 2, 1280 / 6)

	layer8 = createGraphics(1280 / 6, 1280 / 6)
	layer9 = createGraphics(1280 / 6, 1280 / 6)
	layer10 = createGraphics(1280 / 6, 1280 / 6)
	layer11 = createGraphics(1280 / 6, 1280 / 6)

	layer12 = createGraphics(1280 / 6 * 2, 1280 / 6)
	layerlottie = createGraphics(1280 / 6 * 2, 1280 / 6 * 3)


	angleMode(DEGREES);
	frameRate(30);

	setTimeout(() => {
		canvaslottie = document.querySelector('#lottiediv canvas');

		print(canvaslottie);

	}, 0)
}

function draw() {
	arlayer.background(255);

	min = minute();
	sec = second();
	h = hour();
	d = day();
	m = month();
	y = year();
	mil = frameCount / 3 % 10

	//layer 1
	push()
	layer1.background(255);
	layer1.fill(0);
	layer1.stroke(0)
	layer1.strokeWeight(2);

	if(min == 1 || min == 5 || min == 9 || min == 13 || min == 17 || min == 21 || min == 25 || min == 29 || min == 33 ||
		min == 37 || min == 41 || min == 45 || min == 49 || min == 53 || min == 57 || min == 0) {
		layer1.ellipse(1280 / 6, 1280 / 6, 1280 / 3, 1280 / 3);
	}
	if(min == 2 || min == 6 || min == 10 || min == 14 || min == 18 || min == 22 || min == 26 || min == 30 || min == 34 ||
		min == 38 || min == 42 || min == 46 || min == 50 || min == 54 || min == 58) {
		layer1.ellipse(1280 / 6, 0, 1280 / 3, 1280 / 3);
	}
	if(min == 3 || min == 7 || min == 11 || min == 15 || min == 19 || min == 23 || min == 27 || min == 31 || min == 35 ||
		min == 39 || min == 43 || min == 47 || min == 51 || min == 55 || min == 59) {
		layer1.ellipse(0, 0, 1280 / 3, 1280 / 3);
	}
	if(min == 4 || min == 8 || min == 12 || min == 16 || min == 20 || min == 24 || min == 28 || min == 32 || min == 36 ||
		min == 40 || min == 44 || min == 48 || min == 52 || min == 56 || min == 60) {
		layer1.ellipse(0, 1280 / 6, 1280 / 3, 1280 / 3);
	}

	pop()

	//layer 2
	push()
	layer2.background(255);
	layer2.fill(255);
	layer2.stroke(0)
	layer2.strokeWeight(2);

	if(sec == 1 || sec == 5 || sec == 9 || sec == 13 || sec == 17 || sec == 21 || sec == 25 || sec == 29 || sec == 33 ||
		sec == 37 || sec == 41 || sec == 45 || sec == 49 || sec == 53 || sec == 57) {
		layer2.ellipse(1280 / 6, 0, 1280 / 3, 1280 / 3);
	}
	if(sec == 2 || sec == 6 || sec == 10 || sec == 14 || sec == 18 || sec == 22 || sec == 26 || sec == 30 || sec == 34 ||
		sec == 38 || sec == 42 || sec == 46 || sec == 50 || sec == 54 || sec == 58) {
		layer2.ellipse(0, 0, 1280 / 3, 1280 / 3);
	}
	if(sec == 3 || sec == 7 || sec == 11 || sec == 15 || sec == 19 || sec == 23 || sec == 27 || sec == 31 || sec == 35 ||
		sec == 39 || sec == 43 || sec == 47 || sec == 51 || sec == 55 || sec == 59 || sec == 0) {
		layer2.ellipse(0, 1280 / 6, 1280 / 3, 1280 / 3);
	}
	if(sec == 4 || sec == 8 || sec == 12 || sec == 16 || sec == 20 || sec == 24 || sec == 28 || sec == 32 || sec == 36 ||
		sec == 40 || sec == 44 || sec == 48 || sec == 52 || sec == 56 || sec == 60) {
		layer2.ellipse(1280 / 6, 1280 / 6, 1280 / 3, 1280 / 3);
	}

	pop()

	//layer 3
	push()
	layer3.background(255);
	layer3.fill(0);
	layer3.stroke(0)
	layer3.strokeWeight(2);

	if(min == 1 || min == 5 || min == 9 || min == 13 || min == 17 || min == 21 || min == 25 || min == 29 || min == 33 ||
		min == 37 || min == 41 || min == 45 || min == 49 || min == 53 || min == 57 || min == 0) {
		layer3.ellipse(0, 0, 1280 / 3, 1280 / 3);
	}
	if(min == 2 || min == 6 || min == 10 || min == 14 || min == 18 || min == 22 || min == 26 || min == 30 || min == 34 ||
		min == 38 || min == 42 || min == 46 || min == 50 || min == 54 || min == 58) {
		layer3.ellipse(1280 / 6, 0, 1280 / 3, 1280 / 3);
	}
	if(min == 3 || min == 7 || min == 11 || min == 15 || min == 19 || min == 23 || min == 27 || min == 31 || min == 35 ||
		min == 39 || min == 43 || min == 47 || min == 51 || min == 55 || min == 59) {
		layer3.ellipse(1280 / 6, 1280 / 6, 1280 / 3, 1280 / 3);
	}
	if(min == 4 || min == 8 || min == 12 || min == 16 || min == 20 || min == 24 || min == 28 || min == 32 || min == 36 ||
		min == 40 || min == 44 || min == 48 || min == 52 || min == 56 || min == 60) {
		layer3.ellipse(0, 1280 / 6, 1280 / 3, 1280 / 3);
	}

	pop()

	//layer 4
	push()
	layer4.background(255);
	layer4.fill(255);
	layer4.stroke(0)
	layer4.strokeWeight(2);

	if(sec == 1 || sec == 5 || sec == 9 || sec == 13 || sec == 17 || sec == 21 || sec == 25 || sec == 29 || sec == 33 ||
		sec == 37 || sec == 41 || sec == 45 || sec == 49 || sec == 53 || sec == 57) {

		layer4.ellipse(1280 / 6, 1280 / 6, 1280 / 3, 1280 / 3);
	}
	if(sec == 2 || sec == 6 || sec == 10 || sec == 14 || sec == 18 || sec == 22 || sec == 26 || sec == 30 || sec == 34 ||
		sec == 38 || sec == 42 || sec == 46 || sec == 50 || sec == 54 || sec == 58) {

		layer4.ellipse(0, 1280 / 6, 1280 / 3, 1280 / 3);
	}
	if(sec == 3 || sec == 7 || sec == 11 || sec == 15 || sec == 19 || sec == 23 || sec == 27 || sec == 31 || sec == 35 ||
		sec == 39 || sec == 43 || sec == 47 || sec == 51 || sec == 55 || sec == 59 || sec == 0) {
		layer4.ellipse(0, 0, 1280 / 3, 1280 / 3);
	}
	if(sec == 4 || sec == 8 || sec == 12 || sec == 16 || sec == 20 || sec == 24 || sec == 28 || sec == 32 || sec == 36 ||
		sec == 40 || sec == 44 || sec == 48 || sec == 52 || sec == 56 || sec == 60) {
		layer4.ellipse(1280 / 6, 0, 1280 / 3, 1280 / 3);
	}

	pop()


	//layer 5
	push()
	layer5.background(255);

	let xachse1 = map(sec, 0, 59, 80, 1280 / 3 - 80);
	let xachse2 = map(min, 0, 59, 80, 1280 / 3 - 80);

	layer5.fill(0);
	layer5.ellipse(xachse2, 1280 / 12, 150, 150);
	layer5.fill(255)
	layer5.strokeWeight(2);
	layer5.ellipse(xachse1, 1280 / 12, 120, 120);
	pop()

	//layer 6
	push()
	layer6.background(255);
	layer6.textSize(50);
	layer6.textFont(myFont)
	layer6.strokeWeight(0)
	layer6.fill(0);
	layer6.textAlign(CENTER, CENTER);
	layer6.textStyle(BOLD);
	layer6.text(nf(h, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2) + "." + nfc(mil, 0), 1280 / 6, (1280 / 6) / 2 + 25);
	layer6.text(nf(d, 2) + "." + nf(m, 2) + "." + nf(y, 2), 1280 / 6, (1280 / 6) / 2 - 25);
	pop()

	//layer 7
	push()
	layer7.background(255);
	layer7.textSize(25);
	layer7.textFont(myFont)
	layer7.strokeWeight(0)
	layer7.fill(0);
	layer7.textAlign(LEFT, CENTER);
	layer7.textStyle(BOLD);
	layer7.text("Kunsthaus Zürich", 58, (1280 / 6) / 2 - 14);
	layer7.text("22.9.2023 — 14.1.2024", 58, (1280 / 6) / 2 + 14);
	pop()


	//layer 8
	push()
	layer8.background(255);
	layer8.textSize(180);
	layer8.strokeWeight(0)
	layer8.textFont(myFont)
	layer8.textAlign(CENTER, CENTER);
	layer8.textStyle(BOLD);
	if(min % 2 == 1) {
		layer8.text("T", 1280 / 12, (1280 / 6) / 2 - 20);
	} else {
		layer8.text("M", 1280 / 12, (1280 / 6) / 2 - 20);
	}
	pop()

	//layer 10
	push()
	layer10.background(255);
	layer10.textSize(180);
	layer10.strokeWeight(0)
	layer10.textFont(myFont)
	layer10.textAlign(CENTER, CENTER);
	layer10.textStyle(BOLD);
	if(min % 2 == 1) {
		layer10.text("I", 1280 / 12, (1280 / 6) / 2 - 20);
	} else {
		layer10.text("E", 1280 / 12, (1280 / 6) / 2 - 20);
	}
	pop()

	//layer 9
	push()
	layer9.background(255);
	layer9.textSize(180);
	layer9.strokeWeight(0)
	layer9.textFont(myFont)
	layer9.textAlign(CENTER, CENTER);
	layer9.textStyle(BOLD);
	if(min % 2 == 1) {
		layer9.text("M", 1280 / 12, (1280 / 6) / 2 - 20);
	} else {
		layer9.text("T", 1280 / 12, (1280 / 6) / 2 - 20);
	}
	pop()



	//layer 11
	push()
	layer11.textFont(myFont)
	layer11.background(255);
	layer11.textSize(180);
	layer11.strokeWeight(0)
	layer11.textAlign(CENTER, CENTER);
	layer11.textStyle(BOLD);
	if(min % 2 == 1) {
		layer11.text("E", 1280 / 12, (1280 / 6) / 2 - 20);
	} else {
		layer11.text("I", 1280 / 12, (1280 / 6) / 2 - 20);
	}
	pop()

	//layer 12
	push()
	layer12.background(255);
	layer12.textSize(25);
	layer12.textFont(myFont)
	layer12.strokeWeight(0)
	layer12.fill(0);
	layer12.textAlign(LEFT, CENTER);
	layer12.textStyle(BOLD);
	layer12.text("An exploration", 58, (1280 / 6) / 2 - 14);
	layer12.text("of some notions of", 58, (1280 / 6) / 2 + 14);
	pop()




	arlayer.image(layer1, width * 3 / 4 - (width * 0.04675) / 4, height * 2 / 6);
	arlayer.image(layer2, width * 3 / 4 - (width * 0.04675) / 4, height * 3 / 6);
	arlayer.image(layer3, width * 2 / 4, height * 3 / 6);
	arlayer.image(layer4, width * 2 / 4, height * 2 / 6);
	arlayer.image(layer5, width * 2 / 4, 0);
	arlayer.image(layer6, 0 + (width * 0.04675) / 2, height * 5 / 6);
	arlayer.image(layer7, width / 2, height * 5 / 6);




	arlayer.image(layer8, (width * 0.04675) / 2, height * 1 / 6);
	arlayer.image(layer9, width / 2, height * 1 / 6);
	arlayer.image(layer10, width * 1 / 4 + (width * 0.04675) / 4, height * 1 / 6);
	arlayer.image(layer11, width * 3 / 4 - (width * 0.04675) / 4, height * 1 / 6);
	arlayer.image(layer12, (width * 0.04675) / 4, 0);


		
	layerlottie.drawingContext.drawImage(canvaslottie, 0, 0, 427, 640)

	arlayer.image(layerlottie, (width * 0.04675) / 2, 427, 427, 640);




	//soft grid

	arlayer.noFill()
	const columns = 4;
	const rows = 6;
	const cellWidth = (width - width * 0.04675) / columns;
	const cellHeight = height / rows;

	for(let c = 0; c < columns; c++) {
		for(let r = 0; r < rows; r++) {
			const x = c * cellWidth;
			const y = r * cellHeight;
			arlayer.rectMode(CENTER);
			arlayer.stroke(200);
			arlayer.strokeWeight(1);
			arlayer.rect(x + cellWidth / 2 + (width * 0.04675) / 2, y + cellHeight / 2, height / 6);

		}
	}
	push()

	//LINES

	arlayer.strokeCap(SQUARE);
	arlayer.stroke(0);
	arlayer.strokeWeight(2);
	for(let c = 0; c < 30; c++) {
		arlayer.line(0, c * height / 30, (width * 0.04675) / 4, c * height / 30)
		arlayer.line(width, c * height / 30, width - (width * 0.04675) / 4, c * height / 30)
	}

	arlayer.stroke(0);
	arlayer.strokeWeight(4);
	for(let c = 0; c < 6; c++) {
		arlayer.line(0, c * height / 6, (width * 0.04675) / 2, c * height / 6)
		arlayer.line(width, c * height / 6, width - (width * 0.04675) / 2, c * height / 6)
	}
	arlayer.strokeWeight(4);
	arlayer.line(0, 5 * height / 6, width, 5 * height / 6);
	arlayer.line(0, 2 * height / 6, width, 2 * height / 6);
	arlayer.line(0, 1 * height / 6, width, 1 * height / 6);
	arlayer.line(width / 2, 3 * height / 6, width, 3 * height / 6);
	arlayer.line(width / 2, 4 * height / 6, width, 4 * height / 6);

	arlayer.strokeWeight(2);
	arlayer.line(width / 2, 0, width / 2, height);
	arlayer.line(width / 4 + (width * 0.04675) / 4, 1 * height / 6, width / 4 + (width * 0.04675) / 4, 2 * height / 6);
	arlayer.line(width * 3 / 4 - (width * 0.04675) / 4, 1 * height / 6, width * 3 / 4 - (width * 0.04675) / 4, 5 * height / 6);

	pop()

	arlayer.rectMode(CORNER);
	// Template Border (Keep at the Bottom)
	arlayer.push();
	arlayer.stroke(0);
	arlayer.strokeWeight(5);
	arlayer.noFill();
	arlayer.rect(0, 0, width, height);
	arlayer.pop();
	
//	image(arlayer,0,0);

	// grab canvas and place on AR layer
	// ar.image(get(0, 0, width, height), 0, 0, ar.width, ar.height)

}
	

