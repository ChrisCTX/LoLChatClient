
// jQuery extension for replacing string content inside an element
// taken from http://jsfiddle.net/nM34n/ by Piotr and Oskar

(function( $ ) {
    $.fn.replace = function(obj) {
        var a = $(this).html();
        for (var i in obj){
            a = a.replace(new RegExp(i.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g"), obj[i]);
        }
        return $(this).html(a);
    };
})( jQuery );