/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyCk102EjA3cGbhDOmPXucRhwaLa_OCKvPQ",
  authDomain: "cobyrollo-12comp.firebaseapp.com",
  databaseURL: "https://cobyrollo-12comp-default-rtdb.firebaseio.com",
  projectId: "cobyrollo-12comp",
  storageBucket: "cobyrollo-12comp.firebasestorage.app",
  messagingSenderId: "336583454402",
  appId: "1:336583454402:web:fc9d396e2dace7f3ea155b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// This log prints the firebase object to the console to show that it is working.
// As soon as you have the script working, delete this log.
console.log("Firebase initialize finished:");
console.log(firebase);
