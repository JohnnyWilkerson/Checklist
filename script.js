const firebaseConfig = {
    apiKey: "AIzaSyDFAWqxQMkTGUN7LwAMk-cnWjaiUBLrmTY",
    authDomain: "checklist-4824c.firebaseapp.com",
    databaseURL: "https://checklist-4824c-default-rtdb.firebaseio.com",
    projectId: "checklist-4824c",
    storageBucket: "checklist-4824c.appspot.com",
    messagingSenderId: "493740534465",
    appId: "1:493740534465:web:75216e6bed62d0c3934240"
  };

  firebase.initializeApp(firebaseConfig);
getData();

function add(){
  item = document.getElementById("inpt").value;
  firebase.database().ref("/").child(item).update({
    purpose: "adding message"
  });
  getData();
}

function getData(){
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    item = childKey;
  row = "<div>" + item + "</div>";
  document.getElementById("output").innerHTML += row;
  });});}

function del(){
  tbd = document.getElementById("inpt").value;
  firebase.database().ref("/").child(tbd).remove();
}