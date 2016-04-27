import faker from 'faker'

const people = [];

export default class InfoController{
  constructor(){
    const vm = this;

    vm.people = fakePeople(60)
    
  }
}

function fakePeople(n){
  for(let i=1; i < n; i++){
    people.push({
      id: i,
      name: faker.name.firstName(),
      occupation: faker.name.jobTitle(),
      title: faker.name.title()
    })
  }
  return people
}


