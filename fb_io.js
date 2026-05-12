/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/



// This function reads the high scores for game1 and logs them to the console//









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