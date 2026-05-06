/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/



// This function reads the high scores for game1 and logs them to the console//
function fb_readHighScores() {
    console.log("Reading High scores");
    firebase.database().ref('game1/users')
        .once('value', fb_displayHighScores, fb_readError);
}

function fb_displayHighScores(snapshot) {
    snapshot.forEach(fb_showOneScore);

}

//reads each child's score//
function fb_showOneScore(child) {
    console.log(child.key + " got " + child.val() + " points");
}



function fb_logDatabaseRead(snapshot) {
    let data = snapshot.val();
    console.log("data");
    console.log(data);
}



function DO_THIS(snapshot) {
    console.log(snapshot.val());
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
    firebase.database().ref('/').child('message').once('value', displayfb_readError);
    console.log("There was an error reading the message");
    console.error(error);
}