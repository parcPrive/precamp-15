if(1+1 === 2) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM278:2 정답
undefined
if(1+2 === 2) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM303:4 오답
//undefined
if(true) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM406:2 정답
undefined
if(0) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM424:4 오답
//undefined
if(1) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM435:2 정답
//undefined
if(Boolean) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM471:2 정답
//undefined
if(!Boolean) {
  console.log("정답")
}else{
  console.log("오답")
}
//VM487:4 오답
//undefined
const pw1 = "123"
//undefined
const pw2 = "123"
//undefined
if(pw1 === pw2){
  alert("비밀번호가 일치합니다.")
}else{
  alert("비밀번호가 다릅니다.")
}
//undefined
//--------------------------------------------------
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교"
}
if(profile.age >= 20){
  console.log("성인입니다.")
}else if(profile.age >= 8){
  console.log("학생입니다.")
}else if(profile.age >= 1){
  console.log("어린이입니다.")
              }
else{
  console.log("잘못입력하셨습니다.")
}