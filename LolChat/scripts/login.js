function postLoginFades(){
    $("#login_button").click(function () {
        $("#login").fadeOut(1500);
        $("#panel").fadeIn(500);
        return false;
    });
}