/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  firebase.database().ref("/message").once("value", DO_THIS)
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: "Yo what's up!"
    }
  )
}



highscores = {
  game1: {
    users: {
      Lukas: 99999,
      Josh: 10000,
      Coby: 9,
      Pasha: 987654321,
    }
  },
  game2: {
    users: {
      Seb: 2345678,
      Devesh: 434978597626592745,
      Lucas: 1,
      Callum: 67,
    }
  }
}
firebase.database().ref('/').set(highscores)

let user = prompt("What is your name?");
console.log("user: " + user);
let score = 0;
console.log("score: " + score);
firebase.database().ref('/game1/users/'+user).set(
  score
);

function scoresystem() {
  console.log("score: " + score);
  firebase.database().ref('/game1/users/'+user).set(
  score = score + 1
);
}


function DO_THIS(snapshot) {
  console.log(snapshot.val());
}

function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead);
  console.log("Leaving simpleRead")
}

function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}


function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log("No message stupid");
  }
  else {
    console.log("The message is: " + dbData)
  }
}

function fb_readError(error) {
  firebase.database().ref('/').child('message').once('value', displayfb_readError);
  console.log("There was an error reading the message");
  console.error(error);
}

function goodbye() {
  console.log("Running goodbye()")
  firebase.database().ref('/').set(
    {
      message: 'Go away!'
    }
  )
}

function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead);
}


