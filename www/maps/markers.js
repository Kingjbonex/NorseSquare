//Use this for finding coordinates
//http://www.birdtheme.org/useful/googletool.html

var markerCoords = [];
var desc = '';
var count=0;
var category = '';
//Point Code 
//**Some point may be changed into polygons (ie. LEED Standards > Valders Hall of Science). 

//Sustainable Transportation

//Bike services
var StudentBikeShop 
= new google.maps.LatLng(43.313485,-91.806897);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/transportation/bikeshop" target="_blank">Spokes Student Bike Shop</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('StudentBikeShop', StudentBikeShop, desc, category);


var WinterBikeStorage  = new google.maps.LatLng(43.317845,-91.802477);
desc = '<html> <body> <a href=" https:\/\/www.luther.edu/sustainability/transportation/bikestorage/">Bike Storage</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('WinterBikeStorage', WinterBikeStorage, desc, category);

var BikeShareBikes = new google.maps.LatLng(43.312134,-91.802981);
desc = '<html> <body> <a href="http:\/\/lis.luther.edu/node/4694" target="_blank">Bike Share</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('BikeShareBikes', BikeShareBikes, desc, category);

var RegentsChangingRoom = new google.maps.LatLng(43.313485,-91.807154);
desc = 'Info about Changing Rooms and Showers Here';
markerCoords[count++] = new Array('RegentsChangingRoom', RegentsChangingRoom, desc, category);

var SamHoffChangingRooms =
new google.maps.LatLng(43.313973,-91.803517);
desc = 'Info about Changing Rooms and Showers Here';
markerCoords[count++] = new Array('SamHoffChangingRooms', SamHoffChangingRooms, desc, category);

//Shuttles and Car Sharing 

var UHaulCarShareCars
 = new google.maps.LatLng(43.313008,-91.801523);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/transportation/ucarshare/">U Car Share</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> <a href="https:\/\/www.luther.edu/sustainability/transportation/ucarshare/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/303895.jpg" style="width: 350px; height: 159px; " /></a></p> </body> </html>';
markerCoords[count++] = new Array('UHaulCarShareCars', UHaulCarShareCars, desc, category);

var ShoppingShuttle = new google.maps.LatLng(43.312237,-91.805957);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/transportation/shoppingshuttle/" target="_blank">Shopping Shuttle</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('ShoppingShuttle', ShoppingShuttle, desc, category);

var BreakShuttles  = new google.maps.LatLng(43.312243,-91.805965);
desc = '<html> <head> <title></title> </head> <body> <p> &nbsp;</p> <div> &lt;a href=&quot;https:\/\/www.luther.edu/sustainability/transportation/shuttles/&quot; target=&quot;_blank&quot;&gt;Shuttle Services&lt;/a&gt;&nbsp;</div> <div> &nbsp;</div> <div> &lt;p&gt;If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.&lt;/p&gt;</div> <div> <a href="https:\/\/www.luther.edu/sustainability/transportation/shuttles/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/352556.png" style="width: 350px; height: 189px; " /></a></div> </body> </html>';
markerCoords[count++] = new Array('BreakShuttles', BreakShuttles, desc, category);





//Alternative Fuel Vehicles
var HybridParking =
new google.maps.LatLng(43.313865,-91.802689);
desc = 'Info about Hybrid Parking  here';
markerCoords[count++] = new Array('HybridParking', HybridParking, desc, category);

var AlternativeFuel =
new google.maps.LatLng(43.309599,-91.807264);
desc = 'Info about Alternative Fuel Vehicles here';
markerCoords[count++] = new Array('AlternativeFuel', AlternativeFuel, desc, category);

//Energy 
//	Renewable Energy
//		Solar Photovoltaic
var SustainabilityHouse = new google.maps.LatLng(43.312907,-91.801119);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/energy/solarpower/" target="_blank">Solar Power at Luther</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('SustainabilityHouse', SustainabilityHouse, desc, category);

//BAKER VILLAGE SOLAR FIELD 
var BVSolarField =
new google.maps.LatLng(43.321041,-91.808496);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/energy/solarpower/" target="_blank">Solar Power at Luther</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('BVSolarField', BVSolarField, desc, category);


//		Wind Energy
var WindTurbine = new google.maps.LatLng(43.307036,-91.820426);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/windturbine/">Wind Turbine</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/windturbine/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/373847.jpg" style="width: 300px; height: 201px; " /></a></p> </body> </html>';
markerCoords[count++] = new Array('WindTurbine', WindTurbine, desc, category);

//	BioDiesel
var BioDieselProduction = new google.maps.LatLng(43.309523,-91.807197);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/biodiesel/" target="_blank">Bio Diesel</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/biodiesel/" target="_blank"><img alt="" src="https:\/\/www.luther.edu/reason/images/279824.jpg" style="width: 350px; height: 142px; " /></a></p> </body> </html>';
markerCoords[count++] = new Array('BioDieselProduction', BioDieselProduction, desc, category);

//		Geothermal Energy 
////USE THE POLYGON DATA****

var BakerVillage = new google.maps.LatLng(43.31713,-91.801211);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/geothermal/" target="_blank">Geothermal</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('BakerVillage', BakerVillage, desc, category);

//USE THE POLYGON DATA****
var CenterFortheArts = new google.maps.LatLng(43.310464,-91.802369);
desc = '<html> <body> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/geothermal/" target="_blank">Geothermal</a> <p>If you set the target attribute to "_blank", the link will open in a new browser window/tab.</p> </body> </html>';
markerCoords[count++] = new Array('CenterFortheArts', CenterFortheArts, desc, category);

//	LEED
//		LEED Certified
//USE THE POLYGON DATA****
var SampsonHofflandLabratories  = new google.maps.LatLng(43.314117,-91.803389);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/leed/" target="_blank">LEED Certified</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/leed/" target="_blank"><img alt="" src="https:\/\/reason.luther.edu/reason/images/267586_tn.jpg" style="width: 125px; height: 100px; " /></a></p> </body> </html>';
markerCoords[count++] = new Array('SampsonHofflandLabratories', SampsonHofflandLabratories, desc, category);

//		LEED Standars
//USE THE POLYGON DATA****
var ValdersHallofScience
 = new google.maps.LatLng(43.313602,-91.804097);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/leed/" target="_blank">LEED Certified</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> <a href="https:\/\/www.luther.edu/sustainability/energy/greenbuildings/leed/" target="_blank"><img alt="" src="https:\/\/reason.luther.edu/reason/images/267586_tn.jpg" style="width: 125px; height: 100px; " /></a></p> </body> </html>';
markerCoords[count++] = new Array('ValdersHallofScience', ValdersHallofScience, desc, category);



//USE THE POLYGON DATA****
	var NorbyHouse = new google.maps.LatLng(43.308332,-91.807036);
desc = 'Info about LEED Standards here';
markerCoords[count++] = new Array('NorbyHouse', NorbyHouse, desc, category);

//USE THE POLYGON DATA****
var MillerHall
 = new google.maps.LatLng(43.315749,-91.804719);
desc = 'Info about LEED Standards here';
markerCoords[count++] = new Array('MillerHall', MillerHall, desc, category);

//Conservation
//		Vending Machines delampeD
//	Low Flow Shower Heads
//	All halls
//			Energy Misers
//				Vending machines 
//			Cold Water Washing
//				All halls

			
		//Land Use
//	Storm Run Off Reduction
//USE THE POLYGON DATA****
var PermeableParkingLot
 = new google.maps.LatLng(43.309382,-91.806242);
desc = '<html> <head> <title></title> </head> <body> <p> <a href="https:\/\/www.luther.edu/sustainability/landuse/permeableparkinglot/" target="_blank">Permeable Parking</a></p> <p> If you set the target attribute to &quot;_blank&quot;, the link will open in a new browser window/tab.</p> <p> &nbsp;</p> </body> </html>';
markerCoords[count++] = new Array('PermeableParkingLot', PermeableParkingLot, desc, category);

var RainGardens 
 = new google.maps.LatLng(43.314492,-91.802847);
desc = 'Info about Rain Gardens here';
markerCoords[count++] = new Array('RainGardens', RainGardens, desc, category);

var RainBarrel
 = new google.maps.LatLng(43.309716,-91.807106);
desc = 'Info about Rain Barrel here';
markerCoords[count++] = new Array('RainBarrel', RainBarrel, desc, category);

//USE THE POLYGON DATA****
var LindemanPond
 = new google.maps.LatLng(43.316748,-91.805835);
desc = 'Info about Lindeman Pond here';
markerCoords[count++] = new Array('LindemanPond', LindemanPond, desc, category);

//	Edible Landscaping 
var ValdersHallofScienceEdibleLandscaping 
 = new google.maps.LatLng(43.313336,-91.804209);
desc = 'Info about Edible Landscaping  here';
markerCoords[count++] = new Array('ValdersHallofScienceEdibleLandscaping', ValdersHallofScienceEdibleLandscaping, desc, category);

var YlvisakerHallEdibleLandscaping  = new google.maps.LatLng(43.314847,-91.805003);
desc = 'Info about Edible Landscaping  here';
markerCoords[count++] = new Array('YlvisakerHallEdibleLandscaping', YlvisakerHallEdibleLandscaping, desc, category);
	
//Natural Areas
//		5 Mile Loop ***POLYLINE
var fiveMileLoop = new google.maps.LatLng(43.31229,-91.805921);
desc = 'Info about 5 mile loop here'
markerCoords[count++] = new Array('fiveMileLoop', fiveMileLoop, desc, category);

	//USE THE POLYGON DATA****
//SHL Oak Savannah
var shlOakSavannah = new google.maps.LatLng(43.314621,-91.803056);
desc = 'Info about shl oak savannah here'
markerCoords[count++] = new Array('shlOakSavannah', shlOakSavannah, desc, category);
//Anderson Prairie
var andersonPrairie = new google.maps.LatLng(43.315468,-91.79944);
desc = 'Info about anderson prairie here'
markerCoords[count++] = new Array('andersonPrairie', andersonPrairie, desc, category);
//Hickory Ridge Woods
var hickoryRidgeWoods = new google.maps.LatLng(43.318715,-91.797638);
desc = 'Info about hickory ridge woods here'
markerCoords[count++] = new Array('hickoryRidgeWoods', hickoryRidgeWoods, desc, category);
//Rosilen Woodlands
var rosilenWoodlands = new google.maps.LatLng(43.323929,-91.819267);
desc = 'Info about rosilen woodlands here'
markerCoords[count++] = new Array('rosilenWoodlands', rosilenWoodlands, desc, category)
//Lindeman Pond
var lindemanPond = new google.maps.LatLng(43.316685,-91.805964);
desc = 'Info about lindeman Pond here'
markerCoords[count++] = new Array('lindemanPond', lindemanPond, desc, category)
//Upper Iowa River
var upperIowaRiver = new google.maps.LatLng(43.312407,-91.811199);
desc = 'Info about upper iowa river here'
markerCoords[count++] = new Array('upperIowaRiver', upperIowaRiver, desc, category)
//Gateway Prairie
var gatewayPrairie = new google.maps.LatLng(43.317154,-91.812272);
desc = 'Info about upper iowa river here'
markerCoords[count++] = new Array('gatewayPrairie', gatewayPrairie, desc, category)
//Lionberger Environmental Preserve
//Freeport Marsh

//FOOD
//	Gardens 
//		Production Gardens 
var Produtiongarden= new google.maps.LatLng(43.320783,-91.821209);
desc = 'Info about Production Garden  here';
markerCoords[count++] = new Array('Produtiongarden', Produtiongarden, desc, category);

var Produtiongarden = new google.maps.LatLng(43.320666,-91.819589);
desc = 'Info about Production Garden  here';
markerCoords[count++] = new Array('Produtiongarden', Produtiongarden, desc, category);

//Raised Bed Gardens 
var NorbyHouseRaisedBedGarden = new google.maps.LatLng(43.308231,-91.806964);
desc = 'Info about Raised Bed Gardens  here';
markerCoords[count++] = new Array('NorbyHouseRaisedBedGarden', NorbyHouseRaisedBedGarden, desc, category);

var SustainabilityHouse  = new google.maps.LatLng(43.312917,-91.800776);
desc = 'Info about Raised Bed Gardens  here';
markerCoords[count++] = new Array('SustainabilityHouse', SustainabilityHouse, desc, category);


//Community Gardens 
var CommunityGarden = new google.maps.LatLng(43.321369,-91.819487);
desc = 'Info about Community Garden  here';
markerCoords[count++] = new Array('CommunityGarden', CommunityGarden, desc, category);

//Dining Services 
var LocalFoodPurchasing  = new google.maps.LatLng(43.312302,-91.806382);
desc = 'Info about Local Food Purchasing  here';
markerCoords[count++] = new Array('LocalFoodPurchasing', LocalFoodPurchasing, desc, category);

var TrayLessCaf
= new google.maps.LatLng(43.312208,-91.806446);
desc = 'Info about Tray-less Caf   here';
markerCoords[count++] = new Array('TrayLessCaf', TrayLessCaf, desc, category);
//	Edible Landscaping (AGAIN)

//WASTE REDUCTION AND RECYCLING
//	Composting 
//		Personal Compost Program
var CompostProgram =
new google.maps.LatLng(43.311994,-91.806221);
desc = 'Info about Personal Compost Program  here';
markerCoords[count++] = new Array('CompostProgram', CompostProgram, desc, category);

//			Union (martys)
//		Vermicomposting
var ValVermincomposting =
new google.maps.LatLng(43.313602,-91.803649);
desc = 'Info about Vermicomposting here';
markerCoords[count++] = new Array('ValVermincomposting', ValVermincomposting, desc, category);

var SamVermicomposting =
new google.maps.LatLng(43.313986,-91.803426);
desc = 'Info about Vermicomposting here';
markerCoords[count++] = new Array('SamVermicomposting', SamVermicomposting, desc, category);

var AdmissionVermicomposting =
new google.maps.LatLng(43.312351,-91.806039);
desc = 'Info about Vermicomposting here';
markerCoords[count++] = new Array('AdmissionVermicomposting', AdmissionVermicomposting, desc, category);


var PubVermicomposting =
new google.maps.LatLng(43.31208,-91.806398);
desc = 'Info about Vermicomposting here';
markerCoords[count++] = new Array('PubVermicomposting', PubVermicomposting, desc, category);

//	(Valders, Samp, Admissions, Publications) In Addisiton Students can check them out. 
var CompostPile
 = new google.maps.LatLng(43.321935,-91.819482);
desc = 'Info about Compost Pile  here';
markerCoords[count++] = new Array('CompostPile', CompostPile, desc, category);

var OneotaMarket 
 = new google.maps.LatLng(43.312532,-91.806382);
desc = 'Info about Oneota Market  here';
markerCoords[count++] = new Array('OneotaMarket', OneotaMarket, desc, category);

var Cafeteria 
 = new google.maps.LatLng(43.31238,-91.80643);
desc = 'Info about Cafeteria here';
markerCoords[count++] = new Array('Cafeteria', Cafeteria, desc, category);

//Reuse
var TrashForTreasures
 = new google.maps.LatLng(43.314425,-91.806929);
desc = 'Info about Trash For Treasures  here';	
markerCoords[count++] = new Array('TrashForTreasures', TrashForTreasures, desc, category);


//USE THE POLYGON DATA****
var BargainBarn
 = new google.maps.LatLng(43.317911,-91.802697);
desc = 'Info about Bargain Barn here';	
markerCoords[count++] = new Array('BargainBarn', BargainBarn, desc, category);

//OFFICE SUPPLY REUSE
var SupplyReuse =
new google.maps.LatLng(43.313567,-91.803595);
desc = 'Info about Office Supply Reuse  here';	
markerCoords[count++] = new Array('SupplyReuse', SupplyReuse, desc, category);

//RECYCLING
//	EVENT RECYCLING
var EventRe=
new google.maps.LatLng(43.313623,-91.803659);
desc = 'Info about Event Recycling here';
markerCoords[count++] = new Array('EventRe', EventRe, desc, category);


var PackingPeanutandPillowRecycling
 = new google.maps.LatLng(43.313965,-91.803566);
desc = 'Info about Packing Peanut and Pillow Recycling  here';	
markerCoords[count++] = new Array('PackingPeanutandPillowRecycling', PackingPeanutandPillowRecycling, desc, category);

//CFL Bulb Recylcing 
var CFLBULB =
new google.maps.LatLng(43.313596,-91.803627);
desc = 'Info about CFL Bulb Recycling  here';
markerCoords[count++] = new Array('CFLBULB', CFLBULB, desc, category)


//RECHARGEABLE BATTERY RECYCING 
var Rechargable =
new google.maps.LatLng(43.313561,-91.803595);
desc = 'Info about Recharable Battery Recycling  here';
markerCoords[count++] = new Array('Rechargable', Rechargable, desc, category)

//	BOOK RECYCYING 
var OlinBook=
new google.maps.LatLng(43.313052,-91.803077);
desc = 'Info about Book Recycling  here';
markerCoords[count++] = new Array('OlinBook', OlinBook, desc, category)
//	REDEEMABLES 
//		Sorint
var RedeemableSort=
new google.maps.LatLng(43.312827,-91.800583);
desc = 'Info about Redeemable Sorting  here';
markerCoords[count++] = new Array('RedeemableSort', RedeemableSort, desc, category)

//		Collection
var RedeemableCollection=
new google.maps.LatLng(43.309511,-91.807079);
desc = 'Info about Redeemable Collection here';
markerCoords[count++] = new Array('RedeemableCollection', RedeemableCollection, desc, category)









	


