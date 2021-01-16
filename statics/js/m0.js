// Scroll 
// Scroll Function (Any ID)
function scrollToBottom(id){
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
 }

// Scroll Messages
function scrollNow(){
    scrollToBottom("messages");
}


// Toggle JS

function toggleNav(){
    var play = document.getElementById("play");
    var nav = document.getElementById("navigation");
    var boxs = document.getElementById("wannaHide");
    var boxs1 = document.getElementById("wannaHideToo");
    play.classList.toggle('on');
    nav.classList.toggle('on');
    boxs.classList.toggle('offScr');
    boxs1.classList.toggle('offScr');
}

function loginOrRegister(){
    var forms = document.getElementsByClassName("logReg");
    forms[0].classList.toggle('offScr');
    forms[1].classList.toggle('offScr');
}

function nickname_toggle(){
    var nav = document.getElementById("nickname_nav");
    nav.classList.toggle('nick_on');
    var nav = document.getElementById("navFooter");
    nav.classList.toggle('jumpUp');
}

function toggleChat(){
    //console.log("pressed");
    var x = document.getElementById("actvOnOff");
    //console.log(x.innerText);
    /*var y = document.getElementById("actvS");
    if(y.innerText == "Off")
        y.innerText = "On";
    else
        y.innerText = "Off";*/
    x.classList.toggle("notactvState");
}


function toggleDark(){
    //console.log("pressed");
    var x = document.getElementById("darkOnOff");
    //console.log(x.innerText);
    /*var y = document.getElementById("darkS");
    if(y.innerText == "Off")
        y.innerText = "On";
    else
        y.innerText = "Off";*/
    x.classList.toggle("notactvState");
}

function toggleNotify(){
    toggleOnOff("notifyOnOff");
}

function toggleOnOff(id){
    var x = document.getElementById(id);
    x.classList.toggle("notactvState");
}

/*
nickname
profile
active status
dark mode
notifications
account settings
report technical issues
help
legal &amp; policies
switch account
logout
*/

function toggleMenuBtn(){
    document.getElementById("toggleXtrm").classList.toggle("offScr");
    document.getElementById("toggleDown").classList.toggle("offScr");
}

tabList = {
    "nickname": "nicknameTab",
    "profile": "profileTab",
    "active status": "actvTab",
    "dark mode": "darkTab",
    "notifications": "notifyTab",
    "account settings": "accntTab",
    "report technical issues": "rprtTechTab",
    "help": undefined,
    "legal &amp; policies": undefined,
    "switch account": "logoutTab",
    "logout": "logoutTab"
}
//var activeTab = undefined;

function toggleDown(){
    //toggleNickScrContent(activeTab);
    document.getElementsByClassName("btn_pressed")[0].click();
}

function toggleNickScrContent(clickedTab){
    var x = tabList[clickedTab];
    if(x){
        var y = document.getElementById(x);
        y.classList.toggle('offScr');
      //  if(!activeTab)
        //    activeTab = clickedTab;
    }
}