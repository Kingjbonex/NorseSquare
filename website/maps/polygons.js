//Use this for finding coordinates
//http://www.birdtheme.org/useful/googletool.html

var polygonCoords = [];
var desc = '';
var count = 0;


var barn = [
	new google.maps.LatLng(43.317952,-91.802855),
	new google.maps.LatLng(43.318094,-91.802616),
	new google.maps.LatLng(43.317802,-91.802337),
	new google.maps.LatLng(43.317669,-91.802608),
	new google.maps.LatLng(43.317952,-91.802855)
	];
	
	desc = 'Info about Ashmore-Jewell Barn here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Ashmore-Jewell Barn', barn, desc, category);

var bakerCommons = [
	new google.maps.LatLng(43.316982,-91.80039),
	new google.maps.LatLng(43.316888,-91.800433),
	new google.maps.LatLng(43.316787,-91.800229),
	new google.maps.LatLng(43.316896,-91.800159),
	new google.maps.LatLng(43.316982,-91.80039)
	];
	
	desc = 'Info about Baker Commons here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Baker Commons', bakerCommons, desc, category);

var brandt = [
	new google.maps.LatLng(43.311603,-91.803858),
	new google.maps.LatLng(43.311197,-91.8037),
	new google.maps.LatLng(43.311213,-91.803541),
	new google.maps.LatLng(43.311266,-91.803541),
	new google.maps.LatLng(43.31126,-91.80348),
	new google.maps.LatLng(43.311229,-91.803458),
	new google.maps.LatLng(43.311231,-91.80326),
	new google.maps.LatLng(43.311246,-91.803263),
	new google.maps.LatLng(43.31124,-91.803204),
	new google.maps.LatLng(43.311209,-91.80323),
	new google.maps.LatLng(43.311151,-91.803056),
	new google.maps.LatLng(43.311598,-91.802892),
	new google.maps.LatLng(43.311635,-91.803069),
	new google.maps.LatLng(43.311367,-91.803174),
	new google.maps.LatLng(43.311367,-91.80326),
	new google.maps.LatLng(43.311389,-91.803265),
	new google.maps.LatLng(43.311387,-91.803477),
	new google.maps.LatLng(43.311371,-91.803477),
	new google.maps.LatLng(43.311367,-91.803576),
	new google.maps.LatLng(43.311639,-91.803681),
	new google.maps.LatLng(43.311603,-91.803858)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Brandt Hall is one of three residence halls designated for first-year students. It is named for Diderikke Ottesen Brandt (1827&ndash;85), wife of the first college pastor, Nils O. Brandt.</p> <p> <a href="https:\/\/www.luther.edu/reslife/residencehalls/firstyearhalls/brandt/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/286606.jpg" style="width: 350px; height: 141px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Diderikke Brandt Hall', brandt, desc, category);
	
var brunsdalelounge = [
	new google.maps.LatLng(43.315183,-91.805314),
	new google.maps.LatLng(43.315124,-91.805151),
	new google.maps.LatLng(43.315352,-91.804993),
	new google.maps.LatLng(43.315425,-91.804566),
	new google.maps.LatLng(43.315587,-91.804612),
	new google.maps.LatLng(43.315479,-91.805137),
	new google.maps.LatLng(43.315183,-91.805314)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller Hall and Dieseth Hall comprise the Regents Towers (or just &quot;The Towers&quot; in student-speak), named for Frank Miller and John Dieseth, two former members of the Luther Board of Regents. Completed in the late 1960s, these nine-story residence halls are situated on a bluff overlooking the Oneota Valley and Upper Iowa River. Both halls will have been renovated prior to the start of fall 2012.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller and Dieseth are connected via Brunsdale Lounge, which contains a fireplace, social meeting space, study lounge, and computer lab. The lounge is also named for a former Regent, Norman Brunsdale. Miller and Dieseth primarily house sophomore and junior students.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> &nbsp;</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> <a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/towers/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/288017.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Brunsdale lounge', brunsdalelounge, desc, category);

var cfa = [
	new google.maps.LatLng(43.310667,-91.802503),
	new google.maps.LatLng(43.310682,-91.801742),
	new google.maps.LatLng(43.310415,-91.801742),
	new google.maps.LatLng(43.310411,-91.801879),
	new google.maps.LatLng(43.310333,-91.801881),
	new google.maps.LatLng(43.310278,-91.801932),
	new google.maps.LatLng(43.310229,-91.80208),
	new google.maps.LatLng(43.310208,-91.802249),
	new google.maps.LatLng(43.310216,-91.802453),
	new google.maps.LatLng(43.310247,-91.802455),
	new google.maps.LatLng(43.310237,-91.80278),
	new google.maps.LatLng(43.310296,-91.80278),
	new google.maps.LatLng(43.310298,-91.803),
	new google.maps.LatLng(43.310343,-91.802994),
	new google.maps.LatLng(43.31035,-91.803045),
	new google.maps.LatLng(43.310372,-91.803048),
	new google.maps.LatLng(43.310376,-91.803128),
	new google.maps.LatLng(43.310532,-91.803161),
	new google.maps.LatLng(43.310542,-91.803035),
	new google.maps.LatLng(43.310567,-91.80304),
	new google.maps.LatLng(43.310661,-91.802643),
	new google.maps.LatLng(43.310598,-91.802495),
	new google.maps.LatLng(43.310667,-91.802503)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Completed in 2003, the 60,000-square-foot Center for the Arts is a facility for the collaboration of the disciplines of theatre/dance and the visual arts. Features include a 225-seat flexible theatre, two galleries, a fully equipped scene shop, a large costume construction area, and a caf&eacute;. Special classrooms include studios for pottery, computer art, drawing/painting, photography, and fiber arts.</p> <p> <a href="https:\/\/www.luther.edu/campus/tour/cfa/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266876.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Center for the Arts', cfa, desc, category);

var cfl = [
	new google.maps.LatLng(43.313305,-91.805304), 
	new google.maps.LatLng(43.313214,-91.805242),
	new google.maps.LatLng(43.31321,-91.805186),
	new google.maps.LatLng(43.313214,-91.805121),
	new google.maps.LatLng(43.313087,-91.805049),
	new google.maps.LatLng(43.313069,-91.805089),
	new google.maps.LatLng(43.312819,-91.804893),
	new google.maps.LatLng(43.312568,-91.805105),
	new google.maps.LatLng(43.31254,-91.805446),
	new google.maps.LatLng(43.312712,-91.805744),
	new google.maps.LatLng(43.31295,-91.805644),
	new google.maps.LatLng(43.313012,-91.80555),
	new google.maps.LatLng(43.313093,-91.805615),
	new google.maps.LatLng(43.313128,-91.805588),
	new google.maps.LatLng(43.31319,-91.805634),
	new google.maps.LatLng(43.313247,-91.805561),
	new google.maps.LatLng(43.313301,-91.805432),
	new google.maps.LatLng(43.313305,-91.805304)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p><a href="https:\/\/www.luther.edu/campus/tour/cfl/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266864.jpg" style="width: 350px; height: 142px; " /></a></p> <p> The Center for Faith and Life houses a 1,600 seat auditorium for the performing arts, a 200 seat recital hall, a 24-hour meditation chapel, and the offices of college ministries and campus programming.</p>  </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('CFL', cfl, desc, category);

var collegeApartments = [
	new google.maps.LatLng(43.313616,-91.798732),
	new google.maps.LatLng(43.31343,-91.798727),
	new google.maps.LatLng(43.31351,-91.797764),
	new google.maps.LatLng(43.313698,-91.797799),
	new google.maps.LatLng(43.313616,-91.798732)
	];
	
	desc = 'Info about College Apartments here.';
	category = 'residential';
	polygonCoords[count++] = new Array('College Apartments', collegeApartments, desc, category);

var dieseth = [
	new google.maps.LatLng(43.315095,-91.8058),
	new google.maps.LatLng(43.315058,-91.805835),
	new google.maps.LatLng(43.315032,-91.805786),
	new google.maps.LatLng(43.315068,-91.805746),
	new google.maps.LatLng(43.315044,-91.805685),
	new google.maps.LatLng(43.315157,-91.805505),
	new google.maps.LatLng(43.315319,-91.805347),
	new google.maps.LatLng(43.315364,-91.80539),
	new google.maps.LatLng(43.31545,-91.805336),
	new google.maps.LatLng(43.315487,-91.805357),
	new google.maps.LatLng(43.315477,-91.805414),
	new google.maps.LatLng(43.315403,-91.805483),
	new google.maps.LatLng(43.315421,-91.805542),
	new google.maps.LatLng(43.315284,-91.805744),
	new google.maps.LatLng(43.315126,-91.805856),
	new google.maps.LatLng(43.315095,-91.8058)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller Hall and Dieseth Hall comprise the Regents Towers (or just &quot;The Towers&quot; in student-speak), named for Frank Miller and John Dieseth, two former members of the Luther Board of Regents. Completed in the late 1960s, these nine-story residence halls are situated on a bluff overlooking the Oneota Valley and Upper Iowa River. Both halls will have been renovated prior to the start of fall 2012.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller and Dieseth are connected via Brunsdale Lounge, which contains a fireplace, social meeting space, study lounge, and computer lab. The lounge is also named for a former Regent, Norman Brunsdale. Miller and Dieseth primarily house sophomore and junior students.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> &nbsp;</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> <a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/towers/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/288017.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Dieseth Hall', dieseth, desc, category);

var facilities = [
	new google.maps.LatLng(43.309544,-91.806945),
	new google.maps.LatLng(43.309431,-91.806945),
	new google.maps.LatLng(43.309425,-91.807162),
	new google.maps.LatLng(43.309539,-91.807179),
	new google.maps.LatLng(43.309544,-91.806945)
	];
	
	desc = 'Info about Facilities here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Facilities Services', facilities, desc, category);

var farwell = [
	new google.maps.LatLng(43.311397,-91.806924),
	new google.maps.LatLng(43.310815,-91.807224),
	new google.maps.LatLng(43.310873,-91.807423),
	new google.maps.LatLng(43.311088,-91.80731),
	new google.maps.LatLng(43.311115,-91.807385),
	new google.maps.LatLng(43.311272,-91.807294),
	new google.maps.LatLng(43.311256,-91.80723),
	new google.maps.LatLng(43.311451,-91.807117),
	new google.maps.LatLng(43.311397,-91.806924)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> <span style="color: rgb(25, 28, 69); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; background-color: rgb(255, 255, 255); ">Farwell Hall, completed in 1991, is a high-rise residence hall on the lower campus connected to the upper campus by a 116-foot covered bridge. The hall, named for Elwin D. Farwell, president of the college, 1963-81, features clustered living arrangements. The hall&#39;s common lounge is named for Helen Farwell</span></p> <p> <span style="color: rgb(25, 28, 69); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; background-color: rgb(255, 255, 255); "><a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/farwell/" target="_blank"><img alt="" src="http:\/\/www.luther.edu/reason/images/286625.jpg" style="width: 350px; height: 141px; " /></a></span></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Farwell Hall', farwell, desc, category);

var gjerset = [
	new google.maps.LatLng(43.31054,-91.801018),
	new google.maps.LatLng(43.31054,-91.800795),
	new google.maps.LatLng(43.310317,-91.800814),
	new google.maps.LatLng(43.310321,-91.801031),
	new google.maps.LatLng(43.31054,-91.801018)
	];
	
	desc = 'Info about Gjerset here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Gjerset House', gjerset, desc, category);

var jefferson = [
	new google.maps.LatLng(43.310792,-91.800497),
	new google.maps.LatLng(43.310592,-91.800486),
	new google.maps.LatLng(43.3106,-91.800256),
	new google.maps.LatLng(43.310788,-91.80025),
	new google.maps.LatLng(43.310792,-91.800497)
	];
	
	desc = 'Info about Jefferson here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Jefferson Prairie House', jefferson, desc, category);

var jenson = [
	new google.maps.LatLng(43.311742,-91.802648),
	new google.maps.LatLng(43.311738,-91.80231),
	new google.maps.LatLng(43.311635,-91.802284),
	new google.maps.LatLng(43.311631,-91.80219),
	new google.maps.LatLng(43.311547,-91.80219),
	new google.maps.LatLng(43.311541,-91.801538),
	new google.maps.LatLng(43.311385,-91.801538),
	new google.maps.LatLng(43.311383,-91.801425),
	new google.maps.LatLng(43.311174,-91.801414),
	new google.maps.LatLng(43.311176,-91.802351),
	new google.maps.LatLng(43.311238,-91.802351),
	new google.maps.LatLng(43.311238,-91.802689),
	new google.maps.LatLng(43.311311,-91.802683),
	new google.maps.LatLng(43.311313,-91.802619),
	new google.maps.LatLng(43.311393,-91.802621),
	new google.maps.LatLng(43.311398,-91.802533),
	new google.maps.LatLng(43.311432,-91.802528),
	new google.maps.LatLng(43.311432,-91.802659),
	new google.maps.LatLng(43.311742,-91.802648)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> The award-winning Jenson-Noble Hall of Music includes a 325-seat recital hall, three rehearsal halls, an organ studio, a piano lab, a percussion studio, and 36 private practice rooms. The decor of the main floor is intended to recall the old wharves of Bergen, Norway, the home of composer Edvard Grieg and Norway&rsquo;s &ldquo;city of music.&rdquo;</p> <p> <a href="https:\/\/www.luther.edu/campus/tour/jensonnoble/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266874.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Jenson Noble Hall of Music', jenson, desc, category);

var korsrud = [
	new google.maps.LatLng(43.309837,-91.807079),
	new google.maps.LatLng(43.309823,-91.806765),
	new google.maps.LatLng(43.309677,-91.806798),
	new google.maps.LatLng(43.309704,-91.807125)
	];
	
	desc = 'Info about Korsrud Heating Plant here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Korsrud Heating Plant', korsrud, desc, category);

var koren = [
	new google.maps.LatLng(43.310804,-91.803993),
	new google.maps.LatLng(43.310766,-91.803995),
	new google.maps.LatLng(43.310761,-91.803806),
	new google.maps.LatLng(43.310621,-91.803807),
	new google.maps.LatLng(43.310621,-91.803993),
	new google.maps.LatLng(43.310585,-91.803995),
	new google.maps.LatLng(43.310586,-91.804117),
	new google.maps.LatLng(43.310805,-91.804118),
	new google.maps.LatLng(43.310804,-91.803993)
	];
	
	desc  = '<html> <head> <title></title> </head> <body> <div class=div><div class=div> <p> <span style="color: rgb(11, 35, 69); background-color: rgb(255, 255, 255); ">Dedicated in 1921 and named in honor of Ulrik Vilhelm Koren, one of Luther&rsquo;s founders, Koren has served as the college library, music hall, and chapel. After a major renovation, it now holds classrooms and offices for the education, history, political science, and sociology/anthropology/ social work departments.</span></p> <p> <span style="color: rgb(11, 35, 69); background-color: rgb(255, 255, 255); "><a href="https:\/\/www.luther.edu/campus/map/koren/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266878.jpg" style="width: 350px; height: 142px; " /></a></span></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Koren', koren, desc, category);

var larsen = [
	new google.maps.LatLng(43.310073,-91.805631),
	new google.maps.LatLng(43.310243,-91.805572),
	new google.maps.LatLng(43.310226,-91.805416),
	new google.maps.LatLng(43.310065,-91.805454),
	new google.maps.LatLng(43.310036,-91.805285),
	new google.maps.LatLng(43.310368,-91.805194),
	new google.maps.LatLng(43.310389,-91.805347),
	new google.maps.LatLng(43.310348,-91.805371),
	new google.maps.LatLng(43.310368,-91.805561),
	new google.maps.LatLng(43.310425,-91.805559),
	new google.maps.LatLng(43.310434,-91.805706),
	new google.maps.LatLng(43.310116,-91.805803),
	new google.maps.LatLng(43.310073,-91.805631)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> The oldest residence hall on campus, Larsen Hall, opened in 1907, is a popular choice for junior and senior students. The building also houses the study abroad office, health service, and counseling services. It is named for the first president of Luther College, Peter Laurentius &ldquo;Laur.&rdquo; Larsen, who served from 1861&ndash;1902.</p> <p> <a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/larsen//" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/286632.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Larsen Hall', larsen, desc, category);

var loyalty = [
	new google.maps.LatLng(43.310407,-91.806143),
	new google.maps.LatLng(43.310356,-91.806149),
	new google.maps.LatLng(43.310343,-91.806028),
	new google.maps.LatLng(43.310218,-91.806068),
	new google.maps.LatLng(43.310253,-91.806425),
	new google.maps.LatLng(43.310288,-91.806417),
	new google.maps.LatLng(43.310296,-91.806487),
	new google.maps.LatLng(43.31035,-91.80647),
	new google.maps.LatLng(43.310343,-91.806398),
	new google.maps.LatLng(43.310378,-91.806387),
	new google.maps.LatLng(43.310366,-91.806259),
	new google.maps.LatLng(43.310415,-91.806248),
	new google.maps.LatLng(43.310407,-91.806143)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> <span style="color: rgb(25, 28, 69); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; background-color: rgb(255, 255, 255); ">Loyalty Hall, completed in 1916 and remodeled in 2003-2004, houses the offices of alumni and advancement, as well as professional meeting facilities and classrooms. The building&#39;s name recognizes the loyalty and interest of the students and alumni whose contributions financed construction of the building.</span></p> <p> <span style="color: rgb(25, 28, 69); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; background-color: rgb(255, 255, 255); "><a href="https:\/\/www.luther.edu/campus/map/loyalty/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/288497.jpg" style="width: 350px; height: 142px; " /></a></span></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Loyalty Hall', loyalty, desc, category);

var main = [
	new google.maps.LatLng(43.310713,-91.806157),
	new google.maps.LatLng(43.311342,-91.806039),
	new google.maps.LatLng(43.311365,-91.806307),
	new google.maps.LatLng(43.310721,-91.806441),
	new google.maps.LatLng(43.310713,-91.806157)
	];
	
	desc  = '<html> <head> <title></title> </head> <body> <div class=div><p> This is what we want to say.</p> <p> Here is the picture:</p> <p> <img alt="" src="https:\/\/www.luther.edu/reason/images/266882.jpg" style="width: 350px; height: 142px; " /></p> <p> <a href="https:\/\/www.luther.edu/campus/tour/main/" target="_blank">https:\/\/www.luther.edu/campus/tour/main/</a></p> </div> </body> </html>';
	category = 'academic';
	
	polygonCoords[count++] = new Array('Main Building', main, desc, category);

var millerhall = [
	new google.maps.LatLng(43.31562,-91.804958),
	new google.maps.LatLng(43.315591,-91.804947),
	new google.maps.LatLng(43.315612,-91.804714),
	new google.maps.LatLng(43.315756,-91.804461),
	new google.maps.LatLng(43.315792,-91.80447),
	new google.maps.LatLng(43.315829,-91.804411),
	new google.maps.LatLng(43.315899,-91.804453),
	new google.maps.LatLng(43.315889,-91.804523),
	new google.maps.LatLng(43.315893,-91.804585),
	new google.maps.LatLng(43.315836,-91.804824),
	new google.maps.LatLng(43.315688,-91.805025),
	new google.maps.LatLng(43.315651,-91.805022),
	new google.maps.LatLng(43.315639,-91.805057),
	new google.maps.LatLng(43.31561,-91.805022),
	new google.maps.LatLng(43.31562,-91.804958)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller Hall and Dieseth Hall comprise the Regents Towers (or just &quot;The Towers&quot; in student-speak), named for Frank Miller and John Dieseth, two former members of the Luther Board of Regents. Completed in the late 1960s, these nine-story residence halls are situated on a bluff overlooking the Oneota Valley and Upper Iowa River. Both halls will have been renovated prior to the start of fall 2012.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> Miller and Dieseth are connected via Brunsdale Lounge, which contains a fireplace, social meeting space, study lounge, and computer lab. The lounge is also named for a former Regent, Norman Brunsdale. Miller and Dieseth primarily house sophomore and junior students.</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> &nbsp;</p> <p style="background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: rgb(255, 255, 255); border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; border-image: initial; font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; margin-right: 0px; margin-bottom: 1.5em; margin-left: 0px; outline-width: 0px; outline-style: initial; outline-color: initial; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; vertical-align: baseline; color: rgb(25, 28, 69); line-height: 18px; "> <a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/towers/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/288017.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Miller Hall', millerhall, desc, category);

var ockham = [
	new google.maps.LatLng(43.310163,-91.806867),
	new google.maps.LatLng(43.309944,-91.806916),
	new google.maps.LatLng(43.309956,-91.807034),
	new google.maps.LatLng(43.310181,-91.806988),
	new google.maps.LatLng(43.310163,-91.806867)
	];
	
	desc = 'Info about Ockham House here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Ockham House', ockham, desc, category);

var olin = [
	new google.maps.LatLng(43.313194,-91.803238),
	new google.maps.LatLng(43.313126,-91.803209),
	new google.maps.LatLng(43.313104,-91.803305),
	new google.maps.LatLng(43.312948,-91.803241),
	new google.maps.LatLng(43.312973,-91.803096),
	new google.maps.LatLng(43.312899,-91.803064),
	new google.maps.LatLng(43.312899,-91.803043),
	new google.maps.LatLng(43.312774,-91.802978),
	new google.maps.LatLng(43.312827,-91.802756),
	new google.maps.LatLng(43.312874,-91.802769),
	new google.maps.LatLng(43.312917,-91.802608),
	new google.maps.LatLng(43.313036,-91.802659),
	new google.maps.LatLng(43.313028,-91.802694),
	new google.maps.LatLng(43.313093,-91.802731),
	new google.maps.LatLng(43.313067,-91.802847),
	new google.maps.LatLng(43.313202,-91.802908),
	new google.maps.LatLng(43.313182,-91.802941),
	new google.maps.LatLng(43.313249,-91.802967),
	new google.maps.LatLng(43.313194,-91.803238)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> The Franklin W. Olin Building is a state-of-the art academic facility that houses the departments of economics and business, mathematics, and computer science. Funded by a grant from the F. W. Olin Foundation, the building features standard classrooms, two computer classrooms, four networked computer laboratories, a 120- seat lecture hall, and an electronic decision making facility called the Round Table Room.</p> <p> <a href="https:\/\/www.luther.edu/campus/tour/olin/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266870.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Franklin W. Olin Bldg', olin, desc, category);

var olsen = [
	new google.maps.LatLng(43.309646,-91.805245),
	new google.maps.LatLng(43.30954,-91.805245),
	new google.maps.LatLng(43.309535,-91.804665),
	new google.maps.LatLng(43.309494,-91.804668),
	new google.maps.LatLng(43.30949,-91.804545),
	new google.maps.LatLng(43.309472,-91.804547),
	new google.maps.LatLng(43.30947,-91.803957),
	new google.maps.LatLng(43.309576,-91.803952),
	new google.maps.LatLng(43.309579,-91.804523),
	new google.maps.LatLng(43.309669,-91.804523),
	new google.maps.LatLng(43.309669,-91.804676),
	new google.maps.LatLng(43.309636,-91.804676),
	new google.maps.LatLng(43.309646,-91.805245)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Olson Hall, recently remodeled, is named for Oscar Ludvig Olson, who served a long career as a faculty member of the English department and was the third president of the college, 1921&ndash;32. It houses first-year students in one wing and upperclass students in suites in the other wing.</p> <p> <a href="https:\/\/www.luther.edu/reslife/residencehalls/upperclass/olson/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266890.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Olsen Hall', olsen, desc, category);

var preus = [
	new google.maps.LatLng(43.312603,-91.802493),
	new google.maps.LatLng(43.312037,-91.802487),
	new google.maps.LatLng(43.312029,-91.802595),
	new google.maps.LatLng(43.31197,-91.802589),
	new google.maps.LatLng(43.31197,-91.802723),
	new google.maps.LatLng(43.312033,-91.80274),
	new google.maps.LatLng(43.312041,-91.803077),
	new google.maps.LatLng(43.312218,-91.803088),
	new google.maps.LatLng(43.312217,-91.803146),
	new google.maps.LatLng(43.312367,-91.80315),
	new google.maps.LatLng(43.312363,-91.803087),
	new google.maps.LatLng(43.312601,-91.803072),
	new google.maps.LatLng(43.312603,-91.802493)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Preus Library is a superior small-college library with more than 330,000 volumes. It is named for the Preus family, two of whose members have served as president of the college: C. K. Preus, 1902&ndash;21, and O. J. H. Preus, 1932&ndash;48. Special facilities in Preus Library include the Technology Help Desk adjacent to the largest computer lab on campus, the Rare Book Room, a classroom connected to the Iowa Communications Network (ICN), the Luther College Archives, and the Fine Arts Collection.</p> <p> <a href="https:\/\/www.luther.edu/campus/tour/library/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266872.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Preus Library', preus, desc, category);

var regentsCenter = [
	new google.maps.LatLng(43.313575,-91.806285),
	new google.maps.LatLng(43.313126,-91.806301),
	new google.maps.LatLng(43.313173,-91.807417),
	new google.maps.LatLng(43.313645,-91.807374),
	new google.maps.LatLng(43.31368,-91.807841),
	new google.maps.LatLng(43.314074,-91.807787),
	new google.maps.LatLng(43.314086,-91.807863),
	new google.maps.LatLng(43.314386,-91.807846),
	new google.maps.LatLng(43.314371,-91.807476),
	new google.maps.LatLng(43.314207,-91.807492),
	new google.maps.LatLng(43.314203,-91.807433),
	new google.maps.LatLng(43.314121,-91.807428),
	new google.maps.LatLng(43.314113,-91.807262),
	new google.maps.LatLng(43.314265,-91.807251),
	new google.maps.LatLng(43.314265,-91.807069),
	new google.maps.LatLng(43.314433,-91.807052),
	new google.maps.LatLng(43.314414,-91.806757),
	new google.maps.LatLng(43.313992,-91.80679),
	new google.maps.LatLng(43.313988,-91.80658),
	new google.maps.LatLng(43.313575,-91.806607),
	new google.maps.LatLng(43.313575,-91.806285)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Regents Center began with the Field House in 1964 and was completed with additional facilities in 1991. The Legends Fitness for Life Center&mdash;a new addition to the Regents Center&mdash;opened March 1, 2001. It is Luther&#39;s principal athletic facility, although the tennis courts, Carlson Stadium, Ritland Fitness Trail, and several playing fields must be included to complete the picture. Visitors should call Information (387-1575) to determine what facilities are open to the public.</p> <p> <a href="https:\/\/www.luther.edu/campus/map/regents/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266862.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Regents Center', regentsCenter, desc, category);

var rock = [
	new google.maps.LatLng(43.31151,-91.800653),
	new google.maps.LatLng(43.311529,-91.80039),
	new google.maps.LatLng(43.31176,-91.800406),
	new google.maps.LatLng(43.31176,-91.800669),
	new google.maps.LatLng(43.31151,-91.800653)
	];
	
	desc = 'Info about Rock House here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Rock Prairie House', rock, desc, category);	

var sampsonhoffland = [
	new google.maps.LatLng(43.313867,-91.803145),
	new google.maps.LatLng(43.313914,-91.803112),
	new google.maps.LatLng(43.313885,-91.802986),
	new google.maps.LatLng(43.314041,-91.802922),
	new google.maps.LatLng(43.314,-91.802745),
	new google.maps.LatLng(43.314074,-91.80271),
	new google.maps.LatLng(43.314127,-91.802892),
	new google.maps.LatLng(43.314166,-91.802876),
	new google.maps.LatLng(43.314193,-91.802992),
	new google.maps.LatLng(43.314236,-91.802978),
	new google.maps.LatLng(43.314367,-91.80352),
	new google.maps.LatLng(43.314271,-91.803587),
	new google.maps.LatLng(43.314277,-91.803633),
	new google.maps.LatLng(43.314166,-91.803657),
	new google.maps.LatLng(43.314049,-91.803659),
	new google.maps.LatLng(43.314041,-91.803719),
	new google.maps.LatLng(43.31391,-91.803761),
	new google.maps.LatLng(43.313836,-91.803614),
	new google.maps.LatLng(43.313955,-91.803531),
	new google.maps.LatLng(43.313867,-91.803145)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> <span style="color: rgb(11, 35, 69); ">The college&rsquo;s newest building, Sampson Hoffland Laboratories houses the biology and chemistry departments. Built to environmentally sound LEED standards, Sampson Hoffland features 17 teaching labs and faculty-student research areas, along with study areas adjacent to faculty offices. Specialized laboratories support development biology, cell culture, transmission and scanning electron microscopy, light microscopy, and digital-image processing. Sampson Hoffland also houses the Overholt Human Anatomy Laboratory, where human anatomy is studied through cadaver dissection.</span></p> <p> <a href="https:\/\/www.luther.edu/campus/tour/sampson/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266868.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Sampson Hoffland Laboratories', sampsonhoffland, desc, category);

var sperati = [
	new google.maps.LatLng(43.310618,-91.801452),
	new google.maps.LatLng(43.310446,-91.801449),
	new google.maps.LatLng(43.310444,-91.801672),
	new google.maps.LatLng(43.3106,-91.801675),
	new google.maps.LatLng(43.310618,-91.801452)
	];
	
	desc = 'Info about Sperati here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Sperati Guest House', sperati, desc, category);

var spring = [
	new google.maps.LatLng(43.312076,-91.800374),
	new google.maps.LatLng(43.312064,-91.800663),
	new google.maps.LatLng(43.312283,-91.80068),
	new google.maps.LatLng(43.312298,-91.800401),
	new google.maps.LatLng(43.312076,-91.800374)
	];
	
	desc = 'Info about Spring House here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Spring Prairie House', spring, desc, category);

var storre = [
	new google.maps.LatLng(43.310034,-91.807702),
	new google.maps.LatLng(43.309812,-91.807787),
	new google.maps.LatLng(43.309886,-91.808361),
	new google.maps.LatLng(43.310093,-91.808286),
	new google.maps.LatLng(43.310034,-91.807702)
	];
	
	desc = 'Info about Storre here.';
	category = 'academic';
	polygonCoords[count++] = new Array('Storre Theater', storre, desc, category);

var sustainabilityHouse = [
	new google.maps.LatLng(43.31272,-91.800427),
	new google.maps.LatLng(43.312903,-91.800438),
	new google.maps.LatLng(43.312915,-91.800685),
	new google.maps.LatLng(43.31272,-91.800717),
	new google.maps.LatLng(43.31272,-91.800427)
	];
	
	desc = 'Info about Sustainability House here.';
	category = 'residential';
	polygonCoords[count++] = new Array('Sustainability House', sustainabilityHouse, desc, category);

var union = [
	new google.maps.LatLng(43.312724,-91.806385),
	new google.maps.LatLng(43.312722,-91.806301),
	new google.maps.LatLng(43.312626,-91.806326),
	new google.maps.LatLng(43.312622,-91.806044),
	new google.maps.LatLng(43.312495,-91.806036),
	new google.maps.LatLng(43.312493,-91.805939),
	new google.maps.LatLng(43.311795,-91.80598),
	new google.maps.LatLng(43.311818,-91.806318),
	new google.maps.LatLng(43.312064,-91.806299),
	new google.maps.LatLng(43.312066,-91.806339),
	new google.maps.LatLng(43.311992,-91.80636),
	new google.maps.LatLng(43.311994,-91.806519),
	new google.maps.LatLng(43.312409,-91.80647),
	new google.maps.LatLng(43.312406,-91.806623),
	new google.maps.LatLng(43.312624,-91.806613),
	new google.maps.LatLng(43.312632,-91.806411),
	new google.maps.LatLng(43.312724,-91.806385)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> <span style="color: rgb(11, 35, 69); background-color: rgb(255, 255, 255); ">Expanded and renovated in 2006, Dahl Centennial Union houses the admissions welcome center, administrative offices, workspace and offices for student organizations, dining facilities, a book shop, the campus mail center, several conference rooms, and one of four art galleries on campus.</span></p> <p> <a href="https:\/\/www.luther.edu/campus/tour/centennialunion/" style="background-color: rgb(255, 255, 255); " target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266136.jpg" style="width: 350px; height: 142px; " /></a></p> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Union', union, desc, category);
	
var valders = [
	new google.maps.LatLng(43.313524,-91.803244),
	new google.maps.LatLng(43.313824,-91.803603),
	new google.maps.LatLng(43.313926,-91.803791),
	new google.maps.LatLng(43.313824,-91.803957),
	new google.maps.LatLng(43.31384,-91.803989),
	new google.maps.LatLng(43.313766,-91.804107),
	new google.maps.LatLng(43.313859,-91.804199),
	new google.maps.LatLng(43.313774,-91.804381),
	new google.maps.LatLng(43.313735,-91.80437),
	new google.maps.LatLng(43.313657,-91.804242),
	new google.maps.LatLng(43.313547,-91.804408),
	new google.maps.LatLng(43.313559,-91.804429),
	new google.maps.LatLng(43.313614,-91.804376),
	new google.maps.LatLng(43.313672,-91.804483),
	new google.maps.LatLng(43.313559,-91.804596),
	new google.maps.LatLng(43.313489,-91.804515),
	new google.maps.LatLng(43.313344,-91.804746),
	new google.maps.LatLng(43.313176,-91.804563),
	new google.maps.LatLng(43.313235,-91.804461),
	new google.maps.LatLng(43.313231,-91.804413),
	new google.maps.LatLng(43.313196,-91.804424),
	new google.maps.LatLng(43.313157,-91.804338),
	new google.maps.LatLng(43.313173,-91.804284),
	new google.maps.LatLng(43.31322,-91.804279),
	new google.maps.LatLng(43.313294,-91.804335),
	new google.maps.LatLng(43.313638,-91.803765),
	new google.maps.LatLng(43.313394,-91.803468)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p style="color: rgb(11, 35, 69); background-color: rgb(255, 255, 255); "> Valders Hall of Science is home to the departments of nursing, physics, and psychology. In addition to classrooms and laboratories, Valders has a planetarium, a research-grade greenhouse, and a live-animal center.</p> <div> <a href="https:\/\/www.luther.edu/campus/tour/valders/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/266866.jpg" style="width: 350px; height: 142px; " /></a></div> </div> </body> </html>';
	category = 'academic';
	polygonCoords[count++] = new Array('Valders Hall of Science', valders, desc, category);

var ylvisakerhall = [
	new google.maps.LatLng(43.314183,-91.805545),
	new google.maps.LatLng(43.31407,-91.80539),
	new google.maps.LatLng(43.314504,-91.804596),
	new google.maps.LatLng(43.31464,-91.804751),
	new google.maps.LatLng(43.314183,-91.805545)
	];
	
	desc = '<html> <head> <title></title> </head> <body> <div class=div><p> Completed in 1964, J. Wilhelm Ylvisaker (pronounced &quot;il-vuh-soccer&quot;) Hall is named after the fifth president of Luther College. Renovated in the summer of 2002, the hall contains large study and recreation lounges on the east end of the building.</p> <p> <a href="https:\/\/www.luther.edu/reslife/residencehalls/firstyearhalls/ylvisaker/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/286612.jpg" style="width: 350px; height: 141px; " /></a></p> </div> </body> </html>';
	category = 'residential';
	polygonCoords[count++] = new Array('Ylvisaker Hall', ylvisakerhall, desc, category);


//PARKING LOTS

var bakerParking = [
	new google.maps.LatLng(43.317669,-91.801511),
	new google.maps.LatLng(43.317216,-91.801146),
	new google.maps.LatLng(43.316998,-91.8015),
	new google.maps.LatLng(43.317482,-91.80194),
	new google.maps.LatLng(43.317669,-91.801511)
	];
	
	desc = 'Info about Baker parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Baker Parking Lot',bakerParking, desc, category);	

var facilitiesParking = [
	new google.maps.LatLng(43.309663,-91.806548),
	new google.maps.LatLng(43.30966,-91.805373),
	new google.maps.LatLng(43.309406,-91.805368),
	new google.maps.LatLng(43.30941,-91.805905),
	new google.maps.LatLng(43.30884,-91.805905),
	new google.maps.LatLng(43.308836,-91.806141),
	new google.maps.LatLng(43.30916,-91.806146),
	new google.maps.LatLng(43.309168,-91.806602),
	new google.maps.LatLng(43.309663,-91.806548)
	];
	
	desc = 'Info about Facilities parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Facilities Services Parking Lot',facilitiesParking, desc, category);
	
var farwellParking = [
	new google.maps.LatLng(43.310335,-91.808549),
	new google.maps.LatLng(43.310284,-91.807959),
	new google.maps.LatLng(43.31019,-91.807508),
	new google.maps.LatLng(43.310194,-91.807444),
	new google.maps.LatLng(43.310222,-91.807396),
	new google.maps.LatLng(43.310397,-91.807337),
	new google.maps.LatLng(43.310487,-91.807417),
	new google.maps.LatLng(43.310526,-91.80746),
	new google.maps.LatLng(43.310596,-91.807455),
	new google.maps.LatLng(43.310631,-91.807455),
	new google.maps.LatLng(43.310671,-91.807466),
	new google.maps.LatLng(43.310713,-91.807487),
	new google.maps.LatLng(43.31078,-91.807557),
	new google.maps.LatLng(43.310889,-91.807605),
	new google.maps.LatLng(43.310924,-91.80761),
	new google.maps.LatLng(43.310998,-91.80761),
	new google.maps.LatLng(43.310991,-91.807659),
	new google.maps.LatLng(43.310994,-91.807696),
	new google.maps.LatLng(43.31101,-91.807782),
	new google.maps.LatLng(43.311053,-91.8079),
	new google.maps.LatLng(43.3111,-91.808018),
	new google.maps.LatLng(43.311123,-91.808163),
	new google.maps.LatLng(43.311135,-91.808276),
	new google.maps.LatLng(43.311135,-91.808356),
	new google.maps.LatLng(43.311135,-91.808399),
	new google.maps.LatLng(43.311147,-91.808496),
	new google.maps.LatLng(43.311151,-91.808555),
	new google.maps.LatLng(43.311151,-91.808624),
	new google.maps.LatLng(43.311151,-91.808699),
	new google.maps.LatLng(43.311151,-91.808817),
	new google.maps.LatLng(43.310335,-91.808549)
	];
	
	desc = 'Info about Farwell parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Farwell Parking Lot',farwellParking, desc, category);

var jensonParking = [
	new google.maps.LatLng(43.312216,-91.80164),
	new google.maps.LatLng(43.312224,-91.801162),
	new google.maps.LatLng(43.311623,-91.801098),
	new google.maps.LatLng(43.311611,-91.801313),
	new google.maps.LatLng(43.311057,-91.801372),
	new google.maps.LatLng(43.311053,-91.801452),
	new google.maps.LatLng(43.311615,-91.801452),
	new google.maps.LatLng(43.311627,-91.80164),
	new google.maps.LatLng(43.312216,-91.80164)
	];
	
	desc = 'Info about Jenson parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Jenson-Noble Parking Lot',jensonParking, desc, category);

var larsenParking = [
	new google.maps.LatLng(43.309702,-91.806543),
	new google.maps.LatLng(43.309695,-91.805475),
	new google.maps.LatLng(43.309804,-91.80547),
	new google.maps.LatLng(43.309812,-91.805357),
	new google.maps.LatLng(43.309987,-91.805341),
	new google.maps.LatLng(43.310011,-91.805679),
	new google.maps.LatLng(43.309804,-91.805711),
	new google.maps.LatLng(43.309808,-91.806532),
	new google.maps.LatLng(43.309702,-91.806543)
	];
	
	
	desc = 'Info about Larsen parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('LarsenParking Lot',larsenParking, desc, category);

var olsenParking = [
	new google.maps.LatLng(43.309386,-91.805288),
	new google.maps.LatLng(43.309304,-91.805293),
	new google.maps.LatLng(43.309285,-91.804081),
	new google.maps.LatLng(43.309367,-91.804097),
	new google.maps.LatLng(43.309386,-91.805288)
	];
	
	desc = 'Info about Olsen parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Olsen Parking Lot',olsenParking, desc, category);

var preusParking = [
	new google.maps.LatLng(43.313219,-91.80245),
	new google.maps.LatLng(43.313219,-91.801908),
	new google.maps.LatLng(43.313063,-91.801597),
	new google.maps.LatLng(43.31254,-91.801575),
	new google.maps.LatLng(43.312259,-91.802128),
	new google.maps.LatLng(43.312255,-91.802434),
	new google.maps.LatLng(43.313219,-91.80245)
	];
	desc = 'Info about Preus parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Preus Library Parking Lot',preusParking, desc, category);
	
var regentsParking = [
	new google.maps.LatLng(43.315858,-91.805947),
	new google.maps.LatLng(43.315148,-91.805942),
	new google.maps.LatLng(43.315034,-91.806226),
	new google.maps.LatLng(43.314827,-91.806248),
	new google.maps.LatLng(43.31482,-91.806366),
	new google.maps.LatLng(43.314059,-91.806452),
	new google.maps.LatLng(43.314074,-91.806752),
	new google.maps.LatLng(43.314449,-91.80672),
	new google.maps.LatLng(43.314523,-91.807932),
	new google.maps.LatLng(43.315514,-91.807868),
	new google.maps.LatLng(43.315639,-91.807836),
	new google.maps.LatLng(43.315713,-91.807777),
	new google.maps.LatLng(43.315745,-91.807718),
	new google.maps.LatLng(43.315764,-91.80768),
	new google.maps.LatLng(43.315784,-91.807605),
	new google.maps.LatLng(43.315795,-91.807562),
	new google.maps.LatLng(43.315768,-91.80665),
	new google.maps.LatLng(43.315788,-91.806371),
	new google.maps.LatLng(43.315803,-91.806162),
	new google.maps.LatLng(43.315827,-91.806039),
	new google.maps.LatLng(43.315858,-91.805947)
	];
	
	desc = 'Info about Regents parking lot here.';
	category = 'parking';
	polygonCoords[count++] = new Array('Regents Parking Lot',regentsParking, desc, category);	
	
//Naturareas

var AndersonPrairie =
	[
	new google.maps.LatLng(43.315979,-91.802166),
	new google.maps.LatLng(43.316092,-91.802235),
	new google.maps.LatLng(43.316155,-91.802182),
	new google.maps.LatLng(43.316213,-91.802069),
	new google.maps.LatLng(43.316381,-91.801801),
	new google.maps.LatLng(43.316424,-91.801586),
	new google.maps.LatLng(43.316443,-91.801414),
	new google.maps.LatLng(43.316482,-91.801329),
	new google.maps.LatLng(43.31667,-91.801119),
	new google.maps.LatLng(43.316713,-91.800787),
	new google.maps.LatLng(43.316674,-91.800594),
	new google.maps.LatLng(43.316592,-91.800272),
	new google.maps.LatLng(43.316705,-91.800106),
	new google.maps.LatLng(43.316724,-91.799864),
	new google.maps.LatLng(43.316748,-91.799655),
	new google.maps.LatLng(43.316857,-91.799542),
	new google.maps.LatLng(43.31708,-91.799376),
	new google.maps.LatLng(43.316623,-91.798464),
	new google.maps.LatLng(43.316348,-91.797933),
	new google.maps.LatLng(43.316057,-91.79741),
	new google.maps.LatLng(43.315628,-91.796656),
	new google.maps.LatLng(43.315116,-91.795892),
	new google.maps.LatLng(43.314851,-91.79568),
	new google.maps.LatLng(43.314734,-91.795734),
	new google.maps.LatLng(43.314648,-91.79597),
	new google.maps.LatLng(43.314535,-91.796131),
	new google.maps.LatLng(43.314472,-91.796259),
	new google.maps.LatLng(43.314449,-91.796731),
	new google.maps.LatLng(43.31441,-91.797209),
	new google.maps.LatLng(43.314365,-91.797877),
	new google.maps.LatLng(43.314347,-91.798507),
	new google.maps.LatLng(43.314279,-91.798558),
	new google.maps.LatLng(43.31423,-91.79863),
	new google.maps.LatLng(43.314199,-91.798764),
	new google.maps.LatLng(43.314043,-91.799371),
	new google.maps.LatLng(43.313887,-91.799666),
	new google.maps.LatLng(43.313813,-91.799875),
	new google.maps.LatLng(43.313828,-91.799993),
	new google.maps.LatLng(43.313883,-91.800089),
	new google.maps.LatLng(43.31535,-91.801565),
	new google.maps.LatLng(43.315979,-91.802166)
	];
	desc = 'Info about Anderson Prairie  here.';
	category = 'sustainability';
	polygonCoords[count++] = new Array('Anderson Prairie',AndersonPrairie, desc, category);
	
var HickoryRidge =
	[
	new google.maps.LatLng(43.318005,-91.800878),
	new google.maps.LatLng(43.318637,-91.800921),
	new google.maps.LatLng(43.319058,-91.800556),
	new google.maps.LatLng(43.320315,-91.799462),
	new google.maps.LatLng(43.320463,-91.795503),
	new google.maps.LatLng(43.32037,-91.794827),
	new google.maps.LatLng(43.320112,-91.794527),
	new google.maps.LatLng(43.319652,-91.794484),
	new google.maps.LatLng(43.319285,-91.794344),
	new google.maps.LatLng(43.319035,-91.794248),
	new google.maps.LatLng(43.318723,-91.793915),
	new google.maps.LatLng(43.318434,-91.793861),
	new google.maps.LatLng(43.317661,-91.794097),
	new google.maps.LatLng(43.316951,-91.794301),
	new google.maps.LatLng(43.315897,-91.794205),
	new google.maps.LatLng(43.315148,-91.794323),
	new google.maps.LatLng(43.314664,-91.794688),
	new google.maps.LatLng(43.314539,-91.794956),
	new google.maps.LatLng(43.314546,-91.795278),
	new google.maps.LatLng(43.314726,-91.795492),
	new google.maps.LatLng(43.315265,-91.796018),
	new google.maps.LatLng(43.315834,-91.796758),
	new google.maps.LatLng(43.316139,-91.797198),
	new google.maps.LatLng(43.316654,-91.798282),
	new google.maps.LatLng(43.318005,-91.800878),
	new google.maps.LatLng(43.318005,-91.800878)
	];
	desc = 'Info about Hickory Ridge here.';
	category = 'sustainability';
	polygonCoords[count++] = new Array('Hickory Ridge',HickoryRidge, desc, category);
	
var Roselin =
	[
	new google.maps.LatLng(43.321907,-91.819761),
	new google.maps.LatLng(43.321673,-91.820447),
	new google.maps.LatLng(43.321384,-91.820394),
	new google.maps.LatLng(43.321205,-91.822218),
	new google.maps.LatLng(43.321299,-91.82254),
	new google.maps.LatLng(43.323109,-91.822819),
	new google.maps.LatLng(43.32421,-91.822486),
	new google.maps.LatLng(43.325474,-91.822422),
	new google.maps.LatLng(43.325865,-91.820104),
	new google.maps.LatLng(43.325724,-91.818666),
	new google.maps.LatLng(43.325786,-91.817443),
	new google.maps.LatLng(43.325521,-91.815941),
	new google.maps.LatLng(43.325271,-91.814268),
	new google.maps.LatLng(43.325084,-91.813753),
	new google.maps.LatLng(43.3246,-91.813624),
	new google.maps.LatLng(43.324194,-91.81371),
	new google.maps.LatLng(43.323788,-91.814761),
	new google.maps.LatLng(43.323874,-91.815029),
	new google.maps.LatLng(43.323757,-91.815276),
	new google.maps.LatLng(43.323195,-91.816456),
	new google.maps.LatLng(43.322579,-91.817518),
	new google.maps.LatLng(43.322282,-91.817658),
	new google.maps.LatLng(43.322087,-91.818151),
	new google.maps.LatLng(43.321907,-91.819761),
	new google.maps.LatLng(43.321907,-91.819761)
	];
	desc = 'Info about Roselin Woods here.';
	category = 'sustainability';
	polygonCoords[count++] = new Array('Roselin Woods',Roselin, desc, category);

var shlSavannah =
	[
	new google.maps.LatLng(43.314835,-91.803233),
	new google.maps.LatLng(43.314632,-91.803394),
	new google.maps.LatLng(43.314441,-91.803206),
	new google.maps.LatLng(43.314289,-91.803045),
	new google.maps.LatLng(43.314363,-91.802616),
	new google.maps.LatLng(43.314894,-91.803029)
	];
	desc = 'Info about Sampson Hoffland Oak Savannah  lot here.';
	category = 'sustainability';
	polygonCoords[count++] = new Array('Sampson Hoffland Oak Savannaht',shlSavannah, desc, category);
	
var carlsonStadium = 
	[
	new google.maps.LatLng(43.313118,-91.807348),
	new google.maps.LatLng(43.313032,-91.807079),
	new google.maps.LatLng(43.312782,-91.806768),
	new google.maps.LatLng(43.31176,-91.806833),
	new google.maps.LatLng(43.311486,-91.807026),
	new google.maps.LatLng(43.311424,-91.807294),
	new google.maps.LatLng(43.311541,-91.807809),
	new google.maps.LatLng(43.311744,-91.807916),
	new google.maps.LatLng(43.312353,-91.807895),
	new google.maps.LatLng(43.312712,-91.807884),
	new google.maps.LatLng(43.312899,-91.807841),
	new google.maps.LatLng(43.31304,-91.807648)
	];
	desc = 'Info about Carlson Stadium here.';
	category = 'recreational';
	polygonCoords[count++] = new Array('Carlson Stadium',carlsonStadium, desc, category);

var tennisCourts = 
	[
	new google.maps.LatLng(43.312934,-91.807986),
	new google.maps.LatLng(43.31261,-91.807997),
	new google.maps.LatLng(43.312614,-91.808259),
	new google.maps.LatLng(43.312267,-91.80827),
	new google.maps.LatLng(43.312318,-91.809257),
	new google.maps.LatLng(43.312657,-91.80923),
	new google.maps.LatLng(43.312669,-91.809391),
	new google.maps.LatLng(43.312993,-91.809375),
	new google.maps.LatLng(43.312934,-91.807986)
	];
	desc = 'Info about Tennis Courts here.';
	category = 'recreational';
	polygonCoords[count++] = new Array('Tennis Courts',tennisCourts, desc, category);

var baseballField = 
	[
	new google.maps.LatLng(43.314792,-91.808351),
	new google.maps.LatLng(43.314546,-91.808372),
	new google.maps.LatLng(43.313828,-91.808512),
	new google.maps.LatLng(43.313785,-91.808828),
	new google.maps.LatLng(43.313785,-91.809091),
	new google.maps.LatLng(43.313848,-91.809322),
	new google.maps.LatLng(43.313953,-91.809563),
	new google.maps.LatLng(43.314,-91.809665),
	new google.maps.LatLng(43.314191,-91.809783),
	new google.maps.LatLng(43.314328,-91.809837),
	new google.maps.LatLng(43.31448,-91.809837),
	new google.maps.LatLng(43.314652,-91.809794),
	new google.maps.LatLng(43.314792,-91.809762),
	new google.maps.LatLng(43.314855,-91.808919),
	new google.maps.LatLng(43.314847,-91.808426),
	new google.maps.LatLng(43.314792,-91.808351)	
	];
	desc = 'Info about Baseball Field here.';
	category = 'recreational';
	polygonCoords[count++] = new Array('Baseball Field', baseballField, desc, category);

