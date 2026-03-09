function sendMessage(){

const msg=document.getElementById("msg").value

let reply="I cannot answer that yet"

if(msg.includes("hello")) reply="Hello how can I help"

if(msg.includes("time")) reply=new Date().toLocaleTimeString()

document.getElementById("chat").value += "\nYou: "+msg

document.getElementById("chat").value += "\nAI: "+reply

speechSynthesis.speak(new SpeechSynthesisUtterance(reply))

}
