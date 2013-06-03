function panelFading(){
    $("#login").fadeOut(250);
    $("#panel").fadeIn(2000);
}

function emoticoniffy(string){
    var emoticon_map = {
        "Kappa": "<img src'./images/emoticons/kappa.png' />"
    };

    string = escape(string);
    for (var val in replacement)
        string = string.replace(new RegExp(escape(val), "g"), emoticon_map[val]);
    return unescape(string);
}

function tabbify(){
    $( "#tabs" ).tabs();
}

function clearLogin(){
    $("#username").val('');
    $("#password").val('');
}

function clearChatBox(){
    $("#text").val('');
}

function drawChat(){

}