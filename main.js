var tmp = $("#video_title>h1").clone();
tmp.find(":nth-child(n)").remove();
var tile = tmp.text();
var src = $("video#myVideo").attr("src");

//console.log(title);
//console.log(src); 
chrome.runtime.sendMessage({
	"title":title,
	"src":src
},function(res){
	console.log(res);
});