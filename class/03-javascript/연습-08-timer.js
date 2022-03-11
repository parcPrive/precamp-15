setTimeout(function(){ console.log("3초가 지났습니다.")}
    ,3000)
//1
//VM1482:1 3초가 지났습니다.
    setInterval(function() {console.log("1초가 지났습니다.")}
    ,1000)
//2




//====================================================
let time1 = 10
//undefined
setInterval(function(){
    if(time1>=0){
        console.log(time)
        time1 -= 1
    }
    
},1000)


//=========================================
let time = 180

setInterval(function(){
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2,"0")
        const sec = String(time%60).padStarttart(2,"0")
        console.log(min+":"+sec)
        time -= 1
    }
    
},1000)