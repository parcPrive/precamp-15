let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
for(let j=0; j<persons.length; j++){
  if(persons[j].age >18){
      console.log(persons[j].name+"님은 성인입니다.")
  }else {
      console.log(persons[j].name+"님은 미성년자입니다.")
  }
}
//VM4272:5 철수님은 미성년자입니다.
//VM4272:3 영희님은 성인입니다.
//VM4272:5 도우너님은 미성년자입니다.
//VM4272:5 말포이님은 미성년자입니다.
//VM4272:5 도비님은 미성년자입니다.