var loginWin = Ti.UI.createWindow({
	backgroundColor:'white'
});

var topView = Ti.UI.createView({
	backgroundColor:'#b18e5f',
	height:40,
	top:0
});

var logoImage = Ti.UI.createImageView({
	image:'UI.png',
	top:'30%'
});

var userName = Ti.UI.createTextField ({
	top: '40%', left: 50,
	width: 275, Height: 60,
	hintText: 'Username'
});

var userPass = Ti.UI.createTextField ({
	top: '47%', left: 50,
	width: 275, Height: 60,
	hintText: 'Password'
});

var signUp = Ti.UI.createButton ({
	title: 'Sign Up',
	top: '60%', left: 50,
	width: 75, height: 40
});

var login = Ti.UI.createButton ({
	title: 'Login',
	top: '60%', left: 125,
	width: 75, height: 40
});

var forgetPass = Ti.UI.createLabel({
	text: 'Forget Password?',
	font: {fontSize: 10, fontWeight: 'bold'},
	top: '60%', left: 210,
	width: 130, height: 40
});


login.addEventListener ('click', function(e){
	var homePage = Ti.UI.createWindow ({
		url: 'homePage.js',
		backgroundColor: '#b18e5f',
		oldWin: Ti.UI.currentWindow
	});
	homePage.open();
});

var Remember = Ti.UI.createLabel({
	text:'Remember Me',
	left:100,
	top:'70%',
	color:'#585858',
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});

var checkRemember = Ti.UI.createSwitch({
	title:'On',
	type:Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON,
	top:'68%',left:210
	
});

loginWin.add(topView);
loginWin.add(logoImage);
loginWin.add(userPass);
loginWin.add(userName);
loginWin.add(signUp);
loginWin.add(login);
loginWin.add(forgetPass);
loginWin.add(Remember);
loginWin.add(checkRemember);
loginWin.open();
