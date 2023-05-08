import { Track } from "./Track.js"
class TrackRenderer {}

export function setupMonaco() {
	//const points = [[41,244],[47,230],[53,216],[59,201],[65,188],[73,175],[82,162],[91,150],[101,135],[109,124],[118,110],[127,99],[137,88],[151,77],[164,68],[177,57],[189,45],[200,31],[217,25],[233,28],[248,33],[268,39],[285,47],[298,54],[314,63],[329,70],[345,78],[359,87],[373,91],[388,101],[401,108],[415,114],[428,119],[442,122],[458,124],[477,123],[494,118],[508,112],[520,100],[526,85],[532,70],[541,58],[555,50],[572,47],[588,47],[604,47],[621,47],[637,47],[653,47],[668,47],[683,47],[698,53],[695,69],[688,84],[677,97],[663,107],[650,118],[638,131],[629,145],[627,162],[637,175],[654,172],[668,165],[674,150],[681,135],[693,122],[707,121],[720,129],[729,139],[734,154],[736,172],[736,190],[731,205],[722,219],[707,224],[690,230],[675,233],[659,233],[645,234],[631,236],[615,237],[600,237],[587,235],[573,234],[560,232],[547,231],[531,229],[514,227],[498,223],[484,218],[468,214],[452,209],[438,202],[424,195],[407,184],[395,172],[381,168],[368,178],[352,181],[337,178],[322,170],[317,154],[318,138],[314,122],[299,116],[284,102],[270,94],[249,89],[235,88],[213,90],[199,99],[185,111],[174,123],[180,137],[193,146],[206,155],[209,171],[202,182],[188,191],[176,202],[164,219],[150,223],[135,219],[119,213],[104,217],[99,234],[104,250],[114,264],[114,280],[101,285],[84,287],[71,285],[57,282],[41,275]]
	//const points = [[125,127],[133,118],[141,109],[150,101],[158,92],[166,85],[174,77],[182,70],[192,63],[203,57],[212,51],[223,44],[231,36],[239,27],[248,19],[259,15],[271,15],[282,19],[292,26],[302,32],[310,39],[320,47],[331,51],[343,56],[353,61],[363,66],[375,71],[385,76],[395,82],[405,86],[416,93],[426,99],[435,106],[444,110],[454,115],[465,118],[476,120],[487,121],[498,121],[510,119],[521,114],[532,107],[542,100],[551,91],[559,82],[566,72],[575,63],[582,55],[591,48],[602,43],[613,39],[624,36],[637,35],[648,34],[659,33],[671,32],[682,32],[694,32],[705,36],[713,43],[712,55],[706,65],[695,74],[685,79],[675,83],[664,87],[653,91],[643,98],[633,106],[628,117],[631,127],[641,131],[653,132],[665,128],[675,122],[684,115],[693,109],[704,102],[715,98],[727,98],[735,105],[737,116],[737,127],[730,137],[721,145],[714,153],[703,160],[694,167],[684,174],[673,179],[663,185],[652,191],[641,195],[629,199],[619,202],[608,205],[596,207],[585,209],[573,210],[561,210],[551,210],[538,209],[527,209],[515,207],[505,205],[493,202],[482,200],[472,195],[461,190],[451,188],[440,181],[429,176],[417,177],[405,178],[395,174],[385,168],[376,160],[370,148],[364,139],[355,132],[344,125],[334,119],[322,114],[311,110],[301,105],[290,101],[279,98],[267,97],[256,96],[244,97],[232,99],[220,103],[210,108],[199,113],[189,120],[181,129],[177,141],[180,151],[187,161],[186,171],[178,181],[170,191],[162,200],[154,207],[142,211],[130,213],[120,219],[111,227],[103,233],[96,242],[89,251],[85,262],[84,275],[80,285],[70,290],[57,290],[47,285],[36,277],[29,269],[26,257],[28,246],[34,238],[45,233],[54,229],[63,222],[70,211],[77,202],[84,191],[90,182],[95,171],[100,161]]
	const points = [[143,112],[150,104],[159,94],[167,86],[176,78],[185,71],[196,64],[206,56],[217,49],[228,44],[238,37],[246,28],[255,22],[266,16],[277,15],[289,18],[300,25],[309,30],[318,36],[329,43],[339,49],[350,54],[360,59],[372,64],[383,68],[395,73],[405,77],[418,81],[428,86],[439,91],[450,97],[460,103],[471,108],[481,113],[494,116],[506,117],[519,117],[531,115],[542,113],[552,108],[561,101],[571,94],[580,85],[588,77],[595,68],[602,59],[610,50],[620,43],[631,37],[643,33],[654,31],[666,29],[679,28],[692,26],[703,25],[716,25],[727,27],[738,35],[739,46],[734,58],[726,67],[715,74],[703,79],[693,83],[682,87],[671,92],[659,99],[652,108],[653,119],[663,127],[674,128],[685,124],[697,120],[708,114],[718,107],[727,100],[738,94],[750,91],[760,98],[765,108],[765,120],[759,130],[751,138],[741,146],[730,152],[720,158],[710,165],[699,171],[690,177],[678,183],[668,188],[657,192],[646,196],[634,199],[621,201],[609,203],[597,204],[584,205],[572,206],[559,206],[547,206],[536,204],[523,202],[510,200],[499,196],[488,190],[476,183],[455,171],[440,167],[429,172],[418,168],[408,162],[398,156],[395,142],[375,131],[366,124],[356,120],[347,114],[335,109],[325,103],[315,99],[302,96],[291,93],[278,92],[266,92],[254,95],[241,99],[230,104],[220,108],[208,114],[198,120],[189,127],[182,138],[185,147],[194,158],[190,167],[182,176],[175,185],[168,194],[160,201],[149,206],[138,207],[125,208],[116,215],[107,221],[100,231],[93,241],[88,252],[86,263],[84,272],[75,278],[63,280],[51,279],[42,274],[33,268],[28,257],[28,246],[32,235],[42,227],[52,221],[60,217],[69,208],[77,199],[83,188],[90,175],[97,164],[103,155],[111,145],[119,138]]
	const width = 22
	const background = "img/Monaco.png"
	const track = new Track(points, width)
	const trackRenderer = new TrackRenderer(track, background)
	return track
}

export function setupBaku() {
	const points = [[551,234],[562,234],[575,234],[588,234],[599,234],[610,234],[622,234],[634,233],[644,232],[656,232],[667,232],[678,232],[690,232],[702,232],[715,232],[725,225],[728,215],[728,204],[727,193],[726,181],[726,170],[726,158],[726,146],[726,135],[726,123],[725,112],[720,104],[709,102],[697,100],[686,100],[675,100],[664,100],[653,100],[642,100],[631,100],[619,102],[607,104],[597,105],[587,105],[576,105],[562,105],[551,105],[540,105],[528,105],[517,106],[505,106],[495,107],[482,108],[470,110],[458,110],[447,112],[439,119],[434,130],[432,141],[429,152],[425,162],[416,170],[405,173],[393,173],[381,173],[369,174],[360,180],[354,190],[347,200],[337,203],[326,204],[316,204],[303,204],[292,204],[281,205],[269,206],[257,206],[245,206],[232,206],[220,205],[209,204],[197,198],[193,186],[192,175],[191,164],[189,152],[187,141],[185,130],[176,124],[166,121],[155,116],[153,106],[152,94],[153,81],[149,72],[137,67],[126,66],[112,64],[102,62],[90,60],[80,59],[68,58],[56,61],[49,67],[42,78],[37,89],[34,100],[31,112],[30,124],[28,135],[28,146],[29,158],[31,170],[32,181],[34,192],[38,204],[41,216],[45,228],[50,240],[57,251],[66,257],[77,260],[90,263],[101,263],[112,260],[122,255],[132,248],[143,243],[153,239],[165,238],[176,240],[186,245],[197,250],[208,253],[218,254],[230,256],[241,256],[253,255],[264,252],[275,248],[285,242],[295,237],[307,234],[319,232],[330,232],[341,232],[355,232],[367,232],[379,232],[390,232],[402,231],[414,231],[425,231],[437,231]]
	const width = 20
	// const background = "Monaco.png"
	const track = new Track(points, width)
	const trackRenderer = new TrackRenderer(track)
	return track
}

export function setupJeddah() {
	const points = [[466,57],[453,62],[442,67],[432,71],[422,75],[410,79],[398,84],[388,89],[377,94],[367,99],[356,104],[351,112],[357,123],[361,135],[353,142],[341,145],[331,146],[317,146],[305,142],[295,138],[283,134],[273,133],[261,133],[252,137],[244,145],[238,154],[235,166],[235,177],[231,188],[222,195],[210,195],[200,190],[188,185],[177,182],[165,184],[158,194],[156,204],[150,212],[140,215],[128,212],[118,208],[108,203],[95,198],[85,201],[77,210],[69,214],[60,217],[48,220],[37,224],[24,229],[12,233],[4,242],[5,253],[13,262],[24,269],[34,274],[44,278],[55,280],[66,279],[77,277],[87,272],[95,264],[103,256],[116,249],[127,247],[139,247],[150,247],[161,251],[172,255],[181,259],[191,260],[205,260],[215,255],[223,248],[232,249],[245,254],[256,257],[267,258],[276,256],[284,248],[288,236],[292,225],[296,216],[302,206],[308,199],[319,193],[330,190],[344,188],[354,186],[365,183],[377,182],[385,176],[390,166],[393,152],[395,141],[400,134],[411,129],[422,127],[435,126],[446,124],[457,122],[468,118],[482,113],[492,109],[503,104],[512,100],[521,96],[534,89],[542,82],[553,75],[561,68],[566,57],[569,46],[571,35],[573,24],[570,13],[557,11],[547,13],[538,19],[528,24],[519,30],[509,38]]
	const width = 23
	// const background = "Monaco.png"
	const track = new Track(points, width)
	const trackRenderer = new TrackRenderer(track)
	return track
}


export function setupMonza() {
	const points =[[457,254],[444,254],[433,254],[422,254],[412,254],[401,254],[390,255],[381,256],[371,256],[358,256],[347,256],[337,256],[325,256],[311,256],[303,256],[291,254],[279,254],[268,254],[257,254],[246,254],[233,252],[225,246],[222,235],[217,226],[206,227],[195,234],[185,241],[174,250],[162,254],[150,254],[137,254],[125,250],[114,243],[107,234],[102,224],[100,214],[97,202],[96,191],[94,179],[92,168],[88,155],[83,144],[80,133],[75,123],[69,113],[58,109],[47,107],[41,97],[36,86],[33,75],[32,64],[32,52],[36,42],[47,35],[58,31],[68,29],[81,27],[92,25],[103,22],[115,21],[125,24],[132,32],[137,43],[141,53],[147,63],[154,71],[163,78],[171,84],[180,90],[190,96],[198,101],[208,107],[216,112],[228,119],[239,126],[248,133],[259,140],[270,147],[279,150],[290,150],[300,150],[310,155],[315,163],[319,174],[325,183],[334,189],[346,192],[357,192],[370,192],[382,192],[394,193],[403,195],[414,196],[424,197],[434,198],[448,198],[461,198],[473,198],[483,199],[495,199],[506,199],[518,200],[528,200],[539,200],[551,200],[563,201],[575,207],[583,215],[585,227],[584,238],[576,246],[566,251],[556,255],[547,256],[536,258],[525,259],[514,259],[503,258]]
	const width = 25
	// const background = "Monaco.png"
	const track = new Track(points, width)
	const trackRenderer = new TrackRenderer(track)
	return track
}

export function setupSpecial() {
	const points =[
		[65,263],[53,262],[39,261],[30,255],[26,246],[25,235],[24,225],[24,216],[24,207],[24,197],[24,186],[24,176],[23,165],[22,154],[20,143],[19,132],[19,120],[19,111],[19,100],[19,88],[18,79],[17,68],[17,58],[15,46],[14,37],[20,26],[30,21],[41,20],[53,20],[61,20],[71,20],[81,19],[94,19],[104,19],[113,21],[123,24],[132,32],[135,43],[134,54],[126,60],[115,63],[105,64],[94,64],[84,67],[74,75],[69,86],[69,97],[73,108],[80,116],[93,116],[109,114],[118,120],[120,131],[120,141],[112,149],[102,151],[90,152],[77,154],[69,162],[68,174],[69,184],[72,195],[84,199],[95,199],[105,197],[116,193],[124,191],[135,192],[149,195],[154,204],[157,216],[168,218],[179,218],[191,214],[200,207],[204,197],[204,186],[202,174],[199,163],[195,151],[193,140],[190,131],[186,119],[184,108],[182,97],[181,84],[181,74],[181,64],[181,49],[181,38],[182,28],[190,22],[199,18],[208,15],[218,13],[229,11],[238,9],[250,9],[263,11],[271,15],[275,25],[275,37],[269,47],[260,52],[249,55],[238,58],[228,64],[225,75],[227,87],[232,97],[244,98],[253,96],[262,94],[275,94],[282,102],[285,115],[284,125],[275,130],[265,132],[252,134],[239,136],[234,145],[233,155],[235,168],[237,182],[238,192],[240,208],[245,217],[256,220],[269,221],[279,221],[291,217],[299,212],[302,200],[303,188],[306,177],[315,169],[324,162],[333,154],[341,147],[349,139],[356,133],[365,126],[373,118],[379,109],[384,95],[384,85],[382,75],[375,64],[365,60],[355,60],[344,63],[333,68],[321,69],[314,62],[312,50],[314,40],[320,34],[326,30],[337,24],[347,20],[359,17],[369,14],[380,12],[390,11],[402,11],[414,14],[419,22],[424,30],[427,43],[428,53],[428,67],[428,76],[428,86],[426,97],[423,109],[419,120],[413,130],[406,140],[399,149],[390,157],[382,164],[372,171],[369,176],[383,176],[393,176],[404,175],[415,174],[427,172],
		[437,171],[444,178],[444,190],[442,200],[448,208],[461,207],[472,204],[474,195],[471,182],[470,171],[477,164],[489,162],[502,161],[512,156],[519,149],[520,134],[516,124],[507,117],[497,116],[485,116],[475,117],[467,109],[462,99],[463,87],[467,78],[477,75],[488,72],[495,64],[494,52],[487,42],[474,35],[471,24],[473,12],[481,6],[493,3],[506,2],[517,1],[529,1],[539,3],[551,8],[557,16],[561,25],[563,37],[563,47],[559,58],[555,67],[550,78],[547,88],[546,99],[549,108],[553,114],[562,122],[571,131],[578,142],[581,153],[581,165],[581,176],[580,188],[576,201],[571,211],[565,221],[559,230],[550,237],[541,242],[530,246],[520,249],[508,251],[496,253],[486,254],[476,254],[465,254],[454,254],[443,254],[430,254],[418,253],[407,251],[395,251],[385,251],[374,251],[362,252],[351,254],[339,255],[328,257],[316,261],[305,263],[295,263],[284,264],[270,264],[257,263],[246,261],[235,260],[224,258],[214,257],[202,255],[189,253],[178,252],[168,252],[154,252],[143,253],[132,256]
	]
	const width = 19
	// const background = "Monaco.png"
	const track = new Track(points, width)
	const trackRenderer = new TrackRenderer(track)
	return track
}