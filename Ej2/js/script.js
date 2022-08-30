const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];


objectArray
  .sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  .forEach((value) => {
    console.log(`${value.name} ${value.lastname} ${value.age}`);
  }); 

for (const persona of objectArray) {
  let parrafo = document.getElementById("data")
  
  parrafo.innerHTML += `<th>${persona.name}</th> <th>${persona.lastname}</th> <th>${persona.age}</th>`;
}


 









  





