const video=document.getElementById("video")

const canvas=document.getElementById("canvas")

const ctx=canvas.getContext("2d")

let model

async function startCamera(){

const stream=await navigator.mediaDevices.getUserMedia({video:true})

video.srcObject=stream

}

async function loadModel(){

model=await cocoSsd.load()

detect()

}

async function detect(){

const predictions=await model.detect(video)

canvas.width=video.videoWidth
canvas.height=video.videoHeight

ctx.clearRect(0,0,canvas.width,canvas.height)

predictions.forEach(p=>{

if(p.score>0.6){

const [x,y,w,h]=p.bbox

ctx.strokeRect(x,y,w,h)

ctx.fillText(p.class,x,y)

}

})

requestAnimationFrame(detect)

}

function describeScene(){

model.detect(video).then(predictions=>{

const objects=predictions.map(p=>p.class).join(",")

speechSynthesis.speak(new SpeechSynthesisUtterance("I see "+objects))

})

}

startCamera()

loadModel()
