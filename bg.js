//Set badge text refresh rate: 5s
var refresh = 5000;
setInterval(updateClock, refresh);

function badgeColor()
	{
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 215, 0, 255]})
}
	
function updateClock()
	{
    var ptDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})),
    hour = ptDate.getHours(),
    min = ptDate.getMinutes();
	
	hour = ( hour < 10 ? "0" : "" ) + hour;
	min = ( min < 10 ? "0" : "" ) + min;
	time = hour + "" + min;
	
	chrome.browserAction.setBadgeText({text:'' + time});
}

//Run Clock function & set badge
updateClock();
badgeColor();
