 $(document).ready(function(){
	var biaobai = decodeURI(getUrlVar("biaobai"));
    var name = decodeURI(getUrlVar("name"));
    if (name == "undefined") {
		if (biaobai == "Y") {
			name = "I Love You";
		} else {
			name = "Happy!";
		}
    } else {
		if (biaobai == "Y") {
			name = name + ", I Love You, (╯3╰)"
		} else {
			name = "祝" + name + "童鞋 Happy!天天快乐!"
		}
    }
    $("#nameSpan").html(name);
});