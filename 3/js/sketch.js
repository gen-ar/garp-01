let layers = []
let tiles = []
let ar


function preload() {
	tiles.push(loadImage("data/gradient/circle1.png"))
	//	tiles.push(loadImage("data/gradient/circle2.png"))
	//	tiles.push(loadImage("data/gradient/circle3.png"))
	//	tiles.push(loadImage("data/gradient/circle4.png"))
//	tiles.push(loadImage("data/gradient/circle40.png"))
	tiles.push(loadImage("data/gradient/circle6.png"))
//	tiles.push(loadImage("data/gradient/circle37.png"))
	tiles.push(loadImage("data/gradient/circle41.png"))
	tiles.push(loadImage("data/gradient/circle9.png"))
//	tiles.push(loadImage("data/gradient/circle10.png"))
	tiles.push(loadImage("data/gradient/circle25.png"))
	tiles.push(loadImage("data/gradient/circle40.png"))
tiles.push(loadImage("data/gradient/circle13.png"))
//	tiles.push(loadImage("data/gradient/circle36.png"))
	tiles.push(loadImage("data/gradient/circle1.png"))
	tiles.push(loadImage("data/gradient/circle25.png"))
	tiles.push(loadImage("data/gradient/circle1.png"))
	tiles.push(loadImage("data/gradient/circle25.png"))
//	tiles.push(loadImage("data/gradient/circle19.png"))
	tiles.push(loadImage("data/gradient/circle20.png"))
	tiles.push(loadImage("data/gradient/circle2.png"))

}

var avoid = [22, 23, 24, 42, 43, 46]

function setup() {
	createCanvas(895, 1280)
	//	layers.push(createGraphics())
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	//ar.background(255)
	var grid = 7;
	var counter = 0
	for(var i = 0; i < grid; i++) {
		for(var j = 0; j < grid; j++) {
			var sw = ar.height / grid;
			var sh = ar.height / grid;
			var x = map(j, 0, grid - 1, 0, ar.height - sw);
			var y = map(i, 0, grid - 1, 0, ar.height - sh);
			if(random(1) < .99 && (counter < 7 || counter > 18) && !avoid.includes(counter)) {
				//	var r = rect(x, y, sw, sh); 
				layers.push(new Layer(x, y, sw, sh))
			}

			counter++
		}



	}

}

function draw() {
	scale(.2)
	//	background(255)
	//ar.clear()
	for(let l of layers) {
		l.display()
	}
	image(ar, 0, 0)

}

class Layer {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.tile = random(tiles)
		this.layer = createGraphics(w, h)
		this.layer.imageMode(CENTER)
		this.layer.angleMode(DEGREES)
		this.frameCount = random(9999)
		this.frameSpeed = random(10)

	}

	display() {
		this.frameCount += this.frameSpeed
		this.layer.push()
		this.layer.translate(this.layer.width / 2, this.layer.height / 2)
		this.layer.rotate(this.frameCount)
		this.layer.image(this.tile, 0, 0, this.layer.width * 2, this.layer.height * 2)

		this.layer.pop()
		ar.image(this.layer, this.x, this.y)


	}

}