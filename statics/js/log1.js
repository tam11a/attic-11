function logout(){
    var i = firebase.auth().signOut();
    //console.log(i);
    eraseCookie("uid");
    eraseCookie("avatar");
    window.location.replace("index.html");
}

function switchaccount(){
    eraseCookie("avatar");
    window.location.replace("index.html");
}