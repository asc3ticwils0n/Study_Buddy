var homeWin = Titanium.UI.currentWindow;

var headLabel = Ti.UI.createLabel ({
	text: 'Home',
	font: {fontSize: 50},
	color: 'black',
	textAlign: 'center',
	width: 'Ti.UI.FILL',
	top: 10
});

var logOut = Ti.UI.createLabel({
	text: 'Log out',
	font: {fontSize: 10, fontWeight: 'bold'},
	color: 'blue',
	top: 40,
	right: 20
});

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

settingsB.addEventListener ('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'settings.js',
		backgroundColor: '#FFF0AA',
		oldWin: Ti.UI.currentWindow
	});
	newWin.open();
});

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
homeWin.add(courseB);
homeWin.add(myGroupB);
homeWin.add(friendsB);
homeWin.add(settingsB);
homeWin.add(notiB);
homeWin.open();
