
const firebaseConfig = {
      apiKey: "AIzaSyA46YLye4Yx4HfGk14mOhkBzHVD4UYY2wE",
      authDomain: "kwitter-9495a.firebaseapp.com",
      databaseURL: "https://kwitter-9495a-default-rtdb.firebaseio.com",
      projectId: "kwitter-9495a",
      storageBucket: "kwitter-9495a.appspot.com",
      messagingSenderId: "368534696437",
      appId: "1:368534696437:web:3746389456a90a488670bc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class=' room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("Room_names");
       window.location="index.html";
 }
