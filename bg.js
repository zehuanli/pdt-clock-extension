// Register an alarm to update the time every minute
chrome.alarms.create({ delayInMinutes: 1 });
chrome.alarms.onAlarm.addListener(() => {
  update();
});

// Initial update
update();

function badgeColor()
	{
	chrome.action.setBadgeBackgroundColor({color:[0, 215, 0, 255]})
}
	
function updateClock()
	{
    var ptDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})),
    hour = ptDate.getHours(),
    min = ptDate.getMinutes();
	
	hour = ( hour < 10 ? "0" : "" ) + hour;
	min = ( min < 10 ? "0" : "" ) + min;
	time = hour + "" + min;
	
	chrome.action.setBadgeText({text:'' + time});
}

//Run Clock function & set badge
function update() {
    updateClock();
    badgeColor();
}
