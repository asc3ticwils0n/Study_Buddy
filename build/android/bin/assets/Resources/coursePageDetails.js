var Win1 = Ti.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Group Name',
	color:'#5e5e5e',
	left: 0,
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var name = Titanium.UI.createTextField({
	hintText:'Group A',
	rigt:50,
	top:10,
	width:100, Height: 60
});

var courseLabel = Titanium.UI.createLabel({
	text:'Course',
	olor:'#5e5e5e',
	left: 0,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var course = Titanium.UI.createTextField({
	hintText:'BUS353',
	right:50,
	top:60,
	width:100,Height: 60
});

var sectionLabel = Titanium.UI.createLabel({
	text:'Section',
	left: 250,
	color:'#5e5e5e',
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var section = Titanium.UI.createLabel({
	text:'select section',
	color:'#5e5e5e',
	left: 340,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var dateLabel = Titanium.UI.createLabel({
	text:'Date/Time',
	left: 0,
	top:110,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var date = Titanium.UI.createLabel({
	text:'4/13 5:30pm',
	color:'#5e5e5e',
	rigt:50,
	top:110,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});



var placeLabel = Titanium.UI.createLabel({
	text:'Place',
	left:0,
	top:160,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var place = Titanium.UI.createLabel({
	text:'Library 1st floor',
	color:'#5e5e5e',
	rigt:50,
	top:160,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var enrollLabel = Titanium.UI.createLabel({
	text:'Enrolled',
	left:0,
	top:210,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var enroll = Titanium.UI.createLabel({
	text:'10',
	color:'#5e5e5e',
	rigt:50,
	top:210,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var DescriptionLabel = Titanium.UI.createLabel({
	text:'Description',
	left:0,
	top:260,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});


Win1.add(nameLabel);
Win1.add(name);
Win1.add(courseLabel);
Win1.add(course);
Win1.add(sectionLabel);
Win1.add(section);
Win1.add(dateLabel);
Win1.add(date);
Win1.add(placeLabel);
Win1.add(place);
Win1.add(enrollLabel);
Win1.add(enroll);
Win1.add(DescriptionLabel);
Win1.open();
