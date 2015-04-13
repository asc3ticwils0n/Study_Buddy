//common positioning variables
var headL = '5%'; 
var nameL = '10%'; var emailR = '10%';

var friendWin = Ti.UI.currentWindow;
//searchbar
var search = Ti.UI.createTextField({
	hintText: 'Search (Name, Course)',
	opacity: 0.5,
	width: '50%',
	left: '50%',
	top: '0%'
});
//views
var aView = Ti.UI.createView({
	backgroundColor: '#9f9d9d',
	top: '10%',
	bottom: '65%',
	left: 0,
	right: 0
});

var bView = Ti.UI.createView({
	backgroundColor: '#444444',
	top: '35%',
	bottom: '30%',
	left: 0,
	right: 0
});

var cView = Ti.UI.createView({
	backgroundColor: '#9f9d9d',
	top: '70%',
	bottom: 0,
	left:0,
	right: 0
});
//buttons
var back = Ti.UI.createButton({
	title: 'Back',
	//font: {fontSize: 10},
	color: 'black',
	top: '0%',
	left: '5%'
});

back.addEventListener('click',function(e){
	var newWin = Ti.UI.createWindow({
		url:'homePage.js'
	});
	newWin.open();
});

var addFriend = Ti.UI.createButton({
	title: 'Add a Friend',
	color: 'black',
	bottom: '12%',
	left: '30%',
	right: '30%'
});
//Labels

var aHeading = Ti.UI.createLabel({
	text: 'A',
	color: 'black',
	font: {fontSize: 20, fontWeight: 'bold'},
	top: '1%',
	left: headL
});

var aName1 = Ti.UI.createLabel({
	text: 'Albertson, Johnathon',
	color: 'black',
	font: {fontSize: 20},
	left: nameL
});

var aEmail = Ti.UI.createLabel({
	text: 'domain@vandals',
	color: 'black',
	font: {fontSize: 10},
	right: emailR
});

var bHeading = Ti.UI.createLabel({
	text: 'B',
	font: {fontSize: 20, fontWeight: 'bold'},
	color: 'black',
	top: '1%',
	left: headL
});

var bName1 = Ti.UI.createLabel({
	text: 'Bachinski, Michael',
	font: {fontSize: 20},
	color: 'black',
	left: nameL,
	top: '10%'
});

var bEmail1 = Ti.UI.createLabel({
	text: 'domain@vandals',
	font: {fontSize: 10},
	color: 'black',
	right: emailR,
	top: '10%'
});

var bName2 = Ti.UI.createLabel({
	text: 'Bosna, Becky',
	font: {fontSize: 20},
	color: 'black',
	left: nameL,
	top: '40%'
});

var bEmail2 = Ti.UI.createLabel({
	text: 'domain@vandals',
	font: {fontSize: 10},
	color: 'black',
	right: emailR,
	top: '40%'
});

var bName3 = Ti.UI.createLabel({
	text: 'Brakstad, Geoff',
	font: {fontSize: 20},
	color: 'black',
	left: nameL,
	top: '70%'
});

var bEmail3 = Ti.UI.createLabel({
	text: 'domain@vandals',
	font: {fontSize: 10},
	color: 'black',
	right: emailR,
	top: '70%'
});

var cHeading = Ti.UI.createLabel({
	text: 'C',
	font: {fontSize: 20, fontWeight: 'bold'},
	color: 'black',
	top: '1%',
	left: headL
});

var cName1 = Ti.UI.createLabel({
	text: 'Chamber, Monk',
	font: {fontSize:20},
	left: nameL,
	color: 'black',
	top: '10'
});

var cEmail1 = Ti.UI.createLabel({
	text: 'domain@vandals',
	font: {fontSize: 10},
	top: '10%',
	color: 'black',
	right: emailR
});

friendWin.add(search);
friendWin.add(aView);
friendWin.add(bView);
friendWin.add(cView);
friendWin.add(back);
cView.add(addFriend);
aView.add(aHeading);
aView.add(aName1);
aView.add(aEmail);
bView.add(bHeading);
bView.add(bName1);
bView.add(bEmail1);
bView.add(bName2);
bView.add(bEmail2);
bView.add(bName3);
bView.add(bEmail3);
cView.add(cHeading);
cView.add(cName1);
cView.add(cEmail1);
friendWin.add(aView);
friendWin.add(bView);
friendWin.add(cView);

friendWin.open();
