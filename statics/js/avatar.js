function getUserInfo(){
    _key = getCookie("uid");
    database.ref(_key+"/-users").on("value", function(snapshot) {
        for(i in snapshot.val()){
            user_key = i;
            //console.log(snapshot.val()[i]);
            user_details = snapshot.val()[i];
            updateChoiceScr();
            break;
        }
      });
}

function updateChoiceScr(){
    //console.log(user_details);
    var temp = document.getElementsByClassName("cBtn001");
    temp["001"].innerHTML = user_details["001"]["name"];
    temp["002"].innerHTML = user_details["002"]["name"];
}

// Avatar Choice Event
const avabtn = document.querySelectorAll('.cBtn001');
avabtn.forEach(el => el.addEventListener('click', event => {
    //console.log(event.target.id);
    setCookie("avatar", event.target.id, 200);
    window.location.replace("message.html");
}));
getUserInfo();