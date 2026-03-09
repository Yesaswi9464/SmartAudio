function saveSettings(){

const phone=document.getElementById("contactPhone").value

localStorage.setItem("emergencyPhone",phone)

if(document.getElementById("darkMode").checked){

document.body.style.background="#111"
document.body.style.color="white"

}

alert("Settings saved")

}
