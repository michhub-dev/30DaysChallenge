const secondHand = document.querySelector('.second-hand'); //.css = now.toLocaleTimeString();
const minsHand = document.querySelector('.min-hand'); //.css = now.toLocaleTimeString();
const hourHand = document.querySelector('.hour-hand'); //.css = now.toLocaleTimeString();

function setDate() {
  const now = new Date();
  now.getUTCDate() + 1;
  now.toLocaleString();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = ((mins / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval (setDate, 1000);

   //var myVar = setInterval(myTimer, 1000);

//function myTimer() {
  //var d = new Date();
  //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//}
//setInterval (setDate, 1000);