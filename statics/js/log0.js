function registerUser(){
    var roomName = document.getElementById("username1");
    var mail = document.getElementById("email1");
    var pass = document.getElementById("password1");
    var cpass = document.getElementById("cpassword1");
    if(pass.value != cpass.value || !pass.value || !cpass.value){
        pass.classList.add("wrongSubmit");
        cpass.classList.add("wrongSubmit");
        pass.value = "";
        cpass.value = "";
    }
    else{
        _room = getRoomname(mail.value);
        register(roomName.value, mail.value, pass.value);
    }
}

function signInUser(){
    var mail = document.getElementById("username0");
    var pass = document.getElementById("password0");
    if(mail.value && pass.value)
        signIn(mail.value, pass.value);
    else
        {
            mail.classList.add("wrongSubmit");
            pass.classList.add("wrongSubmit");
        }
}

function register(roomName, email, password){
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    _key = user.user.uid;
    console.log(user.user.uid);
    setCookie("uid", _key, 600);
    setDatabaseForUser(roomName, email, password);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

function signIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      //console.log(user);
      _key = user.user.uid;
      setCookie("uid", _key, 600);
      window.location.replace("/avatar.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function getRoomname(txt){
    return txt.replace(/[^a-zA-Z0-9]+/g, "").replace(" ", "-");
}
function setDatabaseForUser(roomName, mail, pass){
  var Payload = {
      'type': 'Room-Info',
      'roomname': roomName,
      'email': mail,
      'password': pass
  }
  //console.log(Payload);
  database.ref(_key+"/-info").push().set(Payload);
  //console.log(user_details);
  database.ref(_key+"/-users").push(user_details);
  registrationConfirm();
}

function afterRegLogin(){
  window.location.replace("avatar.html");
}
