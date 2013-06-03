var websocket = io.connect("http://localhost:6969");

$(document).on("ready", chatEvents);

var myUsername;
var tabsContacts;
var myChats;


function chatEvents()
{
    // We register and map functions to events
    websocket.on("MessageFromServer", receiveMessage);
    websocket.on("LoginResponse", handleResponse);
    $("#send_form").on("submit", sendMessage);
    $("#login_form").on("submit", logIn);
}

function sendMessage()
{
    // This function handles outgoing messages.

    // We get the index of the selected tab
    var contact_index = $("#tabs").tabs("option", "active");

    // We check or tabs<=>contact structure for the name
    //of the contact based on the index we previously got
    var contactName = tabsContacts[contact_index];

    // We create the message with the text, from and to values
    var message = {from: myUsername, to: contactName, text: $("#text").val()};

    // We send the message to the server
    websocket.emit("MessageFromClient", message);

    clearChatBox();

    return false; // We return false so the button doesn't reload the entire page.
}

function receiveMessage(messages)
{
    // This function handles incoming messages

    // The server actually sends us the entire conversations for our contacts
    myChats = messages;

    // So we just have to handle 're-painting' them, but that's the UI manager's job.
    drawChat();
}

function logIn()
{
    // This function requests the server to be logged in.
    // Note that val() provides built-in sanitation.
    var login_request = {username: $("#username").val(), password: $("#password").val()};
    websocket.emit("LogIn", login_request);
    clearLogin();
    return false; // We return false so the button doesn't reload the entire page.
}

function handleResponse(response)
{
    // Handles the servers response that indicates if we logged in successfully or not.

    // If the server authenticates the username.
    if (response.auth == true)
    {
        // We set it for the rest of the script to see.
        myUsername = response.user_name;
        panelFading();

        // We get the user's contacts from the server
        tabsContacts = response.contacts;

        // And the conversations
        myChats = response.chats;

        // Call the UI Manager to add all the good stuff.
        drawChat();
    }
    // If login failed we simply ignore it


}