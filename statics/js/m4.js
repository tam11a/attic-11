// Eventlisteners

var isNavOn = null;
var NavHeightWillBe = 0;

const btn = document.querySelectorAll('.btn');
btn.forEach(el => el.addEventListener('click', event => {
    if(!isNavOn || isNavOn == event.target.innerHTML)
    {
        var x = document.getElementById("displayFront");
        x.classList.toggle('offScr');

        toggleMenuBtn();
        toggleNickScrContent(event.target.innerHTML);

        nickname_toggle();
        event.target.classList.toggle('btn_pressed');
       
        var temp = document.getElementById("navigation");
        NavHeightWillBe = event.target.offsetTop-20;
        temp.scroll(0, NavHeightWillBe);
        
        if(!isNavOn)
            isNavOn = event.target.innerHTML;
        else
            isNavOn = null;
    }
    else{
        temp = document.getElementById("navigation");
        temp.scroll(0, NavHeightWillBe);
    }
    /*event.target.scrollIntoView();*/
}));

// NickName Change Buttons
const nickbtn = document.querySelectorAll('.nickbtn');
nickbtn.forEach(el => el.addEventListener('click', event => {
    //console.log(event.target.innerHTML);
    if(event.target.innerHTML == "clear")
        uploadNickname(null);
    else{
        var t = document.getElementById("nNickShow_").value;
        if(t)
            uploadNickname(t);
    }
    document.getElementById("nNickShow_").value = "";
}));

// Chat On Off Btn
document.getElementById('actvOnOff').addEventListener('click', function(){
    toggleChat();
});
// Dark Mode
document.getElementById('darkOnOff').addEventListener('click', function(){
    toggleDark();
});
// Dark Mode
document.getElementById('notifyOnOff').addEventListener('click', function(){
    toggleNotify();
});

// Send with Enter
document.getElementById('messageBox')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
          event.preventDefault();
          sendMessage()
        }
  });