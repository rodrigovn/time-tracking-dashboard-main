let n
if(n===undefined){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < 6; i++) {
            document.querySelector("#current-hours-" + i).innerText = data[i].timeframes.daily.current + "hrs"
            document.querySelector("#previous-hours-" + i).innerText =  "Yesterday " + data[i].timeframes.daily.previous + "hrs"
        }
    })
}

function timeframechanger(n){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        if(n===1){
            for (var i = 0; i < 6; i++) {
                document.querySelector("#current-hours-" + i).innerText = data[i].timeframes.daily.current + "hrs"
                document.querySelector("#previous-hours-" + i).innerText = "Yesterday " + data[i].timeframes.daily.previous  + "hrs"
             }
        } else if(n===2){
            for (var i = 0; i < 6; i++) {
                document.querySelector("#current-hours-" + i).innerText = data[i].timeframes.weekly.current + "hrs"
                document.querySelector("#previous-hours-" + i).innerText = "Last week " + data[i].timeframes.weekly.previous + "hrs"
             }
        }
         else if(n===3){
            for (var i = 0; i < 6; i++) {
                document.querySelector("#current-hours-" + i).innerText = data[i].timeframes.monthly.current + "hrs"
                document.querySelector("#previous-hours-" + i).innerText = "Last month " + data[i].timeframes.monthly.previous + "hrs"
             }
        }
        console.log(n)
    })
}

function timeframeselect(btn,n){
    btn.addEventListener('click', ()=>{
        timeframechanger(n);
    })
}

timeframeselect(document.getElementById('daily-btn'),1);
timeframeselect(document.getElementById('weekly-btn'),2);
timeframeselect(document.getElementById('monthly-btn'),3);