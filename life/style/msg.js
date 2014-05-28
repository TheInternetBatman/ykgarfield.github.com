 $(document).ready(function(){
    var name = decodeURI(getUrlVar("name"));
    var msg = decodeURI(getUrlVar("msg"));
    var info = "";

    if(name == "undefined") {
    	name = "";
    }

    if(msg == "") {
    	msg = "";
    }

    if (name == "" && msg = "undefined") {};

    $("#nameSpan").html(info);
});