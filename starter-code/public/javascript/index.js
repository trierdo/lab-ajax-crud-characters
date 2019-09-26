const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault();
    charactersAPI.getFullList();
  });





  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let myId = document.getElementsByName('character-id')[0].value;
    event.preventDefault();
    //console.log('########',myId);
    let content = charactersAPI.getOneRegister(myId);
    console.log('########## ',content);
    
  });











  document.getElementById('delete-one').addEventListener('click', function (event) {
    let myId = document.getElementsByName('character-id-delete')[0].value;
    event.preventDefault();
    //console.log('########', myId);
    charactersAPI.deleteOneRegister(myId);


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let myName = document.getElementsByName('name')[0].value;
    let myOccupation = document.getElementsByName('occupation')[0].value;
    let myWeapon = document.getElementsByName('weapon')[0].value;
    let myCartoon = document.getElementsByName('cartoon')[0].value;
    event.preventDefault();
    charactersAPI.createOneRegister(myName, myOccupation, myWeapon, myCartoon);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let myName = document.getElementsByName('name')[1].value;
    let myOccupation = document.getElementsByName('occupation')[1].value;
    let myWeapon = document.getElementsByName('weapon')[1].value;
    let myCartoon = document.getElementsByName('cartoon')[1].value;
    let myId = document.getElementsByName('chr-id')[0].value;
    event.preventDefault();
    charactersAPI.updateOneRegister(myName, myOccupation, myWeapon, myCartoon, myId);


  });

});