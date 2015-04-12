var homeWin = Titanium.UI.currentWindow;

var headLabel = Ti.UI.createLabel ({
	text: 'Home',
	textAlign: 'center',
	width: 'Ti.UI.FILL',
	top: 10
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

homeWin.add(headLabel);
homeWin.add(courseB);
homeWin.add(myGroupB);
homeWin.add(friendsB);
homeWin.add(settingsB);
homeWin.add(notiB);
homeWin.open();
