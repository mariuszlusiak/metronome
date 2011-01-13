// this sets the background color of the master UIView 
// (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title : 'Metronome Window',
    backgroundColor : '#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Metronome Tab',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Here comes the metronome',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});


var view = Ti.UI.createView({
	backgroundColor : "#f00"
});
win1.add(view);

var file = Titanium.Filesystem.getFile(
	Titanium.Filesystem.resourcesDirectory, "klack.wav"
);

var sound = Titanium.Media.createSound({sound:file});

var red = true;
setInterval(function()
{
	view.backgroundColor = red ? "#0f0" : "#f00"
	sound.play();
	red = !red
}, 440);

view.add(label1);



// //
// // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
//     title:'Tab 2',
//     backgroundColor:'#fff'
// });
// var tab2 = Titanium.UI.createTab({  
//     icon:'KS_nav_ui.png',
//     title:'Tab 2',
//     window:win2
// });
// 
// var label2 = Titanium.UI.createLabel({
// 	color:'#999',
// 	text:'I am Window 2',
// 	font:{fontSize:20,fontFamily:'Helvetica Neue'},
// 	textAlign:'center',
// 	width:'auto'
// });
// 
// win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
