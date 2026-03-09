const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang="en-IN"

function startTextNavigation(){

const dest=document.getElementById("destination").value

navigator.geolocation.getCurrentPosition(pos=>{

const lat=pos.coords.latitude
const lon=pos.coords.longitude

window.open(`https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=${dest}&travelmode=walking`)

})

}

function startNavigation(){

recognition.start()

speechSynthesis.speak(new SpeechSynthesisUtterance("Say destination"))

}

recognition.onresult=function(event){

const dest=event.results[0][0].transcript

document.getElementById("destination").value=dest

startTextNavigation()

}
