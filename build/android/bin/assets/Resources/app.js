Ti.UI.backgroundColor = '#D1AF0D';
var loginWin = Ti.UI.createWindow();

var userName = Ti.UI.createTextField ({
	top: '45%', left: 40,
	width: 275, Height: 60,
	hintText: 'Username'
});

var userPass = Ti.UI.createTextField ({
	top: '50%', left: 40,
	width: 275, Height: 60,
	hintText: 'Password'
});

var signUp = Ti.UI.createButton ({
	title: 'Sign Up',
	top: '60%', left: 40,
	width: 75, height: 40
});

var login = Ti.UI.createButton ({
	title: 'Login',
	top: '60%', left: 115,
	width: 75, height: 40
});

var forgetPass = Ti.UI.createLabel({
	text: 'Forget Password?',
	font: {fontSize: 10, fontWeight: 'bold'},
	top: '60%', left: 200,
	width: 130, height: 40
});

login.addEventListener ('click', function(e){
	var homePage = Ti.UI.createWindow ({
		url: 'homePage.js',
		backgroundColor: '#554600',
		oldWin: Ti.UI.currentWindow
	});
	homePage.open();
});

loginWin.add(userPass);
loginWin.add(userName);
loginWin.add(signUp);
loginWin.add(login);
loginWin.add(forgetPass);
loginWin.open();
