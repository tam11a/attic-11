function getUserInfo(){
    _key = getCookie("uid");
    database.ref(_key+"/-users").on("value", function(snapshot) {
        for(i in snapshot.val()){
            user_key = i;
            //console.log(snapshot.val()[i]);
            user_details = snapshot.val()[i];
            updateNicknames();
            updateNames();
            break;
        }
      });

    database.ref(_key+"/-info").on("value", function(snapshot) {
        for(i in snapshot.val()){
                room_key = i;
                account_details = snapshot.val()[i];
                updateRoomnames();
        }
    });
}

function updateNames(){
    var namePlaces = document.getElementsByClassName("nNameShow");
    for(i in namePlaces){
        //console.log(namePlaces[i]);
        namePlaces[i].innerHTML = user_details[friends_uid]["name"];
    }
    document.getElementById("nNickShow_").placeholder = user_details[friends_uid]["nickname"];
    document.getElementById("updateusername").placeholder = user_details[self_uid]["name"];
    document.getElementById("self_uid").innerHTML = self_uid;
}

function updateNicknames(){
    var car = document.getElementsByClassName("oNickname");
    for(i in car){
        car[i].innerHTML = user_details[self_uid]['nickname'];
    }
    car = document.getElementsByClassName("fNickname");
    for(i in car){
        car[i].innerHTML = user_details[friends_uid]['nickname'];
    }
}

function updateRoomnames(){
    var namePlaces = document.getElementsByClassName("roomName");
    for(i in namePlaces){
        //console.log(namePlaces[i]);
        namePlaces[i].innerHTML = account_details["roomname"];
        namePlaces[i].placeholder = account_details["roomname"];
    }
}

self_uid = getCookie("avatar");
if(self_uid == "001")
    friends_uid = "002";
else
    friends_uid = "001";
getUserInfo();