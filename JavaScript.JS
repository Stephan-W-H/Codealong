var timer;
var interval;
var seconds = 0;
const roundTime=document.getElementById('saveTime')
const secondcounter=document.getElementById('seconds')

//En variabel som heter seconds hodler styr på tiden i sekunder.
//Funksjon startTime starter en timer som øker stoppeklokken hvert sekund
function startTime(){
    interval=setInterval(count,1000)

}

//funksjonen count oppdaterer antallet sekunder på skjermen
function count(){
    secondcounter.innerHTML=seconds;
    seconds++;
}

//Funksjonen pause lagrer rundetiden i sekunder i listen og stopper timeren pånytt
function pause(){
    roundTime.innerHTML += `<li>${seconds -1} sekunder</li>`;
    clearInterval(timer);
    seconds = 0;  
}

//Funksjonen stop tilbakestiller alt og restarter stoppeklokken
function stop(){
    location.reload();
}

    
    

