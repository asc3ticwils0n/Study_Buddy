var homeWin = Titanium.UI.currentWindow;

var topView = Ti.UI.createView({
	backgroundColor:'#000005',
	height:40,
	top:0
});

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
	font: {fontSize: 15, fontWeight: 'bold'},
	color: 'blue',
	top: 50,
	right: 20
});

var courseB = Ti.UI.createButton ({
	backgroundColor:'#9f9d9d',
	borderColor:'#444444',
	borderWidth:3,
	title: 'Courses',
	top: 130,
	left: 80,
	width: 100,
	height: 100
});

var myGroupB = Ti.UI.createButton ({
	backgroundColor:'#444444',
	borderColor:'#9f9d9d',
	borderWidth:3,
	title: 'My Groups',
	top: 130,
	left: 230,
	width: 100,
	height: 100
});

var friendsB = Ti.UI.createButton ({
	backgroundColor:'#444444',
	borderColor:'#9f9d9d',
	borderWidth:3,
	title: 'Friends',
	top: 260,
	left: 80,
	width: 100,
	height: 100
});

var settingsB = Ti.UI.createButton ({
	backgroundColor:'#9f9d9d',
	borderColor:'#444444',
	borderWidth:3,
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
	height: 40
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
		backgroundColor: 'white',
		oldWin: Ti.UI.currentWindow
	});
	newWin.open();
});

friendsB.addEventListener ('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'friendPage.js',
		backgroundColor: 'white',
		oldWin: Ti.UI.currentWindow
	});
	newWin.open();
});
logOut.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'app.js'
	});
	newWin.open();

	homeWin.close();
});

myGroupB.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'groupPage.js',
		backgroundColor: '#A9A9A9',
		title:'Groups'
	});
	newWin.open();
});

homeWin.add(topView);
homeWin.add(headLabel);
homeWin.add(logOut);
homeWin.add(courseB);
homeWin.add(myGroupB);
homeWin.add(friendsB);
homeWin.add(settingsB);
homeWin.add(notiB);
homeWin.open();
