var friendWin = Ti.UI.currentWindow;

var search = Ti.UI.createTextField({
	hintText: 'Search (Name, Course)',
	opacity: 0.5,
	width: '50%',
	left: '50%',
	top: '3%'
});

var aView = Ti.UI.createView({
	backgroundColor: '#9f9d9d',
	top: '7%',
	bottom: '75%',
	left: 0,
	right: 0
});

var bView = Ti.UI.createView({
	backgroundColor: '#444444',
	top: '25%',
	bottom: '40%',
	left: 0,
	right: 0
});

var cView = Ti.UI.createView({
	backgroundColor: '#9f9d9d',
	top: '60%',
	bottom: 0,
	left:0,
	right: 0
});

var back = Ti.UI.createButton({
	title: 'Back',
	top: '3%',
	bottom: '93%',
	left: '5%',
	right: '85%'
});

var addFriend = Ti.UI.createButton({
	title: 'Add a Friend',
	top: '92%',
	bottom: '3%',
	left: '35%',
	right: '35%'
});

friendWin.add(search);
friendWin.add(aView);
friendWin.add(bView);
friendWin.add(cView);
friendWin.add(back);
friendWin.add(addFriend);

friendWin.open();
