//loop over dinos
//build up a domstring
//print domstring to the dom
const print = (id, message, br) => {
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML = message;
    if(br){selectedDiv.innerHTML +='<br>'};
  };

const buildDinosaurs = () => {
    let domString = '';
    for(let i=0; i<dinosaurs.length; i++){
        domString += `<div class="cardDiv">`;
        domString +=    `<h1 class="dinoName">${dinosaurs[i].dinoType}</h1>`;
        domString +=    `<img class="dinoPic" src= "${dinosaurs[i].dinoPic}">`;
        domString +=    `<p class="dinoSize">SIZE: ${dinosaurs[i].dinoSize}</p>`;
        domString +=    `<p class="dinoDiet">DIET: ${dinosaurs[i].dinoDiet}</p>`;
        domString += `</div>`;
    }
    print('dinoDiv', domString, false);
};

  const init = () => {
    buildDinosaurs();
    buildAssignments();
  };

const dinosaurs = [
    {
        dinoType: 'Tyrannosaurus',
        dinoSize: '40ft long, 15-25ft tall',
        dinoDiet: 'Carnivore',
        dinoPic:  './imgs/trex.jpg'
    },
    {
        dinoType: 'Velociraptor',
        dinoSize: '10ft',
        dinoDiet: 'Carnivore',
        dinoPic: './imgs/raptor.jpg'
    },
    {
        dinoType: 'Allosaurus',
        dinoSize: '30ft',
        dinoDiet: 'Carnivore',
        dinoPic: './imgs/allo.jpg' 
    }
];

  const assignments = [
      {
        title: 'Product Cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentUrl: 'https://www.google.com' 
      },
      {
        title: 'Dinosaur Cards',
        dueDate: '03/012/2019',
        topic: 'HTML/CSS/JS',
        notes: 'Make Cards with JS Objects',
        assignmentUrl: 'https://www.google.com'
      },
      {
        title: 'JavaScript Functions',
        dueDate: '03/19/2019',
        topic: 'Javascript',
        notes: 'Make Advanced Functions',
        assignmentUrl: 'https://www.google.com'
      },
      {
        title: 'JavaScript Loops',
        dueDate: '03/26/2019',
        topic: 'JS',
        notes: 'Make Advanced Loops',
        assignmentUrl: 'https://www.google.com'
      },
      {
        title: 'BootStrap',
        dueDate: '04/02/2019',
        topic: 'HTML/CSS',
        notes: 'BootStrap Basics',
        assignmentUrl: 'https://www.google.com'
      }
  ];

const buildAssignments = () => {
    let domStringb = '';

    for(let i=0; i<assignments.length; i++){
        domStringb += `<div class = "assignCard">`;
        domStringb +=   `<header class= "assignTitle"><p>${assignments[i].title}</p></header>`;
        domStringb +=   `<h4 class="dueDate">${assignments[i].dueDate}</h4>`;
        domStringb +=   `<p class=" assignLinkP">Get the assignment <a href="${assignments[i].assignmentUrl}">HERE</a></p>`;
        domStringb +=   `<p class="assignTopic">TOPIC: ${assignments[i].topic}</p>`;
        domStringb +=   `<br>`;
        domStringb +=   `<p class="assignNotes">NOTES: ${assignments[i].notes}</p>`;
        domStringb += `</div>`;
    };
    print('assignDiv', domStringb, false);
};

  //buildAssignmentCards() loop over assignments and make a dom string
  // reuse print to display

  init();