(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 738,
	height: 339,
	fps: 24,
	color: "#278DC1",
	manifest: [
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/circulo.png", id:"circulo"}
	]
};

// stage content:
(lib.banneripad = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.html5swf();
	this.instance.setTransform(367,167,1,1,0,0,0,367,167);

	// Capa 1
	this.instance_1 = new lib.giro_mc();
	this.instance_1.setTransform(372.9,404,1.139,1.139,0,0,0,568,493.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102,-226.4,1665.2,1615.5);


// symbols:
(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,335);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,335);


(lib.circulo = function() {
	this.initialize(img.circulo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1116,1000);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.circulo();
	this.instance.setTransform(-238.2,-709.1,0.998,0.998,29.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-730.8,-709.1,1461.8,1418.2);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.circulo();
	this.instance.setTransform(-238.2,-709.1,0.998,0.998,29.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-730.8,-709.1,1461.8,1418.2);


(lib.Symbol113 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap10, null, new cjs.Matrix2D(1,0,0,1,-367.5,-167.5)).s().p("Eg5ZAaKMAAAg0TMByzAAAMAAAA0Tg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-367.5,-167.5,735,335);


(lib.Symbol112 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap9, null, new cjs.Matrix2D(1,0,0,1,-367.5,-167.5)).s().p("Eg5ZAaKMAAAg0TMByzAAAMAAAA0Tg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-367.5,-167.5,735,335);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},44).to({rotation:135},45).to({scaleX:1,scaleY:1,rotation:193.7},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-747.4,-747.3,1495,1494.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(558.1,500);

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(558.1,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.2,-229.9,1486.7,1459.9);


(lib.html5swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol112("synched",0);
	this.instance.setTransform(367,167);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol112("synched",0);
	this.instance_1.setTransform(367,167,1.2,1);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol112("synched",0);
	this.instance_2.setTransform(367,167,1.4,1);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol112("synched",0);
	this.instance_3.setTransform(367,167,1.6,1);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Symbol112("synched",0);
	this.instance_4.setTransform(367,167,1.8,1);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Symbol112("synched",0);
	this.instance_5.setTransform(367,167,2,1);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Symbol113("synched",0);
	this.instance_6.setTransform(367,166,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:2,alpha:0}},{t:this.instance_4,p:{scaleX:1.8,alpha:0}},{t:this.instance_3,p:{scaleX:1.6,alpha:0}},{t:this.instance_2,p:{scaleX:1.4,alpha:0}},{t:this.instance_1,p:{scaleX:1.2,alpha:0}},{t:this.instance}]}).to({state:[{t:this.instance_5,p:{scaleX:1.947,alpha:0.012}},{t:this.instance_4,p:{scaleX:1.758,alpha:0.012}},{t:this.instance_3,p:{scaleX:1.568,alpha:0.012}},{t:this.instance_2,p:{scaleX:1.379,alpha:0.012}},{t:this.instance_1,p:{scaleX:1.189,alpha:0.012}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.895,alpha:0.02}},{t:this.instance_4,p:{scaleX:1.716,alpha:0.02}},{t:this.instance_3,p:{scaleX:1.537,alpha:0.02}},{t:this.instance_2,p:{scaleX:1.358,alpha:0.02}},{t:this.instance_1,p:{scaleX:1.179,alpha:0.02}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.842,alpha:0.02}},{t:this.instance_4,p:{scaleX:1.674,alpha:0.02}},{t:this.instance_3,p:{scaleX:1.505,alpha:0.02}},{t:this.instance_2,p:{scaleX:1.337,alpha:0.02}},{t:this.instance_1,p:{scaleX:1.168,alpha:0.02}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.789,alpha:0.039}},{t:this.instance_4,p:{scaleX:1.632,alpha:0.039}},{t:this.instance_3,p:{scaleX:1.474,alpha:0.039}},{t:this.instance_2,p:{scaleX:1.316,alpha:0.039}},{t:this.instance_1,p:{scaleX:1.158,alpha:0.039}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.737,alpha:0.039}},{t:this.instance_4,p:{scaleX:1.589,alpha:0.039}},{t:this.instance_3,p:{scaleX:1.442,alpha:0.039}},{t:this.instance_2,p:{scaleX:1.295,alpha:0.039}},{t:this.instance_1,p:{scaleX:1.147,alpha:0.039}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.684,alpha:0.051}},{t:this.instance_4,p:{scaleX:1.547,alpha:0.051}},{t:this.instance_3,p:{scaleX:1.411,alpha:0.051}},{t:this.instance_2,p:{scaleX:1.274,alpha:0.051}},{t:this.instance_1,p:{scaleX:1.137,alpha:0.051}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.632,alpha:0.07}},{t:this.instance_4,p:{scaleX:1.505,alpha:0.07}},{t:this.instance_3,p:{scaleX:1.379,alpha:0.07}},{t:this.instance_2,p:{scaleX:1.253,alpha:0.07}},{t:this.instance_1,p:{scaleX:1.126,alpha:0.07}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.579,alpha:0.078}},{t:this.instance_4,p:{scaleX:1.463,alpha:0.078}},{t:this.instance_3,p:{scaleX:1.347,alpha:0.078}},{t:this.instance_2,p:{scaleX:1.232,alpha:0.078}},{t:this.instance_1,p:{scaleX:1.116,alpha:0.078}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.526,alpha:0.09}},{t:this.instance_4,p:{scaleX:1.421,alpha:0.09}},{t:this.instance_3,p:{scaleX:1.316,alpha:0.09}},{t:this.instance_2,p:{scaleX:1.211,alpha:0.09}},{t:this.instance_1,p:{scaleX:1.105,alpha:0.09}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.474,alpha:0.102}},{t:this.instance_4,p:{scaleX:1.379,alpha:0.102}},{t:this.instance_3,p:{scaleX:1.284,alpha:0.102}},{t:this.instance_2,p:{scaleX:1.189,alpha:0.102}},{t:this.instance_1,p:{scaleX:1.095,alpha:0.102}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.421,alpha:0.121}},{t:this.instance_4,p:{scaleX:1.337,alpha:0.121}},{t:this.instance_3,p:{scaleX:1.253,alpha:0.121}},{t:this.instance_2,p:{scaleX:1.168,alpha:0.121}},{t:this.instance_1,p:{scaleX:1.084,alpha:0.121}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.368,alpha:0.129}},{t:this.instance_4,p:{scaleX:1.295,alpha:0.129}},{t:this.instance_3,p:{scaleX:1.221,alpha:0.129}},{t:this.instance_2,p:{scaleX:1.147,alpha:0.129}},{t:this.instance_1,p:{scaleX:1.074,alpha:0.129}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.316,alpha:0.148}},{t:this.instance_4,p:{scaleX:1.253,alpha:0.148}},{t:this.instance_3,p:{scaleX:1.189,alpha:0.148}},{t:this.instance_2,p:{scaleX:1.126,alpha:0.148}},{t:this.instance_1,p:{scaleX:1.063,alpha:0.148}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.263,alpha:0.16}},{t:this.instance_4,p:{scaleX:1.211,alpha:0.16}},{t:this.instance_3,p:{scaleX:1.158,alpha:0.16}},{t:this.instance_2,p:{scaleX:1.105,alpha:0.16}},{t:this.instance_1,p:{scaleX:1.053,alpha:0.16}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.211,alpha:0.191}},{t:this.instance_4,p:{scaleX:1.168,alpha:0.191}},{t:this.instance_3,p:{scaleX:1.126,alpha:0.191}},{t:this.instance_2,p:{scaleX:1.084,alpha:0.191}},{t:this.instance_1,p:{scaleX:1.042,alpha:0.191}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.158,alpha:0.211}},{t:this.instance_4,p:{scaleX:1.126,alpha:0.211}},{t:this.instance_3,p:{scaleX:1.095,alpha:0.211}},{t:this.instance_2,p:{scaleX:1.063,alpha:0.211}},{t:this.instance_1,p:{scaleX:1.032,alpha:0.211}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.105,alpha:0.238}},{t:this.instance_4,p:{scaleX:1.084,alpha:0.238}},{t:this.instance_3,p:{scaleX:1.063,alpha:0.238}},{t:this.instance_2,p:{scaleX:1.042,alpha:0.238}},{t:this.instance_1,p:{scaleX:1.021,alpha:0.238}},{t:this.instance}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.053,alpha:0.27}},{t:this.instance_4,p:{scaleX:1.042,alpha:0.27}},{t:this.instance_3,p:{scaleX:1.032,alpha:0.27}},{t:this.instance_2,p:{scaleX:1.021,alpha:0.27}},{t:this.instance_1,p:{scaleX:1.01,alpha:0.27}},{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.02},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.039},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.051},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.121},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.148},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.051},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).wait(1).to({scaleX:0.2,scaleY:0.2},0).wait(1).to({scaleX:0.3,scaleY:0.3},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.6,scaleY:0.6},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.898},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:0.699},0).wait(1).to({alpha:0.602},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.398},0).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.199},0).wait(1).to({alpha:0.102},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-0.5,1470,335);


(lib.giro_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(558,500,1,1,0,0,0,558,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-209.1,1461.8,1418.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;