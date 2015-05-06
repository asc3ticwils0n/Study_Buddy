//values for the position of the settings and their related switches
var PS = 100;
var SS = 150;
var NF = 200;
var PF = 300;
var EF = 400;
var Lvalue = 20;
var Rvalue = 30;

var settingsWin = Ti.UI.currentWindow;
//All the labels
var heading = Ti.UI.createLabel({
	text: 'Settings',
	font: {fontSize: 40},
	top: 0,
	left: Lvalue
});

var pushLabel = Ti.UI.createLabel({
	text: 'Push Notifications',
	top: PS,
	left: Lvalue
});

var soundLabel = Ti.UI.createLabel({
	text: 'Sounds',
	top: SS,
	left: Lvalue	
});

var name = Ti.UI.createLabel({
	text: 'Name',
	top: NF,
	left: Lvalue
});

var phone = Ti.UI.createLabel({
	text: 'Phone Number',
	top: PF,
	left: Lvalue
});

var email = Ti.UI.createLabel({
	text: 'Email',
	top: EF,
	left: Lvalue
});
//Switches
var pushS = Ti.UI.createSwitch({
	value: true,
	top: PS,
	right: Rvalue
});

var soundS = Ti.UI.createSwitch({
	value: true,
	top: SS,
	right: Rvalue
});
//Text Fields
var nameF = Ti.UI.createTextField({
	hintText: 'First, Last',
	top: NF,
	right: Rvalue,
	width: 200
});

var phoneF = Ti.UI.createTextField({
	hintText: 'Phone #',
	top: PF,
	right: Rvalue,
	width: 200
});

var emailF = Ti.UI.createTextField({
	hintText: 'Name@Domain.com',
	top: EF,
	right: Rvalue,
	width: 200
});
//Buttons
var backB = Ti.UI.createButton({
	title: 'Back',
	top: 10,
	right: Rvalue
});


var save = Ti.UI.createButton({
	title: 'Save',
	bottom:5
});

backB.addEventListener('click', function(e){
	settingsWin.close();
});

settingsWin.add(heading);
settingsWin.add(pushLabel);
settingsWin.add(soundLabel);
settingsWin.add(name);
settingsWin.add(phone);
settingsWin.add(email);
settingsWin.add(pushS);
settingsWin.add(soundS);
settingsWin.add(nameF);
settingsWin.add(phoneF);
settingsWin.add(emailF);
settingsWin.add(backB);
settingsWin.add(save);

settingsWin.open();
