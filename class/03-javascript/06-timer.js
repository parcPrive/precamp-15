let isStarted = false


let randomToken = () => {
  if(isStarted === false){
    //타이머가 작동중이 아닐경우
      isStarted = true
      const token =String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
      document.getElementById("six").innerText = token
      document.getElementById("six").style.color = "#" + token


      let time = 180
      let timer = null;
      
      timer = setInterval(function(){
        if(time>=0){
            const min = String(Math.floor(time/60)).padStart(2,"0")
            const sec = String(time%60).padStart(2,"0")
            document.getElementById("time").innerText = min+":"+sec
            time -= 1
            document.getElementById("close").disabled = false
        }else{
            document.getElementById("close").disabled = true
            isStarted =false
            clearInterval(timer)
            
        }
        
        
    },1000)
  }else{
    //타이머가 작동중일 경우
    alert("타이머가 이미 작동중입니다.")
    

  }


  

}
