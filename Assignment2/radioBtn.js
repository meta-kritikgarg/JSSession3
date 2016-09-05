function fnResult(){

	var result = "";
	var gen = document.getElementsByName("gen");
	result += 	fnGetSelectedValue(gen)+" ";
	var cate = document.getElementsByName("cate");
	result += 	fnGetSelectedValue(cate);
	document.getElementById("result").innerHTML = result + " selected";
}

function fnGetSelectedValue(obj) {
	var output = "";
	for(var i=0; i<obj.length; i++) {
		if(obj[i].checked) {
			output += obj[i].value;
		}
	}
	return output;
}
