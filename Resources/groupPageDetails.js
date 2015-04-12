var DetailWin = Titanium.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Group Name'
	left: 0,
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var name = Ti.UI.createLabel({
	text:'Group A',
	color:'5e5e5e'
	right: 0,
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var courseLabel = Titanium.UI.createLabel({
	text:'Course		BUS353',
	left: 0,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var sectionLabel = Titanium.UI.createLabel({
	text:'section	1',
	left:'250',
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var dateLabel = Titanium.UI.createLabel({
	text:'Date/Time					4/13 5:30pm',
	left: 0,
	top:110,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var placeLabel = Titanium.UI.createLabel({
	text:'Place					Library 1st floor',
	left:0,
	top:160,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var placeLabel = Titanium.UI.createLabel({
	text:'Place					Library 1st floor',
	left:0,
	top:160,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var enrollLabel = Titanium.UI.createLabel({
	text:'Enrolled					10',
	left:0,
	top:210,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var DescriptionLabel = Titanium.UI.createLabel({
	text:'Description',
	left:0,
	top:260,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var creatorLabel = Titanium.UI.createLabel({
	text:'created by				Shing Ye',
	left:0,
	top:340,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var memberLabel = Titanium.UI.createLabel({
	text:'Member',
	left:0,
	top:390,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var member1Label = Titanium.UI.createLabel({
	text:'Shing',
	top:390,
	left:100,
	font:{fontSize:10,fontFamily:'Helvetica Neue'}	
});

var member2Label = Titanium.UI.createLabel({
	text:'Peter',
	top:400,
	left:100,
	font:{fontSize:10,fontFamily:'Helvetica Neue'}	
});

DetailWin.add(nameLabel);
DetailWin.add(name);
DetailWin.add(courseLabel);
DetailWin.add(sectionLabel);
DetailWin.add(dateLabel);
DetailWin.add(placeLabel);
DetailWin.add(enrollLabel);
DetailWin.add(DescriptionLabel);
DetailWin.add(creatorLabel);
DetailWin.add(memberLabel);
DetailWin.add(member1Label);
DetailWin.add(member2Label);
DetailWin.open();
