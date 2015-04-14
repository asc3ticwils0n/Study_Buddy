//alignment values
var courseR = '75%';

var coursePage = Ti.UI.currentWindow;

//Views included
var headView = Ti.UI.createView({
	backgroundColor: '#b18e5f',
	top: 0,
	bottom: '90%'
});

var addCourse = Ti.UI.createButton({
	top:0,
	left:0,
	title:'Add a course'	
});

var back = Ti.UI.createButton({
	top:0,
	right:0,
	title:'Back'	
});

back.addEventListener('click',function(e){
	var newWin = Ti.UI.createWindow({
		url:'homePage.js',
		backgroundColor: '#b18e5f'	
	});
	newWin.open();
});


var courseView1 = Ti.UI.createView({
	backgroundColor: 'white',
	borderColor:'#585858',
	borderWidth:1,
	top: '10%',
	bottom: '80%',
	right: courseR
});

var course1 = Ti.UI.createLabel({
	text:'Course 1',
	color:'#585858'	
});

var sectionView = Ti.UI.createView({
	backgroundColor: 'white',
	borderColor:'#585858',
	borderWidth:1,
	top: '20%',
	bottom: '30%',
	right: courseR
});

var section1 = Ti.UI.createLabel({
	text:'Section 1',
	color:'#585858',
	top:3,
	font:{fontSize:11}
});

var section2 = Ti.UI.createLabel({
	text:'Section 2',
	color:'#585858',
	top: 20,
	font:{fontSize:11}
});

var tutor = Ti.UI.createLabel({
	text:'tutor',
	color:'#585858',
	top: 37,
	font:{fontSize:11}
});

var courseView2 = Ti.UI.createView({
	backgroundColor: 'white',
	borderColor:'#585858',
	borderWidth:1,
	top:'70%',
	bottom: '20%',
	right: courseR
});

var course2 = Ti.UI.createLabel({
	text:'Course 2',
	color:'#585858'	
});

var courseView3 = Ti.UI.createView({
	backgroundColor: 'white',
	borderColor:'#585858',
	borderWidth:1,
	top: '80%',
	bottom: '10%',
	right: courseR
});

var course3 = Ti.UI.createLabel({
	text:'Course 3',
	color:'#585858'	
});


var courseView4 = Ti.UI.createView({
	backgroundColor: 'white',
	borderColor:'#585858',
	borderWidth:1,
	top: '90%',
	bottom: '0%',
	right: courseR
});

var course4 = Ti.UI.createLabel({
	text:'Course 4',
	color:'#585858'	
});


var buttonView = Ti.UI.createView ({
	backgroundColor: '#9f9d9d',
	borderColor:'#585858',
	borderWidth:1,
	top: '10%',
	bottom: '80%',
	left:'25%'
});

var createGroup = Ti.UI.createButton({
	title:'Create A Group',
	left:0	
});

createGroup.addEventListener('click',function(e){
	var newWin = Ti.UI.createWindow({
		url:'coursePageDetails.js',
		backgroundColor:'white',
		title:'Create a Group'
	});
	newWin.open();
});


var post = Ti.UI.createButton({
	title:'Post',
	right:0	
});

var forumView = Ti.UI.createView ({
	top:'20%',
	left:'25%',
	backgroundColor:'white',
	borderColor:'#585858',
	scrollable:true,
	borderWidth:1	
});

var groupView1 = Ti.UI.createView ({
	top:'5%',
	left:'5%',
	right:'5%',
	height:150,
	backgroundColor:'white',
	borderColor:'#585858',
	scrollable:true,
	borderWidth:1	
});

var name = Ti.UI.createLabel({
	text:'Group A',
	top:'5%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var date = Ti.UI.createLabel({
	text:'4/13 5:30pm',
	top:'5%',
	right:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var place = Ti.UI.createLabel({
	text:'Place: Library 1st Floor',
	top:'15%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var enroll = Ti.UI.createLabel({
	text:'Enroll: 4/10',
	top:'25%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var detail = Ti.UI.createLabel({
	text:'Bus353, study for final exam!',
	top:'35%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var joinButton = Ti.UI.createButton({
	title:'Join',
	left:'5%',
	bottom:5
});

joinButton.addEventListener('click',function(e){
	joinButton.title = 'Cancel';
});

var groupView2 = Ti.UI.createView ({
	top:'50%',
	left:'5%',
	right:'5%',
	height:150,
	backgroundColor:'white',
	borderColor:'#585858',
	scrollable:true,
	borderWidth:1	
});

var name2 = Ti.UI.createLabel({
	text:'Group B',
	top:'5%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var date2 = Ti.UI.createLabel({
	text:'4/13 5:30pm',
	top:'5%',
	right:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var place2 = Ti.UI.createLabel({
	text:'Place: ALB 1st Floor',
	top:'15%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var enroll2 = Ti.UI.createLabel({
	text:'Enroll: 6/10',
	top:'25%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var detail2 = Ti.UI.createLabel({
	text:'Bus390,Project study!',
	top:'35%',
	left:'5%',
	font:{fontSize:12,fontFamily:'Helvetica Neue'}
});

var joinButton2 = Ti.UI.createButton({
	title:'Join',
	left:'5%',
	bottom:5
});

joinButton2.addEventListener('click',function(e){
	joinButton2.title = 'Cancel';
});

headView.add(addCourse);
headView.add(back);

courseView1.add(course1);
courseView2.add(course2);
courseView3.add(course3);
courseView4.add(course4);
sectionView.add(section1);
sectionView.add(section2);
sectionView.add(tutor);

buttonView.add(createGroup);
buttonView.add(post);

groupView1.add(name);
groupView1.add(date);
groupView1.add(place);
groupView1.add(detail);
groupView1.add(enroll);
groupView1.add(joinButton);
groupView2.add(name2);
groupView2.add(date2);
groupView2.add(place2);
groupView2.add(detail2);
groupView2.add(enroll2);
groupView2.add(joinButton2);


forumView.add(groupView1);
forumView.add(groupView2);

coursePage.add(headView);
coursePage.add(sectionView);
coursePage.add(courseView1);
coursePage.add(courseView2);
coursePage.add(courseView3);
coursePage.add(courseView4);
coursePage.add(buttonView);
coursePage.add(forumView);
coursePage.open();

