var tempsDebut;
var tempsFin;
var tempsEcoule;

function debuterTemps() {
	var d = new Date();
	tempsDebut = d.getTime();
}

function finirTemps() {
	var d = new Date();
	tempsFin = d.getTime();
	tempsEcoule = tempsFin - tempsDebut;
}

function getTempsEcoule() {
	var res = " ";
	// create a new javascript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds
	var date = new Date(tempsEcoule);
	// hours part from the timestamp
	var hours = date.getHours();
	// minutes part from the timestamp
	var minutes = date.getMinutes();
	// seconds part from the timestamp
	var seconds = date.getSeconds();
	if (hours != 0) {
		res += hours + " heures et " + minutes + " minutes et " + seconds
				+ " secondes";
	} else if (minutes != 0) {
		res += minutes + " minutes et " + seconds + " secondes";
	} else if (seconds != 0) {
		res += seconds + " secondes";
	}
	// var d = new Date(tempsEcoule * 1000).format('h:i:s');
	// console.log(d);
	return res + " => " + tempsEcoule;
}
function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
			'Sep', 'Oct', 'Nov', 'Dec' ];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ',' + month + ' ' + year + ' ' + hour + ':' + min + ':'
			+ sec;
	return time;
}

function convvv(timestamp){
	var pubDate = new Date(timestamp);
	return pubDate.getSeconds();
}