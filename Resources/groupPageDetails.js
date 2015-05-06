var DetailWin = Titanium.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Group Name',
	left: 0,
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var name = Titanium.UI.createLabel({
	text:'Group A',
	color:'#5e5e5e',
	rigt:50,
	top:10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var courseLabel = Titanium.UI.createLabel({
	text:'Course',
	left: 0,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var course = Titanium.UI.createLabel({
	text:'BUS353',
	color:'#5e5e5e',
	rigt:50,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var sectionLabel = Titanium.UI.createLabel({
	text:'Section',
	left: 250,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var section = Titanium.UI.createLabel({
	text:'1',
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

var creatorLabel = Titanium.UI.createLabel({
	text:'created by',
	left:0,
	top:340,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var creator = Titanium.UI.createLabel({
	text:'Shing Ye',
	left:100,
	color:'red',
	top:350,
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});


var memberLabel = Titanium.UI.createLabel({
	text:'Member',
	left:0,
	top:390,
	font:{fontSize:18,fontFamily:'Helvetica Neue'}	
});

var member1Label = Titanium.UI.createLabel({
	text:'Shing',
	color:'#5e5e5e',
	top:390,
	left:100,
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});

var member2Label = Titanium.UI.createLabel({
	text:'Peter',
	color:'#5e5e5e',
	top:405,
	left:100,
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});

var member3Label = Titanium.UI.createLabel({
	text:'Albert',
	color:'#5e5e5e',
	top:420,
	left:100,
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});

var member4Label = Titanium.UI.createLabel({
	text:'Mason',
	color:'#5e5e5e',
	top:435,
	left:100,
	font:{fontSize:15,fontFamily:'Helvetica Neue'}	
});

var editLabel = Titanium.UI.createButton({
	title:'Edit',
	bottom:5,
	left:190
	//font:{fontSize:15,fontFamily:'Helvetica Neue'}			
});

var leaveGroup = Titanium.UI.createButton({
	title:"Leave",
	bottom:5,
	right:190
});

leaveGroup.addEventListener('click',function(e){
	var dialog = Ti.UI.createAlertDialog({
    cancel: 1,
    buttonNames: ['Yes', 'No'],
    message: 'Are you sure to leave the group?',
    title: 'Leave'
  });
  dialog.addEventListener('click', function(e){
    if (e.index === e.source.cancel){
      Ti.API.info('The cancel button was clicked');
    }
    Ti.API.info('e.cancel: ' + e.cancel);
    Ti.API.info('e.source.cancel: ' + e.source.cancel);
    Ti.API.info('e.index: ' + e.index);
  });
  dialog.show();
});

DetailWin.add(nameLabel);
DetailWin.add(name);
DetailWin.add(courseLabel);
DetailWin.add(course);
DetailWin.add(sectionLabel);
DetailWin.add(section);
DetailWin.add(dateLabel);
DetailWin.add(date);
DetailWin.add(placeLabel);
DetailWin.add(place);
DetailWin.add(enrollLabel);
DetailWin.add(enroll);
DetailWin.add(DescriptionLabel);
DetailWin.add(creatorLabel);
DetailWin.add(creator);
DetailWin.add(memberLabel);
DetailWin.add(member1Label);
DetailWin.add(member2Label);
DetailWin.add(member3Label);
DetailWin.add(member4Label);
DetailWin.add(editLabel);
DetailWin.add(leaveGroup);
DetailWin.open();
