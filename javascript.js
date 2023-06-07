const timeEl = document.getElementById("timess")
function getCurrentTime(){
    const time   = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    timeEl.innerHTML=`${hours}:${minutes}`;
}
setInterval(getCurrentTime,1000)
