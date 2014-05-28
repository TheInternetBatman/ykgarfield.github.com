 $(document).ready(function(){
    var msg = decodeURI(getUrlVar("msg"));

    if(msg == "undefined") {
    	msg == "Happy!" 
    }

    $("#msgSpan").html(msg);
});