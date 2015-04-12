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

var forgetPass = Ti.UI.createButton({
	title: 'Forget Password?',
	top: '55%', left: 190,
	width: 125, height: 30
});

login.addEventListener ('click', function(e){
	var homePage = Ti.UI.createWindow ({
		url: 'homePage.js',
		backgroundColor: '#554600'
	});
	homePage.open();
});

loginWin.add(userPass);
loginWin.add(userName);
loginWin.add(signUp);
loginWin.add(login);
loginWin.add(forgetPass);
loginWin.open();
