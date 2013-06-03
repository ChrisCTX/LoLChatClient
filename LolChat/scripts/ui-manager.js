function panelFading(){
    // Fades out the login panel and fades in the chat panel.
    $("#login").fadeOut(250);
    $("#panel").fadeIn(2000);
}

function makeEmoticons(string){
    // This function replaces certain reserved words for emoticon images.

    // This map can be extended, just add words and the tag to replace with.
    var emoticon_map = {
        "Kappa": "<img src='./images/emoticons/kappa.png' />",
        "Kreygasm": "<img src='./images/emoticons/kreygasm.png' />",
        "AwesomeFace": "<img src='./images/emoticons/awesomeface.png' />"
    };

    $("#tabs").replace(emoticon_map);
}

function makeTabs(){
    // Triggers jQuery UI tabs function.
    $( "#tabs" ).tabs();
}

function clearLogin(){
    // This function clears the Login username and password.
    $("#username").val('');
    $("#password").val('');
}

function clearChatBox(){
    // This function clears the Chat text box.
    $("#text").val('');
}

function makeContacts(){
    // Adds the number of tabs and its necessary DOM elements required.

    // Loops over the contact global object
    for (var contact in tabsContacts)
    {
        $("#contacts").append('<li><a> + contact + </a></li>');
        $("#tabs").append('<div></div>');
    }

    // We loop over each element type and add the increasing attributes.
    var count = 0;
    $("#contacts > li > a").each(function() {
       $(this).attr("href", "tab-"+count);
        count++
    });

    count = 0;
    $("#tabs > div").each(function() {
        $(this).attr("id", "tab-"+count);
        count++;
    });
}

function addChats(){

}

function drawChat(){
    // This function refreshes all the conversation and tabs

    // We dynamically generate the content based on contacts and chats
    makeContacts();

    makeEmoticons();
    makeTabs();
}


