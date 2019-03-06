//loop over dinos
//build up a domstring
//print domstring to the dom

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
  };

  init();
  console.log('testing');