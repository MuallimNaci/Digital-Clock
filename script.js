const greeting = document.getElementById("greeting")
let name = prompt("Adınızı giriniz")

greeting.innerHTML = `Merhaba ${name}, Hoşgeldin`

function time() 
{

    const clock = document.getElementById("clock")
    const newDate = new Date()
    let second = newDate.getSeconds()
    let minute = newDate.getMinutes()
    let hour = newDate.getHours()

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    clock.innerHTML = `${hour} : ${minute} : ${second}`
    
   
}
setInterval(() => {
    time()
}, 1000);

const day = document.getElementById("day")
let newDate = new Date()
let dayNumber = newDate.getDay()

switch (dayNumber) {
    case 1:
        day.innerHTML = "PAZARTESİ"
        break;

    case 2:
        day.innerHTML = "SALI"
        break;

    case 3:
        day.innerHTML = "ÇARŞAMBA"
        break;

    case 4:
        day.innerHTML = "PERŞEMBE"
        break;
    
    case 5:
        day.innerHTML = "CUMA"
        break;
            
    case 6:
        day.innerHTML = "CUMARTESİ"
        break;
    case 0:
        day.innerHTML = "PAZAR"
        break;
    default:
        day.innerHTML = "BİLİNMİYOR"
        break;
}
