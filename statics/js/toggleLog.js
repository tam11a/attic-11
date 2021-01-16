// Toggle Scripts

function loginOrRegister(){
    var forms = document.getElementsByClassName("logReg");
    forms[0].classList.toggle('offScr');
    forms[1].classList.toggle('offScr');
}

function registrationConfirm(){
    document.getElementById("RoomCon").innerText = document.getElementById("username1").value;
    var forms = document.getElementsByClassName("logReg");
    forms[1].classList.toggle('offScr');
    forms[2].classList.toggle('offScr');
}

function toLogin(){
    var forms = document.getElementsByClassName("logReg");
    forms[0].classList.toggle('offScr');
    forms[2].classList.toggle('offScr');
}
