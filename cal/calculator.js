// 힌트
// input 태그의 값을 가져올 때
// document.getElementById(" ").value 를 이용할 수 있습니다
// 가져온 값의 타입은 문자열입니다. 숫자로 어떻게 변환해야 할까요?

// 가이드
// 1. input 태그의 값을 가져와 변수에 할당한다
// 2. 결과를 담을 변수를 만들고, 연산 결과를 변수에 할당한다
// 3. html의 결과 박스(id="result")의 내용을 결과값으로 바꿔준다

function add () {
    // 여기에 코드를 입력하세요
    let num1 = document.getElementById("a").value
    let num2 = document.getElementById("b").value
    
    let plus = parseInt(num1) + parseInt(num2)
    //let plus = Number(num1) + Number(num2)
    //let plus = (num1 >> 0) + (num2 >> 0)
    //let plus = +num1 + +num2

    document.getElementById("result").innerText = plus
}