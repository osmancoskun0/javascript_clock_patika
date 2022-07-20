let myName = prompt("Adnızı yazınız.")
// let name = document.querySelector("#myName")
let name = document.querySelector("#myName").innerHTML = `${myName}`
// name.innerHTML = `${myName.length> 0 ? myName : alert("hiç bir şey yazmadınız") }`


const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const bugun = new Date();
let tarih = days[bugun.getDay()];
let zaman = (bugun.getHours()<10?'0':'') + bugun.getHours() + ":" + (bugun.getMinutes()<10?'0':'') + bugun.getMinutes() + ":" + (bugun.getSeconds()<10?'0':'') + bugun.getSeconds();
let dateTime = zaman + " " + tarih;
document.getElementById('myClock').innerHTML = dateTime;



// (bugun.getMinutes()<10?'0':'') + bugun.getMinutes()