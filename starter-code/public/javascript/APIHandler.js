class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get('http://localhost:8000/characters')
      .then(list => {
        console.log(list)
        let characterContainer = document.getElementsByClassName("characters-container")[0];
        console.log(characterContainer.firstChild);
        characterContainer.removeChild(characterContainer.firstChild);
        list.data.forEach(element => {
          let newNode = document.createElement('div');
          newNode.className = "character-info";
          newNode.innerHTML = `
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
        `;

          characterContainer.appendChild(newNode);
        })
        

      })
      .catch(err => {
        console.log('du nich, weil ...', err)
      })
  };


  getOneRegister(myId) {

    axios.get(`http://localhost:8000/characters/${myId}`)
      .then(thisOne => {
        console.log(thisOne);
        document.getElementsByClassName('name')[0].innerHTML = 'Name: '+ thisOne.data.name;
        document.getElementsByClassName('occupation')[0].innerHTML = 'Occupation: '+ thisOne.data.occupation;
        document.getElementsByClassName('cartoon')[0].innerHTML = 'Is it a Cartoon? '+ (thisOne.data.cartoon==='on' ? 'yes': 'no');
        document.getElementsByClassName('weapon')[0].innerHTML = 'Weapon: '+ thisOne.data.weapon;
      })
      .catch(err => {
        console.log('du nich, weil ...', err)
      })

  }

  createOneRegister(name, occupation, weapon, cartoon) {

    const newOne = {
      name,
      occupation,
      weapon,
      cartoon
    }

    axios.post('http://localhost:8000/characters', newOne)
      .then(thisOne => {
        console.log(thisOne)
      })
      .catch(err => {
        console.log('du nich, weil ...', err)
      })
  }

  updateOneRegister(name, occupation, weapon, cartoon, id) {

    const updateOne = {
      name,
      occupation,
      weapon,
      cartoon
    }


    axios.put(`http://localhost:8000/characters/${id}`,updateOne)
    .then(thisOne => {
      console.log(thisOne)
    })
    .catch(err => {
      console.log('du nich, weil ...', err)
    })


  }

  deleteOneRegister(myId) {
    axios.delete(`http://localhost:8000/characters/${myId}`)

      .then(thisOne => {
        console.log(thisOne)
        
      })
      .catch(err => {
        console.log('du nich, weil ...', err)
      })
  }
}