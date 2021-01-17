function sendMessage(){
    var mBox = document.getElementById('messageBox');
    if(mBox.value)
        {
            uploadMessage(mBox.value);
            mBox.value = '';
        }
}
function uploadMessage(text){
    //console.log(text);
    // save in database
    database.ref(_key+"/-messages").push().set(messagesFormat(text));
    // firebase.database().ref("messages").push().set({"author": "tam", "text": "hi!"});
}
function messagesFormat(text){
    message_object = {
        "author_id": self_uid,
        "text": text,
        "delivered_to": [self_uid],
        "seen_by": [self_uid],
        "timestamp": Date.now() /1000 |0
    }
    return message_object;
}

function uploadNickname(name){
    if(!name)
        name = user_details[friends_uid]['name'];
    user_details[friends_uid]['nickname'] = name;
    //console.log(user_details);
    database.ref(_key+"/-users/"+user_key).update(user_details);
}
function uploadroomname(){
    var name = document.getElementById("updateroomname").value;
    if(name)
    {
        account_details["roomname"] = name;
        database.ref(_key+"/-info/"+room_key).update(account_details);
        document.getElementById("updateroomname").value = "";
    }
}
function updateUsername(){
    var name = document.getElementById("updateusername").value;
    if(name)
    {
        if(user_details[self_uid]['name'] == user_details[self_uid]['nickname'])
            user_details[self_uid]['nickname'] = name;
        user_details[self_uid]['name'] = name;
        console.log(user_details);
        database.ref(_key+"/-users/"+user_key).update(user_details);
        document.getElementById("updateusername").value = "";
    }
}

// Listen Message
database.ref(_key+"/-messages").on("child_added", function (snapshot) {
    //console.log(snapshot);
    var message_object = snapshot.val();
    //console.log(snapshot.key);
    console.log(message_object);
    inboxShajai(user_details[message_object.author_id]["nickname"], message_object.text, (message_object.author_id == self_uid &&  message_object.delivered_to.includes(self_uid)), snapshot.key);
    if(!message_object.delivered_to.includes(self_uid))
        {
            message_object.delivered_to.append(self_uid);
            database.ref(_key+"/-messages/"+snapshot.key).update(message_object);
        }
    //inboxShajai(snapshot.key, message_object.text, message_object.author_id == self_uid);
});

