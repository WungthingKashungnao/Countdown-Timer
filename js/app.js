const endDate = "1 January 2024 12:00 AM"
document.getElementById('endDate').innerText = endDate;

const input = document.querySelectorAll('input');

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    // converting miliseconds to seconds
    const diff = (end-now)/1000;//now seconds after converting
    if (diff<0) return;
    input[0].value = Math.floor(diff/3600/24);//calculating the days
    input[1].value = Math.floor((diff/3600)%24);//calulating the hours
    input[2].value = Math.floor((diff/60)%60);//calulating the minutes
    input[3].value = Math.floor(diff%60);//calulating the seconds
}

clock();//initial call to the fucntion clock

// now we want to call the clock function after every 1 seconds
setInterval(()=>{
    clock();
},1000)
// 1 day = 24 hr
// 1hr = 60 min 
// 1 min = 60 secs 
// 60 min = 3600sec
// 1 sec = 1000 mili sec