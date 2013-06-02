function emoticoniffy(string){
    var replacement = { ":)": "<img src='smiley1.png' />",
                        ":(": "<img src='smiley2.png' />",
                        ":-)": "<img src='smiley3.png' />",
                        "Kappa": <img src'./images/emoticons/kappa.png' />
                      }

    string = escape(string);
    for (var val in replacement)
        string = string.replace(new RegExp(escape(val), "g"), replacement[val]);
    return unescape(string);
}


$("#tabs > div > ul").each(function(){
    $(this).text = emoticoniffy(($this).text);
});