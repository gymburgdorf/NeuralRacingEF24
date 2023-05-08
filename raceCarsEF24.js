import {CarAI} from "./CarAI.js"
import {NeuralNetwork} from "./NeuralNetwork.js"

const nntristan = {
	"structure":[6,12,16,4,2],
	"weights":[6.006394750329112,1.3996092552926005,2.314148075701998,-14.067144654595014,-11.737847598054952,6.115208947453811,-16.1151243750247,5.6848690163537015,-17.96577196910125,20.38633968418883,-26.638850756668486,-30.981294355582325,-7.626105041972264,21.791134720022356,-19.62509494111645,-21.030160897988907,-16.56315814313535,-5.900110648616795,-10.373110373374416,-9.421651068937061,11.606678484720218,8.94647457358212,-10.744039407293421,10.272577528130805,10.721094277096475,-15.019612258970916,-19.496033996050723,
		-3.576342933397192,-5.840937910760431,15.593210217934228,-4.252423700888031,-15.399991339445961,3.688589761742848,10.277704275409285,10.826846693450436,-12.513980789692601,-9.39481142424968,16.39130673898214,-9.648347196608794,-3.6458810482895383,-1.7980884303477307,17.50306312225843,11.00772858335458,-23.772802666222614,-13.99016577060146,-23.11585188056909,-2.2559121685202252,15.973547829826183,-4.514032111886759,-0.3702478723982672,5.321458008329074,4.6446542411294915,0.46598513125608654,15.597216218831468,-6.588427404540792,15.636948930560413,21.90620514547421,7.169855030145933,3.2745130610968998,1.044623197583338,-2.7500585278985974,9.62941575092871,-14.482634854493288,-18.520931154131755,-7.985217739821936,-1.6219727967721098,6.254846418715033,
		0.13315134749918145,17.41551798427669,2.26448010634049,2.838936245699582,5.110145363193382,-2.6088875478052422,21.710871232918503,23.482894048227315,-2.212702071665767,-0.46656108782115113,16.610549017397275,13.169613178098688,19.623475244793486,26.05560913403569,-9.23873778707002,-12.686253442121178,-9.530531822657439,-7.195053943606839,-13.680433014074403,-6.000691145075373,-9.158801951008053,16.385231723046175,5.551454071163377,14.54114784490879,8.465047468495063,5.522813433496352,4.256880081981395,-8.809938144366981,-1.9426715829899877,12.00427258336882,6.3275604668458065,-4.042062841011481,2.490037808400522,6.924220050846955,4.484784033125604,-27.207571332661537,-2.6066055899824856,-1.3846173947581517,-18.21334308010459,-1.9377074862670944,9.161765915250868,
		-24.852956092975674,-8.087950791919177,8.275901881177786,7.2761117903407015,-8.651286480785158,-3.2907104842491686,-1.0694587377412488,-2.8394903770481053,-20.932244449832897,19.77741129660843,-4.850337901747939,-14.948570628228268,3.2063590416122967,-4.556492202913867,-3.7514698226586534,6.360204046303088,-11.331669068046345,-9.198480270090238,-1.5278006389494063,17.877429134457053,12.181501727420377,-1.1384004217706385,-12.050598676277465,-3.696500677992891,-22.44952082495986,-10.806012363434812,0.20974741147340153,-4.343430511051327,14.764382775745787,-3.368037155925817,19.6338334740705,-0.17889921348698196,24.822907403259684,-4.541636272143572,26.620611932511167,-12.059626225487067,7.914488402319849,-21.208126833263293,17.06183606998272,-7.805796751843493,
		-20.21404939283428,-19.249865112532213,6.235125075904531,10.997766248856585,-18.903055551791216,-13.114193093086092,15.514853179207712,1.0078973836071812,-14.234305531823368,-13.759558206093505,11.0261193945322,19.035896300587396,9.336456947188015,2.8624449867901003,-6.787322814143985,-4.128843189378217,-2.568115134804418,-15.390822438604415,28.748235020949192,12.043980435913161,-4.718954761802608,4.739767910293924,-10.927671501002035,-8.259743947547904,-27.946815749264747,-5.184020765991819,-8.212102115494416,-10.277710106576158,-5.074265804786317,4.399777615416555,23.136706101750953,14.303602116964273,-3.6028437477278685,4.508148767125438,-8.881453976739447,-3.0120596805477553,26.654522934989988,-17.715777552772387,15.212528340675338,8.732557365976202,15.93782428420417,
		14.401207977041713,-1.6175056242867591,2.5398973702137613,-6.302703849855078,-0.6977356628306687,-19.454907825765435,-5.759033014738284,-17.086310800383586,-0.7594925812859712,-15.747802962661083,4.9521865264371385,9.098120222604066,-10.923348024398388,-0.09006971780917367,-9.637355207789383,7.786656992685601,-6.009197974988142,16.133827511014946,12.389839118217049,1.4278037224378106,23.933243569644297,6.62613759016739,8.326771277102566,-12.910998298237594,-1.5252766589914364,-20.5142632108101,-1.2471840304366852,-9.369405249140561,-4.437355165498512,-9.651473694807024,-13.508002783994694,-13.579526388279113,-3.3496819516911165,-24.206467178240995,-25.38887069694528,6.917830735689689,-4.992697170945991,-8.392130975154757,14.751103743878692,9.643227585836055,-23.709601025436097,
		27.134840585699287,17.9599064672301,4.650615375045708,21.380062791444214,-12.766345560023117,-16.19697066593683,12.479137510079795,10.033594377863256,6.364866321666363,8.768444882389373,9.61006341842736,-15.099180099708317,31.125364454435772,7.702431633483327,4.493559520339836,-23.336713379385635,-1.7287498406444026,-12.959311300380012,-1.785769196328025,-13.565815309831558,-9.691887176186293,1.0355204954598134,-4.830017893172192,-11.515398180117478,7.334225625007492,-15.908128615991437,26.69755246342112,11.732544174147625,5.3758243390480125,-15.502105035926023,-15.501559985734922,17.29915156717639,-5.439867373332371,20.445071265649535,7.132859641511064,-21.78077026848656,-16.46124076944543,12.593401385103219,4.903109041176444,10.972239249975674,18.49156221422363,25.42624978719702,
		11.377345202825795,-8.303389385660516,-19.0131049084304,2.7021715616616095,-24.005112229147024,6.131327963306904,-4.747185210364173,-14.185246261272262,-4.9275902659300925,-18.475021758555613,-3.330174515739495,-12.113061294964037,-15.12360131636468,-7.421260363251258,24.63281238481314,-15.185850962657335,-5.3118620871915425,9.649789994678057,-17.446208264004735,13.01844757662615,-6.858070871035472,14.822308327040185,-17.65439005785408,-2.3034351762166647,-20.12613098658467,-10.747995025648112,-1.2533518665209769,18.216655566582464,-3.149651154589571,-4.579522939895036,24.669048902548806,5.998689855929154,-8.001156843394492,19.22685151974227,-18.363302110177084,-16.49007099488711,20.562609056316475,2.8518181545363364,-2.462904838045311,-3.32849365954926,-16.96718825206029,-7.033917312389182,9.759144072971893,-20.788758628272323,9.587030981308127,-7.445257411281328,9.228737986471831,-27.974670453090983,-3.6516147539562294,20.549310210799423,10.299323599665222,-9.460197755888666,18.497848792601925,-8.582711211390226,-26.20663511454457,-1.6313416687151676,-15.520984644515028,14.783570137530303,-3.500707234833575,1.1539998879362983,-4.099700640977039,7.534990770664525,1.2951087017666436,-23.50770902049362],
	"biases":[-6.666057725011679,27.020831002582955,25.05374883191356,-13.573137978455037,-0.1131445022224822,-9.106037028024598,3.8915806562997393,29.222523219988286,-23.744830727061085,-3.457016052753155,-0.20907010288979005,0.21344230311411713,3.3818617043466777,12.337304745785989,4.926141069639261,-7.312859841217612,-9.861676901273142,1.9594381880735618,16.926209652109545,4.214601746441086,12.605711042264456,9.37031840003186,3.9092269422939037,27.0805048846446,-4.594353804312186,6.233660973451663,-18.210919571941044,-4.050933441750915,12.88550805370851,-1.6023608503230111,4.551093615247902,-16.56534245105468,-8.947839494711175,-6.391507202315131,-18.564179120792318,-11.008978506298265,0.9214920399397596,-10.874494054454008,18.555226355373854,2.075913173107608]
}

export function carOfTristan(track) {
	const car = new CarAI(track)
	car.nn = new NeuralNetwork(6)
	car.nn.addLayer(12)
	car.nn.addLayer(16)
	car.nn.addLayer(4)
	car.nn.addLayer(2)
	car.nn.weights = nntristan.weights
	car.nn.biases = nntristan.biases
	return car
}

const nnsmilan = {"weights":[288.3024003774003,-112.8852635142635,84.26322766122767,-81.20308547008548,-320.52719913419907,209.72921933621933,-11.367707403707405,295.1493805083805,-125.38943500943503,-245.89519580419577,76.34956332556335,-16.083982572982567,-26.543467754467752,138.41993650793648,-140.37257930957935,166.44886557886554,185.38828993228992,-173.0375088245088,-245.2548769008769,200.76728182928187,72.24021001221001,2.998479409479441,-7.925550560550544,-152.3720772560772,-100.05427561327564,198.93539704739712,-112.79684437784438,-83.99771828171826,361.9257824397823,-71.75806626706627,43.24587579087581,-4.26097236097236,-222.8558208458208,-25.937517815517815,182.41505860805862,-368.8420965700965,-270.5163301143301,-35.94416217116214,-155.31694583194584,374.7117744477744,-34.45876023976023,175.4431838161838,21.296967032967032,-162.02597557997552,172.60393317793321,165.80915639915645,-118.82827261627263,141.94210478410477,-207.30726973026975,18.057662781662792,-257.6405752025752,50.76273537573539,-3.3403291153291113,-34.49040004440004,68.26229836829837,-87.88177367077364,-3.23332001332002,59.02064391164391,152.53812054612055,-113.55362670662667,250.4529324009323,127.33338972138974,-71.70251615051616,157.4957358197358,-187.87543722943724,136.43610178710188,251.25319802419799,-63.10194383394385,
	-143.28665867465855,-129.80251426351433,34.35014574314577,303.47642723942727,-279.4667546897548,173.18829292929294,-111.89065256965259,-10.818261960261946,132.18757997557998,178.32256887556892,-328.66712420912415,-126.43649306249308,-100.49521534021534,-224.25504395604398,281.9990024420025,-284.2884609834609,137.54749062049063,37.09857165057164,168.09046275946275,-208.67930291930287,-102.0889345099345,222.10441758241762,-232.27372194472193,249.22097557997557,-229.11070229770232,149.9003625263626,-156.96232678432676,185.41438983238987,217.6420944610945,263.6837262737262,-102.84653402153405,-242.34446941946942,-43.46755577755575,43.76228238428241,-107.28801665001664,74.21475357975358,-111.47783238983237,-21.785107670107678,148.3603095793096,161.2073633033633,-281.59389588189583,59.218144633144675,-18.920864468864483,284.88541303141307,81.19204562104564,-138.44132345432345,41.64106260406261,-54.06909723609723,-110.03600421800425,135.47030680430677,-120.92499211899217,-218.96813031413032,-40.59373637473641,-13.815143190143175,-322.69319946719946,-196.03146209346204,-92.45669186369189,-180.68977988677992,-249.8687015207015,-20.658534576534613,-41.96617615717614,-102.34948595848597,-124.98400876900875,-250.68170163170157,-52.417932955933,97.14835664335668,-135.05055722055727,-74.73997358197357,59.9245668775669,
	237.3070253080253,-179.14200510600514,13.092303918303912,194.35819769119772,120.06201309801308,-71.78681929181924,204.70173371073372,-217.9070044400044,92.61450260850259,-155.89632489732497,-125.31670562770564,-92.34813375513373,-94.43718059718061,-7.198580641580616,-108.68956676656673,50.89302375402378,-122.48576634476633,194.5706552336553,-239.00105139305145,63.355987123987155,200.31989310689315,-18.93190709290708,-56.09690775890778,-132.00283238983235,-180.98847774447776,176.22413752913752,-249.1246230436231,-24.4847851037851,126.937177045177,-45.00431157731157,-33.173934287934294,115.8940493950494,60.23113497613498,147.47716794316798,26.38312998112999,-127.42257609057611,104.20417116217119,34.026357642357624,-250.09013863913862,-45.4266636696637,163.930728049728,-176.25439049839048,178.2665409035409,77.6408787878788,-49.156324009324045,-30.68870962370965,-147.4239092019092,-97.51325940725941,-64.35349972249973,7.570166056166055,-91.82236219336218,257.46297757797765,170.12155122655125,-30.460555888555866,-80.19861094461096,-205.3665874125874,-35.58913653013653,-119.20687190587186,-179.33230025530028,74.30424053724056,55.45714097014099,-225.15517637917634,-68.07851381951384,-3.770248085248089,-256.28822288822283,44.06553768453769,6.268388278388293,50.553490731490726,156.5528451548451,-186.92649383949387,235.639406926407],
	"biases":[178.3269933399933,-362.780612942613,-105.47362848262846,-188.64173903873905,218.6187443667444,-292.76844200244204,-31.10973959373963,-38.247998445998434,95.49872016872021,29.587659895659918,-261.69632767232764,290.7010465090464,-217.14650482850485,-130.31041036741038,40.55691486291486,-162.06322266622269,-54.85813209013206,-277.5382880452881,-246.83944943944937,-27.72606204906204,184.13950327450326,152.58599145299146,-253.59767532467532,207.55332922632923,-56.50002086802084,-243.0963373293373,257.4559191919192,-1.7398420468420324,-157.89312753912756,56.715598290598265,79.23157020757026,89.19087634587636,-177.00380541680542,61.299307248307215]
}

export function carOfSmilan(track) {
	const car = new CarAI(track)
	car.nn = new NeuralNetwork(6)
	car.nn.addLayer(8)
	car.nn.addLayer(8)
	car.nn.addLayer(8)
	car.nn.addLayer(4)
	car.nn.weights = nnsmilan.weights
	car.nn.biases = nnsmilan.biases
	return car
}

const nnjohannes = {"structure":[6,4,2],"weights":[-2.9950880100291855,-2.6613934888640762,15.0581289886584,24.733651010753945,1.2107405437699574,-5.060320992732757,6.3266448943213645,-2.3927649311472856,-15.518784161916518,2.556910334763277,2.5236219613719615,4.492333357818652,-10.181224378562618,7.236383464574637,8.363851398601398,-11.71568388963977,-8.64192312099665,10.556670887935594,-15.43000436818084,-11.266928933811291,2.1022336731895535,-11.387709961607019,7.5733635335253,13.682095987345987,3.950644482968014,-19.18776233080645,5.484519906564024,-6.451644478070948,6.220452018569665,-2.8859490509490504,-13.53859101192925,15.595247042173515],"biases":[9.764499094043213,-7.350694197958903,2.9069823754676705,0.5688481567452144,-14.23847840884606,5.128217419835067,2.555638875830052,-7.681010420951596,-1.4219613278878005,8.348101599381012,-13.805519284636931,-1.8897413958590437]}

export function carOfJohannes(track) {
	const car = new CarAI(track)
	car.nn = new NeuralNetwork(6)
	car.nn.addLayer(4)
	car.nn.addLayer(2)
	car.nn.weights = nnjohannes.weights
	car.nn.biases = nnjohannes.biases
	return car
}