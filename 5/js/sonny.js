let libs = ['https://unpkg.com/p5.tween/dist/p5.tween.min.js']
let tween
let rooster
let burger
let gold
let apple
let fly
let watch
let activeimg
let imgs = []
let letters = []
let activeLetters = 0
let startX = 100
let startY = 170
let ar 

const myShape = {
	x: startX,
	y: startY,
	w: 200,
	h: 200
}


function preload() {
	watch = loadImage('5/data/image/watch.png')
	apple = loadImage('5/data/image/apple4.png')
	gold = loadImage('5/data/image/money.png')
	rooster = loadImage('5/data/image/rooster.png')
	imgs.push(watch)
	imgs.push(apple)
	imgs.push(gold)
	imgs.push(rooster)
	// imgs.push(watch)
	// imgs.push(apple)
	// imgs.push(gold)
	// imgs.push(rooster)

}

function setup() {
	
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	// background(0, 0, 0)
	background(255, 255, 0)
	createCanvas(895, 1280)
	tween = p5.tween.manager.addTween(myShape)
	motionT()
	activeimg = random(imgs)
	letters.push(motionT)
	letters.push(motionI)
	letters.push(motionM)
	letters.push(motionE)
	tween.startTween()
}

function draw() {
	clear()
	ar.reset()
	// ar.scale(.8)
	if(!tween.active) {
		tween.resetMotions()
		myShape.x = startX
		myShape.y = startY
		activeLetters++
		ar.clear()
		letters[activeLetters % 4]()
		tween.startTween()
	}
	// background(0)

	noCursor()
	ar.push()
	// translate(-width/2, -height*.3)

	let loopCount = 15
	for(let d = 0; d < loopCount; d++) {
		let scl = .14 //frameCount*.001%3
		ar.image(activeimg, myShape.x + d * 5, myShape.y + sin(d * .4 + frameCount * .35) * 30, myShape.w, myShape.h)
	}
	ar.pop()
	image(ar,0,0)
}


function motionT() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 290 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 300 },
        { key: 'y', target: 850},
      ], 1000)

}

function motionI() {
	activeimg = random(imgs)

  tween.addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
  
}

function motionM() {
	activeimg = random(imgs)

    tween.addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 340 },
        { key: 'y', target: 850},
      ], 1000) 
    .addMotions([
        { key: 'x', target: 580 },
        { key: 'y', target: 170},
      ], 1000) 
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850},
      ], 1000) 

}

function motionE() {
	activeimg = random(imgs)

    tween.addMotions([
        { key: 'x', target: 400},
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 400},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 500 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350},
        { key: 'y', target: 500 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 500 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 170},
      ], 1000)
      
      
}