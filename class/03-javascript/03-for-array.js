const fruits = [
  { number: 1, title: "레드향"},
  { number: 2, title: "샤인머스켓"},
  { number: 3, title: "산청딸기"},
  { number: 4, title: "한라봉"},
  { number: 5, title: "사과"},
  { number: 6, title: "애플망고"},
  { number: 7, title: "딸기"},
  { number: 8, title: "천혜향"},
  { number: 9, title: "과일선물세트"},
  { number: 10, title: "귤"},
  ]
//undefined
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + fruits[i].title)
}
//VM5234:2 1레드향
//VM5234:2 2샤인머스켓
//VM5234:2 3산청딸기
//VM5234:2 4한라봉
//VM5234:2 5사과
//VM5234:2 6애플망고
//VM5234:2 7딸기
//VM5234:2 8천혜향
//VM5234:2 9과일선물세트
//VM5234:2 10귤
//undefined
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number +""+ fruits[i].title)//
}
//VM5255:2 1레드향
//VM5255:2 2샤인머스켓
//VM5255:2 3산청딸기
//VM5255:2 4한라봉
//VM5255:2 5사과
//VM5255:2 6애플망고
//VM5255:2 7딸기
//VM5255:2 8천혜향
//VM5255:2 9과일선물세트
//VM5255:2 10귤
//undefined
for(let i=0; i<fruits.length; i++){//
    console.log(fruits[i].number +" "+ fruits[i].title)
}
//VM5262:2 1 레드향
//VM5262:2 2 샤인머스켓
//VM5262:2 3 산청딸기
//VM5262:2 4 한라봉
//VM5262:2 5 사과
//VM5262:2 6 애플망고
//VM5262:2 7 딸기
//VM5262:2 8 천혜향
//VM5262:2 9 과일선물세트
//VM5262:2 10 귤