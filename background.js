chrome.runtime.onMessage.addListener(function(message,sender,res){
	var filename = "colorv/"+message.title + ".mp4";
	var url = message.src;
	chrome.downloads.download({
		url:url,
		filename:filename,
		saveAs:true,
		conflictAction:"uniquify"
	},function(){
		res("downloads success!!!");
	});
});