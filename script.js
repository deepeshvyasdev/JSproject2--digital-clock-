let s = document.querySelector("#sec");
let h = document.querySelector("#hr");
let m = document.querySelector("#min");
let dn = document.querySelector("#dn");
let day = document.querySelector("#day");
let dat = document.querySelector("#dat");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let mode = document.querySelector(".form-check-input");
let body = document.querySelector('body');
let hed = document.querySelector(".hed");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function updateClock () {
    const date = new Date();
    day.innerText = daysOfWeek[date.getDay()];
    dat.innerText = date.getDate();
    month.innerText = months[date.getMonth()];
    year.innerText = date.getFullYear();
    s.innerText = (date.getSeconds()<10? "0" + date.getSeconds() : date.getSeconds());
    m.innerText = (date.getMinutes()<10? "0" + date.getMinutes() : date.getMinutes());
    h.innerText = (date.getHours()<10? "0" + date.getHours() : date.getHours());
    const period = date.getHours()>=12? dn.innerText = "pm" : dn.innerText = "am";
}
setInterval(updateClock,1000);
let n = 0;
mode.addEventListener("click",()=>{
    if(n == 0){
        body.style.backgroundColor = "white";
        hed.style.color = "black";
        n += 1;
    }
    else{
        body.style.backgroundColor = "gray";
        hed.style.color = "white";
        n = 0;
    }

})




