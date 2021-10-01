function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  people.forEach(person=>{
    const h1=document.createElement("h1");
    const h2=document.createElement("h2");
    h1.innerText=person.name;
    h2.innerText=person.job;
    content.appendChild(h1);
    content.appendChild(h2);
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
