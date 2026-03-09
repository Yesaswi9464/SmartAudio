const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang="en-IN"

function startVoiceCommand(){

recognition.start()

speechSynthesis.speak(new SpeechSynthesisUtterance("Listening"))

}

recognition.onresult=function(event){

const command=event.results[0][0].transcript.toLowerCase()

if(command.includes("live")) window.location="live.html"

else if(command.includes("navigation")) window.location="navigate.html"

else if(command.includes("read")) window.location="read.html"

else if(command.includes("assistant")) window.location="chatbot.html"

else if(command.includes("settings")) window.location="settings.html"

}
