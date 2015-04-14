var Win1 = Ti.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Group Name',
	color:'#5e5e5e',
	left: 0,
	top: 10,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var name = Titanium.UI.createTextField({
	hintText:'Enter Your Group Name',
	left:150,
	top:10,
	borderWidth:1,borderColor:'#5e5e5e',
	width:'auto', height: 'auto'
});

var courseLabel = Titanium.UI.createLabel({
	text:'Course',
	color:'#5e5e5e',
	left: 0,
	top:60,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var course = Titanium.UI.createLabel({
	text:'Which Course',
	right:150,
	top:60,
	width:'auto',height: 'auto',
	borderWidth:1,borderColor:'#5e5e5e'
});

course.addEventListener('click',function(e){
	var cPicker = Ti.UI.createPicker();
	var cdata =[];
	cdata[0]=Ti.UI.createPickerRow({title:'BUS190'});
	cdata[1]=Ti.UI.createPickerRow({title:'BUS265'});
	cdata[2]=Ti.UI.createPickerRow({title:'BUS353'});
	cdata[3]=Ti.UI.createPickerRow({title:'Coming Soon...'});
	cPicker.add(cdata);
 	cPicker.selectionIndicator = true;
 	cPicker.top= 60,cPicker.right=150,
 	Win1.add(cPicker);
});

var sectionLabel = Titanium.UI.createLabel({
	text:'Section',
	left: 0,
	color:'#5e5e5e',
	top:110,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var section = Titanium.UI.createLabel({
	text:'select section',
	left: 150,
	top:110,
	borderWidth:1,borderColor:'#5e5e5e',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

section.addEventListener('click',function(e){
	var sPicker = Ti.UI.createPicker();
	var sdata =[];
	sdata[0]=Ti.UI.createPickerRow({title:'All'});
	sdata[1]=Ti.UI.createPickerRow({title:'Section 1'});
	sdata[2]=Ti.UI.createPickerRow({title:'Section 2'});
	sPicker.add(sdata);
 	sPicker.selectionIndicator = true;
 	sPicker.top= 100,sPicker.left=190,
 	Win1.add(sPicker);
});

var dateLabel = Titanium.UI.createLabel({
	text:'Date/Time',
	color:'#5e5e5e',
	left: 0,
	top:160,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var date = Titanium.UI.createLabel({
	text:'Date',
	right:200,
	top:160,
	borderWidth:1,borderColor:'#5e5e5e',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

date.addEventListener('click',function(e){
    var dpicker = Ti.UI.createPicker({
        type:Ti.UI.PICKER_TYPE_DATE,
        //useSpinner for Android Only
        minDate:new Date(2009,0,1),
        maxDate:new Date(2019,12,31),
        value:new Date(2015,4,14),
        top: 160
    });
    dpicker.showDatePickerDialog({
 		value: new Date(2010,8,1),
  		callback: function(e) {
    		if (e.cancel) {
      			Ti.API.info('User canceled dialog');
    		} else {
      			Ti.API.info('User selected date: ' + e.value);
    		}
  		}
	});
	Win1.add(dpicker);
});



var time = Titanium.UI.createLabel({
	text:'Time',
	right:140,
	top:160,
	borderWidth:1,borderColor:'#5e5e5e',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});


var placeLabel = Titanium.UI.createLabel({
	text:'Place',
	color:'#5e5e5e',
	left:0,
	top:210,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var place = Titanium.UI.createTextField({
	hintText:'Enter your place',
	right:50,
	top:210,
	borderWidth:1,borderColor:'#5e5e5e',
	width:'auto', height: 'auto',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

var enrollLabel = Titanium.UI.createLabel({
	text:'Max Size',
	left:0,
	top:260,
	color:'#5e5e5e',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var enroll = Titanium.UI.createLabel({
	text:'  ',
	left:100,
	top:260,
	borderWidth:1,borderColor:'#5e5e5e',
	font:{fontSize:20,fontFamily:'Helvetica Neue'}
});

enroll.addEventListener('click',function(e){
	var epicker = Titanium.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_PLAIN,
    	selectionIndicator: true,
    	useSpinner: true,  
    	top: 260,
    	height: 'auto'
 	});
});	

var DescriptionLabel = Titanium.UI.createLabel({
	text:'Description',
	left:0,
	top:310,
	font:{fontSize:20,fontFamily:'Helvetica Neue'}	
});

var description = Titanium.UI.createTextArea({
	top:325,
	left:0,
	height:200,
	width:300
	borderWidth: 1,
  	borderColor: '#5e5e5e',
  	borderRadius: 5,
  	font: {fontSize:20, fontWeight:'bold'},
  	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  	returnKeyType: Ti.UI.RETURNKEY_GO,
  	textAlign: 'left',
 	value: 'Type your description here',
});

Win1.add(nameLabel);
Win1.add(name);
Win1.add(courseLabel);
Win1.add(course);
Win1.add(sectionLabel);
Win1.add(section);
Win1.add(dateLabel);
Win1.add(date);
Win1.add(time);
Win1.add(placeLabel);
Win1.add(place);
Win1.add(enrollLabel);
Win1.add(enroll);
Win1.add(DescriptionLabel);
Win1.add(description);
Win1.open();
