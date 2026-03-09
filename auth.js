function registerUser(){

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const pass=document.getElementById("password").value

const user={
name:name,
email:email,
password:pass
}

localStorage.setItem("safestepsUser",JSON.stringify(user))

alert("Registered successfully")

window.location.href="login.html"

}

function loginUser(){

const email=document.getElementById("loginUser").value
const pass=document.getElementById("loginPass").value

const user=JSON.parse(localStorage.getItem("safestepsUser"))

if(user && email===user.email && pass===user.password){

window.location.href="index.html"

}else{

document.getElementById("error").innerText="Invalid login"

}

}
