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
	top: '55%', left: 40,
	width: 75, height: 30
});

var login = Ti.UI.createButton ({
	title: 'Login',
	top: '55%', left: 115,
	width: 75, height: 30
});

var forgetPass = Ti.UI.createLabel({
	text: 'Forget Password?',
	font: {fontSize: 10, fontWeight: 'bold'},
	top: '55%', left: 200,
	width: 125, height: 30
});

login.addEventListener ('click', function(e){
	var homePage = Ti.UI.createWindow ({
		url: 'homePage.js',
<<<<<<< HEAD
		backgroundColor: '#554600'
=======
		backgroundColor: '#554600',
		oldWin: Ti.UI.currentWindow
>>>>>>> 7e2d3306b4811d72a9ef9c0ba2a7d8d76e8f75c3
	});
	homePage.open();
});

loginWin.add(userPass);
loginWin.add(userName);
loginWin.add(signUp);
loginWin.add(login);
loginWin.add(forgetPass);
loginWin.open();
