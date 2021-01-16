if(!getCookie("uid")){
    window.location.replace("login.html");
}else if(!getCookie("avatar")){
    window.location.replace("avatar.html");
}else{
    window.location.replace("message.html");
}