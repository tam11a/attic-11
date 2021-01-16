// Message Design
function inboxShajai(username, message, isOwn=true, mid){
    var li = document.createElement("li");
    li.id = "$mid"+mid;
    var para = document.createElement("div");
    var temp = 'msg';
    if(isOwn)
        temp += ' user';
    //else
    //    notify();
    para.className = temp;
    var uname = document.createElement("div");
    uname.className = 'username';
    if(!isOwn)
        uname.className += ' fNickname';
    else
        uname.className += ' oNickname';
    var name = document.createTextNode(username);
    uname.appendChild(name);

    var utext = document.createElement("div");
    utext.classList = ['text']
    var text = document.createTextNode(message);
    utext.appendChild(text);

    para.appendChild(uname);
    para.appendChild(text);
    li.appendChild(para);

    var element = document.getElementById("messages");
    element.appendChild(li);
    scrollNow();
}

function playSound(url) {
    const audio = new Audio(url);
    audio.volume = 0.1;
    audio.play();
}

function notify(){
    //playSound("/audios/notification.mp3");
    playSound("https://static.xx.fbcdn.net/rsrc.php/yy/r/XFhtdTsftOC.ogg?_nc_eui2=AeE6Uv0rdePARnYEly5LJLyEBAX_Mt59UMcEBf8y3n1Qx3NlEYovfs9z9Ao2gp0_-B6ZswCQtfcyq9vpMUn3l9LG");
}