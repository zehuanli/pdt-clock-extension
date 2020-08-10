var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function clockWrite() {
	//Set all the time variables
    var ptDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})),
    h = ptDate.getHours(),
    m = ptDate.getMinutes(),
    s = ptDate.getSeconds();
	
	//Set all the date variables
	day	= d.getDay(),
	date = d.getDate(),
	month = d.getMonth(),
	year = d.getFullYear();
	
	h = (h < 10 ? '0' : '') + h;
	m = (m < 10 ? '0' : '') + m;
	s = (s < 10 ? '0' : '') + s;
	
	pt_time = (h + ':' + m + ':' + s);
	pt_date = (days[day] + ' ' + months[month] + ' ' + date + ', ' + year);
	
	document.getElementById("time").firstChild.nodeValue = pt_time;
	document.getElementById("date").firstChild.nodeValue = pt_date;
}

document.addEventListener('DOMContentLoaded', function () {
	setInterval(clockWrite, 1000); clockWrite();
});
