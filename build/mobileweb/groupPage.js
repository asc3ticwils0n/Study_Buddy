var groupWin = Ti.UI.currentWindow;

//The whole view for the group page.
var groupView = Ti.UI.createView({
	backgroundColor: '#A9A9A9'
});

//TitleView will contains title of the page, which is "Group".
var titleView = Titanium.UI.createView({
	backgroundColor:'white',
	height: '60',
	top:'0'	
});

//Contained in titleView.
var titleLabel = Titanium.UI.createLabel({
	text:'Groups',
	textAlign:'center',
	font:{fontSize:40,fontFamily:'Helvetica Neue'}
});

//Contained in titleView.
var backButton = Titanium.UI.createButton({
	title:'Back',
	left:'10',
	top: '10'	
});

backButton.addEventListener('click',function(e){
	groupWin.close();
});

//Contains tabs, grouplist.
var tabGroupView = Titanium.UI.createView({
	top:'70',
	bottom:'50',
	left:'30',
	right:'30'	
});

var tabView1 = Titanium.UI.createView({	
	right:'150',
	top:'0',
	height:'50',
	backgroundColor:'#515151'
});

var tabView2 = Titanium.UI.createView({
	left:'160',
	top:'0',
	height:'50',
	backgroundColor:'#DBD8D8'
});

var tab1Label = Titanium.UI.createLabel({
	text:'Current',
	textAlign:{fontSize:15,fontFamily:'Helvetica Neue'}
});

var tab2Label = Titanium.UI.createLabel({
	text:'Past',
	textAlign:{fontSize:15,fontFamily:'Helvetica Neue'}
});

tabView1.addEventListener('click',function(e){
//Contains tableView1,tableView2.
var groupListView1 = Ti.UI.createView({
	top:'60'
});

var tableView1 = Ti.UI.createTableView({
	scrollable: true
});

var firstSection1 = Ti.UI.createTableViewSection({});

var firstRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	hasChild:true,
	height:'60'
});

var firstTitle1 = Titanium.UI.createLabel({
	text:'Group A',
	color:'black',
	textAlign:'center',
	top:'5'
});

var firstCourse1 = Titanium.UI.createLabel({
	text:'BUS353',
	left: 0,
	bottom:'5'
});

var firstDate1 = Titanium.UI.createLabel({
	text:'4/13  5:30pm',
	textAlign:'center',
	bottom:'5'
});

firstRow1.addEventListener('click', function(e){
	var newWin = Ti.UI.createWindow({
		url: 'groupPageDetails.js',
		backgroundColor:'white'	,
		title:'Details'
	});
	newWin.open();
});

var secondRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	hasChild:true,
	height:'60'
});

var secondTitle1 = Titanium.UI.createLabel({
	text:'Group B',
	color:'black',
	textAlign:'center',
	top:'5'
});

var secondCourse1 = Titanium.UI.createLabel({
	text:'BUS390',
	left: 0,
	bottom:'5'
});

var secondDate1 = Titanium.UI.createLabel({
	text:'4/14  10:00am',
	textAlign:'center',
	bottom:'5'
});

var thirdRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	height:'60',
	title: 'Group C'
});


var fourthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor:'white',
	height:'60',
	title: 'Group D'

});

var fifthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	height:'60',
	title: 'Group E'
});

var sixthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Groud F',
	height:'60'
});

var seventhRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Group G',
	height:'60'
});

var eighthRow1 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'Group H',
	height:'60'
});

firstRow1.add(firstTitle1);
firstRow1.add(firstCourse1);
firstRow1.add(firstDate1);
secondRow1.add(secondTitle1);
secondRow1.add(secondCourse1);
secondRow1.add(secondDate1);

firstSection1.add(firstRow1);
firstSection1.add(secondRow1);
firstSection1.add(thirdRow1);
firstSection1.add(fourthRow1);
firstSection1.add(fifthRow1); 
firstSection1.add(sixthRow1);
firstSection1.add(seventhRow1);
firstSection1.add(eighthRow1); 

tableView1.setData([firstSection1]);
 
groupListView1.add(tableView1);

	tabView1.backgroundColor ='#515151';
	tabView2.backgroundColor = '#DBD8D8';
	tabGroupView.add(groupListView1);
});

tabView2.addEventListener('click',function(e){

	tabView1.backgroundColor ='#DBD8D8';
	tabView2.backgroundColor = '#515151';
	
var groupListView2 = Titanium.UI.createView({
	top:'60'
});


var tableView2 = Ti.UI.createTableView({
	scrollable: true
});

var firstSection2 = Ti.UI.createTableViewSection({});

var firstRow2 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'A',
	hasDetail:true,
	height:'60'
});

var secondRow2 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'B',
	hasChild:true,
	height:'60'
});

var thirdRow2 = Titanium.UI.createTableViewRow({
	backgroundColor: 'white',
	title:'C',
	hasChild:true,
	height:'60'
});


firstSection2.add(firstRow2);
firstSection2.add(secondRow2);
firstSection2.add(thirdRow2);
tableView2.setData([firstSection2]);
groupListView2.add(tableView2);
tabGroupView.add(groupListView2);

});


tabView1.add(tab1Label);
tabView2.add(tab2Label);

tabGroupView.add(tabView1);
tabGroupView.add(tabView2);
//tabGroupView.add(groupListView1);

titleView.add(titleLabel);
titleView.add(backButton);

groupView.add(titleView);
groupView.add(tabGroupView);

groupWin.add(groupView);
groupWin.open();
