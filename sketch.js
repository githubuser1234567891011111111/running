var jaxon, track
var trackImg, jaxonImg
var leftBoundary, rightBoundary
var edges
function preload(){
 jaxonImg = loadAnimation ("Runner-1.png", "Runner-2.png")
 trackImg = loadImage ("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
track = createSprite (200, 200)
leftBoundary = createSprite (0,0, 100, 800)
leftBoundary.visible = false
rightBoundary = createSprite (410, 0, 100, 800)
rightBoundary.visible = false
edges = createEdgeSprites()
jaxon = createSprite (180, 340, 15, 15)
jaxon.addAnimation ("running", jaxonImg)
track.addImage (trackImg)
track.velocityY = 4
track.scale = 1.4
jaxon.scale = 0.08
}

function draw() {
  background(0);
  jaxon.x = World.mouseX
jaxon.collide(leftBoundary)
jaxon.collide(rightBoundary)
jaxon.collide(edges[3])

if (track.y > 400){
track.y = height/2
}
drawSprites()
}
