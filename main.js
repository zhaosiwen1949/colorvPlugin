var tmp = $("#video_title>h1").clone();
tmp.find(":nth-child(n)").remove();
var ttile = tmp.text();
var src = $("video#myVideo").attr("src");

console.log(title);
console.log(src); 