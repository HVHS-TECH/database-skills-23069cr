/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/



// This function reads the high scores for game1 and logs them to the console//


//log in with google account//


var GLOBAL_user;

var authenticationListener;
//this is a listener that runs once//
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}


//this is the callback function for the listener//
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //Save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
  }
}

//makes a log in with google account pop up//
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; // Save the user details object to a global variable
    console.log("User has logged in")
  });
}


function fb_logout() {
  authenticationListener(); // this line turns off the listener
  firebase.auth().signOut();
  console.log("logged out (hopefully)")
}







function fb_displayHighScores(snapshot) {
  snapshot.forEach(fb_showOneScore);
}



function fb_logDatabaseRead(snapshot) {
  let data = snapshot.val();
  console.log("data");
  console.log(data);
}





//like displayRead but it only does it once//
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead);
  console.log("Leaving simpleRead")
}

//it reads the message from the database and displays it on the website//
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}

//error stuff//
function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}