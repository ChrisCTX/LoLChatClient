(function() {
    var script = document.createElement("script");
    script.src = "jquery-1.4.3.min.js";
    script.onload = function() {
        $.getScript("http://localhost:8080/socket.io/socket.io.js", function() {
            var socket = new io.Socket("localhost", {"port": 8080});
            socket.on("connect", function() {
                $("form").submit(function() {
                    socket.send($("input").val());
                    return false;
                });
                $("button").removeAttr("disabled");
            });
            socket.on("disconnect", function() {
                $("button").attr("disabled", "disabled");
            });
            socket.on("message", function(message) {
                $("<li></li>").text(message).prependTo("ul");
            });
            socket.connect();
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();