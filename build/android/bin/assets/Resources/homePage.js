var homeWin = Titanium.UI.currentWindow;

var headLabel = Ti.UI.createLabel ({
	text: 'Home',
<<<<<<< HEAD
=======
	font: {fontSize: 50},
	color: 'black',
>>>>>>> 7e2d3306b4811d72a9ef9c0ba2a7d8d76e8f75c3
	textAlign: 'center',
	width: 'Ti.UI.FILL',
	top: 10
});

<<<<<<< HEAD
=======
var logOut = Ti.UI.createLabel({
	text: 'Log out',
	font: {fontSize: 10, fontWeight: 'bold'},
	color: 'blue',
	top: 40,
	right: 20
});

>>>>>>> 7e2d3306b4811d72a9ef9c0ba2a7d8d76e8f75c3
var courseB = Ti.UI.createButton ({
	title: 'Courses',
	top: 130,
	left: 80,
	width: 100,
	height: 100
});

var myGroupB = Ti.UI.createButton ({
	title: 'My Groups',
	top: 130,
	left: 230,
	width: 100,
	height: 100
});

var friendsB = Ti.UI.createButton ({
	title: 'Friends',
	top: 260,
	left: 80,
	width: 100,
	height: 100
});

var settingsB = Ti.UI.createButton ({
	title: 'Settings',
	top: 260,
	left: 230,
	width: 100,
	height: 100
});

var notiB = Ti.UI.createButton ({
	title: 'Notifications',
	top: 400,
	left: 145,
	width: 125,
	height: 30
});

courseB.addEventListener('click', function(e) {
	var newWin = Ti.UI.createWindow({
		url: 'coursePage.js',
		backgroundColor: '#FFF0AA'
	});
	newWin.open();
});

settingsB.addEventListener ('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'settings.js',
<<<<<<< HEAD
		backgroundColor: '#FFF0AA'
=======
		backgroundColor: '#FFF0AA',
		oldWin: Ti.UI.currentWindow
>>>>>>> 7e2d3306b4811d72a9ef9c0ba2a7d8d76e8f75c3
	});
	newWin.open();
});

<<<<<<< HEAD
myGroupB.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'groupPage.js',
		backgroundColor: '#A9A9A9',
		title:'Groups'
	});
	newWin.open();
});

homeWin.add(headLabel);
=======
friendsB.addEventListener ('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'friendPage.js',
		backgroundColor: '#FFF0AA',
		oldWin: Ti.UI.currentWindow
	});
	newWin.open();
});
logOut.addEventListener('click', function(e){
	homeWin.close();
});

homeWin.add(headLabel);
homeWin.add(logOut);
>>>>>>> 7e2d3306b4811d72a9ef9c0ba2a7d8d76e8f75c3
homeWin.add(courseB);
homeWin.add(myGroupB);
homeWin.add(friendsB);
homeWin.add(settingsB);
homeWin.add(notiB);
homeWin.open();
