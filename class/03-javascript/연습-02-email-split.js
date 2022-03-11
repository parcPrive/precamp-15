let email = "codecamp@gmail.com"
//undefined
email.includes("@") //저 안에 @이가 있는지 체크 있으면 true 없으면 false
//true
email.split("@") //저거 중심으로 양 옆으로 찢는다. 
//(2) ['codecamp', 'gmail.com']
email.split("@")[0]
//'codecamp'
email.split("@")[1]
//'gmail.com'
const userMail = email.split("@")[0] //찢은 앞에거 저장
//undefined
const company = email.split("@")[1] //찢은거 뒤에거 저장
//undefined
userMail
//'codecamp'
company
//'gmail.com'
const maskingMail = []
//undefined
userMail[0]
//'c'
userMail[1]
//'o'
userMail[2]
//'d'
userMail[3]
//'e'
userMail[4]
//'c'
maskingMail.push(userMail[0]) //maskingMail에 "c", "o", "d", "e"추가
//1
maskingMail.push(userMail[1])
//2
maskingMail.push(userMail[2])
//3
maskingMail.push(userMail[3])
//4
maskingMail
//(4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
//5
maskingMail.push("*")
//6
maskingMail.push("*")
//7
maskingMail.push("*")
//8
maskingMail
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("-")
//'c-o-d-e-*-*-*-*'
maskingMail.join("/")
//'c/o/d/e/*/*/*/*'
maskingMail.join("*")
//'c*o*d*e********'
maskingMail.join("")
//'code****'
maskingMail.join("")+"@"+company
//'code****@gmail.com'
const result = maskingMail.join("")+"@"+company
//undefined
result
//'code****@gmail.com'