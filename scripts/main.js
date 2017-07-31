var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var CountryData = [
 {
   "Country Name": "Arab World",
   "10 year GDP Average": "2.16E+12",
   "Average Arable Land %(10 yrs)": "4.266813215",
   "Average rural population (10 yrs)": "154123166.7",
   "Land area(Sq Km)": 13623921,
   "Average % of Forest Cover (10 yrs)": "3.164410804",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.820829026",
   "continent": "Asia"
 },
 {
   "Country Name": "Caribbean small states",
   "10 year GDP Average": "61668919150",
   "Average Arable Land %(10 yrs)": "1.825327899",
   "Average rural population (10 yrs)": "4004926.545",
   "Land area(Sq Km)": 404850,
   "Average % of Forest Cover (10 yrs)": "85.29072047",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.17914177",
   "continent": "North America"
 },
 {
   "Country Name": "Central Europe and the Baltics",
   "10 year GDP Average": "1.29E+12",
   "Average Arable Land %(10 yrs)": "34.03779539",
   "Average rural population (10 yrs)": "39700319",
   "Land area(Sq Km)": 1104182,
   "Average % of Forest Cover (10 yrs)": "33.67025969",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.727658171",
   "continent": "Europe"
 },
 {
   "Country Name": "Early-demographic dividend",
   "10 year GDP Average": "8.08E+12",
   "Average Arable Land %(10 yrs)": "12.99743842",
   "Average rural population (10 yrs)": "1679439876",
   "Land area(Sq Km)": 33109107,
   "Average % of Forest Cover (10 yrs)": "22.30994954",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.85143381",
   "continent": "Asia"
 },
 {
   "Country Name": "East Asia & Pacific",
   "10 year GDP Average": "1.68E+13",
   "Average Arable Land %(10 yrs)": "9.501421611",
   "Average rural population (10 yrs)": "1051723911",
   "Land area(Sq Km)": 24387020.3,
   "Average % of Forest Cover (10 yrs)": "26.19094025",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.744054479",
   "continent": "Asia"
 },
 {
   "Country Name": "East Asia & Pacific (excluding high income)",
   "10 year GDP Average": "8.20E+12",
   "Average Arable Land %(10 yrs)": "11.22536631",
   "Average rural population (10 yrs)": "1026907125",
   "Land area(Sq Km)": 15914380.8,
   "Average % of Forest Cover (10 yrs)": "29.54249258",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.58899352",
   "continent": "Asia"
 },
 {
   "Country Name": "East Asia & Pacific (IDA & IBRD countries)",
   "10 year GDP Average": "8.18E+12",
   "Average Arable Land %(10 yrs)": "11.16115227",
   "Average rural population (10 yrs)": "1017167361",
   "Land area(Sq Km)": 15793790.8,
   "Average % of Forest Cover (10 yrs)": "29.40822032",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.58899352",
   "continent": "Asia"
 },
 {
   "Country Name": "Euro area",
   "10 year GDP Average": "1.26E+13",
   "Average Arable Land %(10 yrs)": "24.56496837",
   "Average rural population (10 yrs)": "84399622.18",
   "Land area(Sq Km)": 2678201,
   "Average % of Forest Cover (10 yrs)": "37.73791159",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.690624098",
   "continent": "Europe"
 },
 {
   "Country Name": "Europe & Central Asia",
   "10 year GDP Average": "2.11E+13",
   "Average Arable Land %(10 yrs)": "12.31145215",
   "Average rural population (10 yrs)": "266116658.7",
   "Land area(Sq Km)": 27447511,
   "Average % of Forest Cover (10 yrs)": "37.87179905",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.266893094",
   "continent": "Europe"
 },
 {
   "Country Name": "Europe & Central Asia (excluding high income)",
   "10 year GDP Average": "3.08E+12",
   "Average Arable Land %(10 yrs)": "10.5870345",
   "Average rural population (10 yrs)": "141917435.1",
   "Land area(Sq Km)": 22627977,
   "Average % of Forest Cover (10 yrs)": "38.77132937",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.692874893",
   "continent": "Europe"
 },
 {
   "Country Name": "Europe & Central Asia (IDA & IBRD countries)",
   "10 year GDP Average": "3.60E+12",
   "Average Arable Land %(10 yrs)": "10.95888005",
   "Average rural population (10 yrs)": "158641494.2",
   "Land area(Sq Km)": 22990267,
   "Average % of Forest Cover (10 yrs)": "38.64923365",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.147342559",
   "continent": "Europe"
 },
 {
   "Country Name": "European Union",
   "10 year GDP Average": "1.72E+13",
   "Average Arable Land %(10 yrs)": "25.71209277",
   "Average rural population (10 yrs)": "132361039.6",
   "Land area(Sq Km)": 4241144,
   "Average % of Forest Cover (10 yrs)": "37.51968796",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.662444478",
   "continent": "Europe"
 },
 {
   "Country Name": "Fragile and conflict affected situations",
   "10 year GDP Average": "5.94E+11",
   "Average Arable Land %(10 yrs)": "6.035642675",
   "Average rural population (10 yrs)": "263140313.3",
   "Land area(Sq Km)": 14824168,
   "Average % of Forest Cover (10 yrs)": "22.89885863",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "21.61417077",
   "continent": "Asia"
 },
 {
   "Country Name": "Heavily indebted poor countries (HIPC)",
   "10 year GDP Average": "4.66E+11",
   "Average Arable Land %(10 yrs)": "7.915906576",
   "Average rural population (10 yrs)": "425591303.2",
   "Land area(Sq Km)": 19754791,
   "Average % of Forest Cover (10 yrs)": "28.80875763",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "28.11483025",
   "continent": "Asia"
 },
 {
   "Country Name": "High income",
   "10 year GDP Average": "4.54E+13",
   "Average Arable Land %(10 yrs)": "10.28892116",
   "Average rural population (10 yrs)": "226778638.5",
   "Land area(Sq Km)": 35088855.4,
   "Average % of Forest Cover (10 yrs)": "28.71542801",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.459014998",
   "continent": "Asia"
 },
 {
   "Country Name": "IBRD only",
   "10 year GDP Average": "1.94E+13",
   "Average Arable Land %(10 yrs)": "11.31554975",
   "Average rural population (10 yrs)": "2132324490",
   "Land area(Sq Km)": 67948473.8,
   "Average % of Forest Cover (10 yrs)": "33.55371882",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "8.688776906",
   "continent": "Asia"
 },
 {
   "Country Name": "IDA & IBRD total",
   "10 year GDP Average": "2.10E+13",
   "Average Arable Land %(10 yrs)": "10.9568401",
   "Average rural population (10 yrs)": "3125938204",
   "Land area(Sq Km)": 95724208.8,
   "Average % of Forest Cover (10 yrs)": "31.5378595",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.771623851",
   "continent": "Asia"
 },
 {
   "Country Name": "IDA blend",
   "10 year GDP Average": "8.31E+11",
   "Average Arable Land %(10 yrs)": "13.86072995",
   "Average rural population (10 yrs)": "327366230.5",
   "Land area(Sq Km)": 6824490,
   "Average % of Forest Cover (10 yrs)": "28.12068582",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "23.39815252",
   "continent": "Asia"
 },
 {
   "Country Name": "IDA only",
   "10 year GDP Average": "7.76E+11",
   "Average Arable Land %(10 yrs)": "8.84696585",
   "Average rural population (10 yrs)": "666247483.5",
   "Land area(Sq Km)": 20952200,
   "Average % of Forest Cover (10 yrs)": "26.11098084",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.29722864",
   "continent": "Asia"
 },
 {
   "Country Name": "IDA total",
   "10 year GDP Average": "1.61E+12",
   "Average Arable Land %(10 yrs)": "10.07926098",
   "Average rural population (10 yrs)": "993613713.9",
   "Land area(Sq Km)": 27776650,
   "Average % of Forest Cover (10 yrs)": "26.60495285",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "25.29702498",
   "continent": "Asia"
 },
 {
   "Country Name": "Late-demographic dividend",
   "10 year GDP Average": "1.37E+13",
   "Average Arable Land %(10 yrs)": "9.174977473",
   "Average rural population (10 yrs)": "976588371.9",
   "Land area(Sq Km)": 44535319.8,
   "Average % of Forest Cover (10 yrs)": "38.88060319",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.5172099",
   "continent": "Asia"
 },
 {
   "Country Name": "Latin America & Caribbean",
   "10 year GDP Average": "4.95E+12",
   "Average Arable Land %(10 yrs)": "8.227753876",
   "Average rural population (10 yrs)": "128751303",
   "Land area(Sq Km)": 20042207.4,
   "Average % of Forest Cover (10 yrs)": "46.90489971",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.386914538",
   "continent": "South America"
 },
 {
   "Country Name": "Latin America & Caribbean (excluding high income)",
   "10 year GDP Average": "4.55E+12",
   "Average Arable Land %(10 yrs)": "8.457085969",
   "Average rural population (10 yrs)": "124732957.4",
   "Land area(Sq Km)": 19096113,
   "Average % of Forest Cover (10 yrs)": "48.20040396",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.518679766",
   "continent": "South America"
 },
 {
   "Country Name": "Latin America & the Caribbean (IDA & IBRD countries)",
   "10 year GDP Average": "4.76E+12",
   "Average Arable Land %(10 yrs)": "8.105646172",
   "Average rural population (10 yrs)": "125526503.8",
   "Land area(Sq Km)": 19913632,
   "Average % of Forest Cover (10 yrs)": "47.00274963",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.471600145",
   "continent": "South America"
 },
 {
   "Country Name": "Least developed countries: UN classification",
   "10 year GDP Average": "6.74E+11",
   "Average Arable Land %(10 yrs)": "8.272151845",
   "Average rural population (10 yrs)": "602395843.3",
   "Land area(Sq Km)": 20167053,
   "Average % of Forest Cover (10 yrs)": "27.61797487",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "28.0627087",
   "continent": "Asia"
 },
 {
   "Country Name": "Low & middle income",
   "10 year GDP Average": "2.03E+13",
   "Average Arable Land %(10 yrs)": "10.97469932",
   "Average rural population (10 yrs)": "3119107780",
   "Land area(Sq Km)": 94670126.8,
   "Average % of Forest Cover (10 yrs)": "31.66536746",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.01438703",
   "continent": "Asia"
 },
 {
   "Country Name": "Low income",
   "10 year GDP Average": "2.92E+11",
   "Average Arable Land %(10 yrs)": "8.993189868",
   "Average rural population (10 yrs)": "397804907.5",
   "Land area(Sq Km)": 13382221,
   "Average % of Forest Cover (10 yrs)": "28.16490982",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "32.55699253",
   "continent": "Asia"
 },
 {
   "Country Name": "Lower middle income",
   "10 year GDP Average": "4.29E+12",
   "Average Arable Land %(10 yrs)": "18.21341273",
   "Average rural population (10 yrs)": "1716053318",
   "Land area(Sq Km)": 21754614,
   "Average % of Forest Cover (10 yrs)": "24.97526889",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "17.70607788",
   "continent": "Asia"
 },
 {
   "Country Name": "Middle East & North Africa",
   "10 year GDP Average": "2.74E+12",
   "Average Arable Land %(10 yrs)": "4.713953204",
   "Average rural population (10 yrs)": "144433489.9",
   "Land area(Sq Km)": 11238740,
   "Average % of Forest Cover (10 yrs)": "2.041475085",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.152930726",
   "continent": "Africa"
 },
 {
   "Country Name": "Middle East & North Africa (excluding high income)",
   "10 year GDP Average": "1.27E+12",
   "Average Arable Land %(10 yrs)": "5.700232951",
   "Average rural population (10 yrs)": "136559222.4",
   "Land area(Sq Km)": 8643800,
   "Average % of Forest Cover (10 yrs)": "2.485460498",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.200557077",
   "continent": "Africa"
 },
 {
   "Country Name": "Middle East & North Africa (IDA & IBRD countries)",
   "10 year GDP Average": "1.26E+12",
   "Average Arable Land %(10 yrs)": "5.696462",
   "Average rural population (10 yrs)": "135569970.7",
   "Land area(Sq Km)": 8637780,
   "Average % of Forest Cover (10 yrs)": "2.486131224",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.225385452",
   "continent": "Africa"
 },
 {
   "Country Name": "Middle income",
   "10 year GDP Average": "2.00E+13",
   "Average Arable Land %(10 yrs)": "11.3010051",
   "Average rural population (10 yrs)": "2721302872",
   "Land area(Sq Km)": 81288875.8,
   "Average % of Forest Cover (10 yrs)": "32.24173987",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.717228121",
   "continent": "Asia"
 },
 {
   "Country Name": "North America",
   "10 year GDP Average": "1.70E+13",
   "Average Arable Land %(10 yrs)": "11.09490198",
   "Average rural population (10 yrs)": "65828180.73",
   "Land area(Sq Km)": 18255480,
   "Average % of Forest Cover (10 yrs)": "35.91840426",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.236198241",
   "continent": "North America"
 },
 {
   "Country Name": "Not classified",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "#DIV/0!",
   "Land area(Sq Km)": 0,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Asia"
 },
 {
   "Country Name": "OECD members",
   "10 year GDP Average": "4.47E+13",
   "Average Arable Land %(10 yrs)": "11.52665525",
   "Average rural population (10 yrs)": "261172420.1",
   "Land area(Sq Km)": 34419488,
   "Average % of Forest Cover (10 yrs)": "31.20898913",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.623150176",
   "continent": "Asia"
 },
 {
   "Country Name": "Other small states",
   "10 year GDP Average": "3.30E+11",
   "Average Arable Land %(10 yrs)": "2.04956893",
   "Average rural population (10 yrs)": "11430946.73",
   "Land area(Sq Km)": 2030709,
   "Average % of Forest Cover (10 yrs)": "26.09650749",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.623016064",
   "continent": "Asia"
 },
 {
   "Country Name": "Pacific island small states",
   "10 year GDP Average": "7008653770",
   "Average Arable Land %(10 yrs)": "3.709898675",
   "Average rural population (10 yrs)": "1401544.545",
   "Land area(Sq Km)": 64200,
   "Average % of Forest Cover (10 yrs)": "61.74352875",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "15.78065741",
   "continent": "Oceania"
 },
 {
   "Country Name": "Post-demographic dividend",
   "10 year GDP Average": "4.25E+13",
   "Average Arable Land %(10 yrs)": "12.16495424",
   "Average rural population (10 yrs)": "217895760.3",
   "Land area(Sq Km)": 31482667,
   "Average % of Forest Cover (10 yrs)": "31.54955164",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.458869013",
   "continent": "Asia"
 },
 {
   "Country Name": "Pre-demographic dividend",
   "10 year GDP Average": "9.70E+11",
   "Average Arable Land %(10 yrs)": "8.789568627",
   "Average rural population (10 yrs)": "471539786.5",
   "Land area(Sq Km)": 20167611,
   "Average % of Forest Cover (10 yrs)": "26.78913739",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.31894708",
   "continent": "Asia"
 },
 {
   "Country Name": "Small states",
   "10 year GDP Average": "3.98E+11",
   "Average Arable Land %(10 yrs)": "2.055868063",
   "Average rural population (10 yrs)": "16837417.82",
   "Land area(Sq Km)": 2499759,
   "Average % of Forest Cover (10 yrs)": "36.5988921",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.081924905",
   "continent": "Asia"
 },
 {
   "Country Name": "South Asia",
   "10 year GDP Average": "1.92E+12",
   "Average Arable Land %(10 yrs)": "43.29775879",
   "Average rural population (10 yrs)": "1122375624",
   "Land area(Sq Km)": 4771577,
   "Average % of Forest Cover (10 yrs)": "17.26580313",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.95529416",
   "continent": "Asia"
 },
 {
   "Country Name": "South Asia (IDA & IBRD)",
   "10 year GDP Average": "1.92E+12",
   "Average Arable Land %(10 yrs)": "43.29775879",
   "Average rural population (10 yrs)": "1122375624",
   "Land area(Sq Km)": 4771577,
   "Average % of Forest Cover (10 yrs)": "17.26580313",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.95529416",
   "continent": "Asia"
 },
 {
   "Country Name": "Sub-Saharan Africa",
   "10 year GDP Average": "1.27E+12",
   "Average Arable Land %(10 yrs)": "8.611917262",
   "Average rural population (10 yrs)": "566657250.8",
   "Land area(Sq Km)": 23618361,
   "Average % of Forest Cover (10 yrs)": "26.5114021",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "19.04785275",
   "continent": "Africa"
 },
 {
   "Country Name": "Sub-Saharan Africa (excluding high income)",
   "10 year GDP Average": "1.27E+12",
   "Average Arable Land %(10 yrs)": "8.612058661",
   "Average rural population (10 yrs)": "566615415.8",
   "Land area(Sq Km)": 23617901,
   "Average % of Forest Cover (10 yrs)": "26.51019644",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "19.06128438",
   "continent": "Africa"
 },
 {
   "Country Name": "Sub-Saharan Africa (IDA & IBRD countries)",
   "10 year GDP Average": "1.27E+12",
   "Average Arable Land %(10 yrs)": "8.611917262",
   "Average rural population (10 yrs)": "566657250.8",
   "Land area(Sq Km)": 23618361,
   "Average % of Forest Cover (10 yrs)": "26.5114021",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "19.04785275",
   "continent": "Africa"
 },
 {
   "Country Name": "Upper middle income",
   "10 year GDP Average": "1.57E+13",
   "Average Arable Land %(10 yrs)": "8.775625726",
   "Average rural population (10 yrs)": "1005249555",
   "Land area(Sq Km)": 59534441.8,
   "Average % of Forest Cover (10 yrs)": "34.89588993",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.498501955",
   "continent": "Asia"
 },
 {
   "Country Name": "World",
   "10 year GDP Average": "6.58E+13",
   "Average Arable Land %(10 yrs)": "10.78927561",
   "Average rural population (10 yrs)": "3345886418",
   "Land area(Sq Km)": 129758982.2,
   "Average % of Forest Cover (10 yrs)": "30.95225224",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.004229773",
   "continent": "Asia"
 },
 {
   "Country Name": "Afghanistan",
   "10 year GDP Average": "14516852848",
   "Average Arable Land %(10 yrs)": "11.9336458",
   "Average rural population (10 yrs)": "21217143.73",
   "Land area(Sq Km)": 652860,
   "Average % of Forest Cover (10 yrs)": "2.067824648",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "26.59055143",
   "continent": "Asia"
 },
 {
   "Country Name": "Albania",
   "10 year GDP Average": "11574059426",
   "Average Arable Land %(10 yrs)": "21.96642336",
   "Average rural population (10 yrs)": "1404556.545",
   "Land area(Sq Km)": 27400,
   "Average % of Forest Cover (10 yrs)": "28.3450564",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "20.99945462",
   "continent": "Europe"
 },
 {
   "Country Name": "Algeria",
   "10 year GDP Average": "1.66E+11",
   "Average Arable Land %(10 yrs)": "3.145099669",
   "Average rural population (10 yrs)": "11756118.55",
   "Land area(Sq Km)": 2381741,
   "Average % of Forest Cover (10 yrs)": "0.76590294",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.341438847",
   "continent": "Africa"
 },
 {
   "Country Name": "American Samoa",
   "10 year GDP Average": "588363636.4",
   "Average Arable Land %(10 yrs)": "15.28",
   "Average rural population (10 yrs)": "6990.363636",
   "Land area(Sq Km)": 200,
   "Average % of Forest Cover (10 yrs)": "88.55909091",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Andorra",
   "10 year GDP Average": "3512859907",
   "Average Arable Land %(10 yrs)": "5.29787234",
   "Average rural population (10 yrs)": "9785",
   "Land area(Sq Km)": 470,
   "Average % of Forest Cover (10 yrs)": "34.04255319",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.485235256",
   "continent": "Europe"
 },
 {
   "Country Name": "Angola",
   "10 year GDP Average": "86040327726",
   "Average Arable Land %(10 yrs)": "3.264618593",
   "Average rural population (10 yrs)": "12714885.91",
   "Land area(Sq Km)": 1246700,
   "Average % of Forest Cover (10 yrs)": "46.90783669",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Africa"
 },
 {
   "Country Name": "Antigua and Barbuda",
   "10 year GDP Average": "1193320505",
   "Average Arable Land %(10 yrs)": "9.090909091",
   "Average rural population (10 yrs)": "64288.18182",
   "Land area(Sq Km)": 440,
   "Average % of Forest Cover (10 yrs)": "22.27272727",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.024260549",
   "continent": "North America"
 },
 {
   "Country Name": "Argentina",
   "10 year GDP Average": "4.16E+11",
   "Average Arable Land %(10 yrs)": "13.4890141",
   "Average rural population (10 yrs)": "3727478",
   "Land area(Sq Km)": 2736690,
   "Average % of Forest Cover (10 yrs)": "10.45968272",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.848101832",
   "continent": "South America"
 },
 {
   "Country Name": "Armenia",
   "10 year GDP Average": "9462097983",
   "Average Arable Land %(10 yrs)": "15.81173165",
   "Average rural population (10 yrs)": "1089938.909",
   "Land area(Sq Km)": 28470,
   "Average % of Forest Cover (10 yrs)": "11.64543219",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "20.12893854",
   "continent": "Asia"
 },
 {
   "Country Name": "Aruba",
   "10 year GDP Average": "2531324022",
   "Average Arable Land %(10 yrs)": "11.11111111",
   "Average rural population (10 yrs)": "57986.90909",
   "Land area(Sq Km)": 180,
   "Average % of Forest Cover (10 yrs)": "2.333333333",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.46388854",
   "continent": "North America"
 },
 {
   "Country Name": "Australia",
   "10 year GDP Average": "1.15E+12",
   "Average Arable Land %(10 yrs)": "6.005844604",
   "Average rural population (10 yrs)": "2478971.909",
   "Land area(Sq Km)": 7682300,
   "Average % of Forest Cover (10 yrs)": "16.25023519",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.564625146",
   "continent": "Oceania"
 },
 {
   "Country Name": "Austria",
   "10 year GDP Average": "3.94E+11",
   "Average Arable Land %(10 yrs)": "16.53708571",
   "Average rural population (10 yrs)": "2864178.818",
   "Land area(Sq Km)": 82580,
   "Average % of Forest Cover (10 yrs)": "46.75405111",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.45297648",
   "continent": "Europe"
 },
 {
   "Country Name": "Azerbaijan",
   "10 year GDP Average": "49983057414",
   "Average Arable Land %(10 yrs)": "22.73657024",
   "Average rural population (10 yrs)": "4199409.909",
   "Land area(Sq Km)": 82663,
   "Average % of Forest Cover (10 yrs)": "12.19977185",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.542405683",
   "continent": "Asia"
 },
 {
   "Country Name": "Bahamas, The",
   "10 year GDP Average": "8204499245",
   "Average Arable Land %(10 yrs)": "0.779220779",
   "Average rural population (10 yrs)": "62739.27273",
   "Land area(Sq Km)": 10010,
   "Average % of Forest Cover (10 yrs)": "51.44855145",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.159399835",
   "continent": "North America"
 },
 {
   "Country Name": "Bahrain",
   "10 year GDP Average": "26104096059",
   "Average Arable Land %(10 yrs)": "1.963843242",
   "Average rural population (10 yrs)": "136477.3636",
   "Land area(Sq Km)": 771,
   "Average % of Forest Cover (10 yrs)": "0.690552865",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.292404921",
   "continent": "Asia"
 },
 {
   "Country Name": "Bangladesh",
   "10 year GDP Average": "1.19E+11",
   "Average Arable Land %(10 yrs)": "59.68502727",
   "Average rural population (10 yrs)": "105386768.2",
   "Land area(Sq Km)": 130170,
   "Average % of Forest Cover (10 yrs)": "11.07782131",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "17.65141281",
   "continent": "Asia"
 },
 {
   "Country Name": "Barbados",
   "10 year GDP Average": "4380945004",
   "Average Arable Land %(10 yrs)": "28.13953488",
   "Average rural population (10 yrs)": "189630.4545",
   "Land area(Sq Km)": 430,
   "Average % of Forest Cover (10 yrs)": "14.65116279",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.679013905",
   "continent": "North America"
 },
 {
   "Country Name": "Belarus",
   "10 year GDP Average": "54980910142",
   "Average Arable Land %(10 yrs)": "27.35061637",
   "Average rural population (10 yrs)": "2421564.636",
   "Land area(Sq Km)": 202910,
   "Average % of Forest Cover (10 yrs)": "42.06400475",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.426117852",
   "continent": "Europe"
 },
 {
   "Country Name": "Belgium",
   "10 year GDP Average": "4.81E+11",
   "Average Arable Land %(10 yrs)": "27.42073976",
   "Average rural population (10 yrs)": "257288.5455",
   "Land area(Sq Km)": 30280,
   "Average % of Forest Cover (10 yrs)": "22.45346463",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.8304542",
   "continent": "Europe"
 },
 {
   "Country Name": "Belize",
   "10 year GDP Average": "1444368924",
   "Average Arable Land %(10 yrs)": "3.231039018",
   "Average rural population (10 yrs)": "176817.9091",
   "Land area(Sq Km)": 22810,
   "Average % of Forest Cover (10 yrs)": "60.99972102",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "14.14127598",
   "continent": "North America"
 },
 {
   "Country Name": "Benin",
   "10 year GDP Average": "7294331695",
   "Average Arable Land %(10 yrs)": "23.03121674",
   "Average rural population (10 yrs)": "5518811.818",
   "Land area(Sq Km)": 112760,
   "Average % of Forest Cover (10 yrs)": "40.44874069",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "26.16411469",
   "continent": "Africa"
 },
 {
   "Country Name": "Bermuda",
   "10 year GDP Average": "5611135667",
   "Average Arable Land %(10 yrs)": "6.6",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 50,
   "Average % of Forest Cover (10 yrs)": "20",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.811334921",
   "continent": "North America"
 },
 {
   "Country Name": "Bhutan",
   "10 year GDP Average": "1498205140",
   "Average Arable Land %(10 yrs)": "3.032767532",
   "Average rural population (10 yrs)": "466880.6364",
   "Land area(Sq Km)": 38117,
   "Average % of Forest Cover (10 yrs)": "70.97334284",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.72839348",
   "continent": "Asia"
 },
 {
   "Country Name": "Bolivia",
   "10 year GDP Average": "21407823036",
   "Average Arable Land %(10 yrs)": "3.920659097",
   "Average rural population (10 yrs)": "3326851.091",
   "Land area(Sq Km)": 1083300,
   "Average % of Forest Cover (10 yrs)": "52.15872376",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "13.29271054",
   "continent": "South America"
 },
 {
   "Country Name": "Bosnia and Herzegovina",
   "10 year GDP Average": "16585333996",
   "Average Arable Land %(10 yrs)": "19.75",
   "Average rural population (10 yrs)": "2324007.182",
   "Land area(Sq Km)": 51200,
   "Average % of Forest Cover (10 yrs)": "42.67578125",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "8.587436043",
   "continent": "Europe"
 },
 {
   "Country Name": "Botswana",
   "10 year GDP Average": "12768170416",
   "Average Arable Land %(10 yrs)": "0.487357295",
   "Average rural population (10 yrs)": "897854",
   "Land area(Sq Km)": 566730,
   "Average % of Forest Cover (10 yrs)": "20.06791754",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.598527326",
   "continent": "Africa"
 },
 {
   "Country Name": "Brazil",
   "10 year GDP Average": "1.89E+12",
   "Average Arable Land %(10 yrs)": "8.602884135",
   "Average rural population (10 yrs)": "31092095.55",
   "Land area(Sq Km)": 8358140,
   "Average % of Forest Cover (10 yrs)": "59.74693804",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.142535567",
   "continent": "South America"
 },
 {
   "Country Name": "British Virgin Islands",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "6.666666667",
   "Average rural population (10 yrs)": "14884",
   "Land area(Sq Km)": 150,
   "Average % of Forest Cover (10 yrs)": "24.26666667",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Brunei Darussalam",
   "10 year GDP Average": "14345800185",
   "Average Arable Land %(10 yrs)": "0.683111954",
   "Average rural population (10 yrs)": "96260.27273",
   "Land area(Sq Km)": 5270,
   "Average % of Forest Cover (10 yrs)": "72.57202001",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.772701584",
   "continent": "Asia"
 },
 {
   "Country Name": "Bulgaria",
   "10 year GDP Average": "49087569095",
   "Average Arable Land %(10 yrs)": "29.78519107",
   "Average rural population (10 yrs)": "2053805.909",
   "Land area(Sq Km)": 108640,
   "Average % of Forest Cover (10 yrs)": "34.41628139",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.789427681",
   "continent": "Europe"
 },
 {
   "Country Name": "Burkina Faso",
   "10 year GDP Average": "9120991983",
   "Average Arable Land %(10 yrs)": "20.50438596",
   "Average rural population (10 yrs)": "11616342",
   "Land area(Sq Km)": 273600,
   "Average % of Forest Cover (10 yrs)": "20.64792663",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "35.84840759",
   "continent": "Africa"
 },
 {
   "Country Name": "Burundi",
   "10 year GDP Average": "2078028280",
   "Average Arable Land %(10 yrs)": "38.96417445",
   "Average rural population (10 yrs)": "8474608.091",
   "Land area(Sq Km)": 25680,
   "Average % of Forest Cover (10 yrs)": "9.331634098",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "40.97662492",
   "continent": "Africa"
 },
 {
   "Country Name": "Cabo Verde",
   "10 year GDP Average": "1610151091",
   "Average Arable Land %(10 yrs)": "12.63027295",
   "Average rural population (10 yrs)": "188598.8182",
   "Land area(Sq Km)": 4030,
   "Average % of Forest Cover (10 yrs)": "21.33837131",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.821341818",
   "continent": "Africa"
 },
 {
   "Country Name": "Cambodia",
   "10 year GDP Average": "11940749862",
   "Average Arable Land %(10 yrs)": "21.24405167",
   "Average rural population (10 yrs)": "11537394.73",
   "Land area(Sq Km)": 176520,
   "Average % of Forest Cover (10 yrs)": "57.183322",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "33.36544372",
   "continent": "Asia"
 },
 {
   "Country Name": "Cameroon",
   "10 year GDP Average": "24399293367",
   "Average Arable Land %(10 yrs)": "12.86518161",
   "Average rural population (10 yrs)": "9985803.727",
   "Land area(Sq Km)": 472710,
   "Average % of Forest Cover (10 yrs)": "42.13153942",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "22.67638302",
   "continent": "Africa"
 },
 {
   "Country Name": "Canada",
   "10 year GDP Average": "1.57E+12",
   "Average Arable Land %(10 yrs)": "4.921652915",
   "Average rural population (10 yrs)": "6478376.273",
   "Land area(Sq Km)": 9093510,
   "Average % of Forest Cover (10 yrs)": "38.19352283",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.631591515",
   "continent": "North America"
 },
 {
   "Country Name": "Cayman Islands",
   "10 year GDP Average": "3207032513",
   "Average Arable Land %(10 yrs)": "0.833333333",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 240,
   "Average % of Forest Cover (10 yrs)": "52.91666667",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.307553902",
   "continent": "North America"
 },
 {
   "Country Name": "Central African Republic",
   "10 year GDP Average": "1787656926",
   "Average Arable Land %(10 yrs)": "2.996885935",
   "Average rural population (10 yrs)": "2721344.364",
   "Land area(Sq Km)": 622980,
   "Average % of Forest Cover (10 yrs)": "35.7122219",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "51.66858749",
   "continent": "Africa"
 },
 {
   "Country Name": "Chad",
   "10 year GDP Average": "10477811482",
   "Average Arable Land %(10 yrs)": "3.649142313",
   "Average rural population (10 yrs)": "9323379.818",
   "Land area(Sq Km)": 1259200,
   "Average % of Forest Cover (10 yrs)": "4.374205845",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "53.6209697",
   "continent": "Africa"
 },
 {
   "Country Name": "Channel Islands",
   "10 year GDP Average": "10006017174",
   "Average Arable Land %(10 yrs)": "21.02105263",
   "Average rural population (10 yrs)": "109813.1818",
   "Land area(Sq Km)": 190,
   "Average % of Forest Cover (10 yrs)": "4.210526316",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Chile",
   "10 year GDP Average": "2.10E+11",
   "Average Arable Land %(10 yrs)": "1.769015994",
   "Average rural population (10 yrs)": "1945389.182",
   "Land area(Sq Km)": 743532,
   "Average % of Forest Cover (10 yrs)": "22.31193326",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.683552544",
   "continent": "South America"
 },
 {
   "Country Name": "China",
   "10 year GDP Average": "6.52E+12",
   "Average Arable Land %(10 yrs)": "11.46492117",
   "Average rural population (10 yrs)": "679016868.7",
   "Land area(Sq Km)": 9388211.8,
   "Average % of Forest Cover (10 yrs)": "21.3725208",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.832711034",
   "continent": "Asia"
 },
 {
   "Country Name": "Colombia",
   "10 year GDP Average": "2.76E+11",
   "Average Arable Land %(10 yrs)": "1.605930599",
   "Average rural population (10 yrs)": "11437637.18",
   "Land area(Sq Km)": 1109500,
   "Average % of Forest Cover (10 yrs)": "53.20053259",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.167414375",
   "continent": "South America"
 },
 {
   "Country Name": "Comoros",
   "10 year GDP Average": "528722360.1",
   "Average Arable Land %(10 yrs)": "34.92745836",
   "Average rural population (10 yrs)": "504534.5455",
   "Land area(Sq Km)": 1861,
   "Average % of Forest Cover (10 yrs)": "21.10302379",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "39.65231363",
   "continent": "Africa"
 },
 {
   "Country Name": "Congo, Dem. Rep.",
   "10 year GDP Average": "22724018950",
   "Average Arable Land %(10 yrs)": "3.032134271",
   "Average rural population (10 yrs)": "39659666",
   "Land area(Sq Km)": 2267050,
   "Average % of Forest Cover (10 yrs)": "67.98923711",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "22.8497037",
   "continent": "Africa"
 },
 {
   "Country Name": "Congo, Rep.",
   "10 year GDP Average": "10963033182",
   "Average Arable Land %(10 yrs)": "1.502196193",
   "Average rural population (10 yrs)": "1488607.545",
   "Land area(Sq Km)": 341500,
   "Average % of Forest Cover (10 yrs)": "65.61160655",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.417625168",
   "continent": "Africa"
 },
 {
   "Country Name": "Costa Rica",
   "10 year GDP Average": "37310946670",
   "Average Arable Land %(10 yrs)": "4.295142969",
   "Average rural population (10 yrs)": "1285048.273",
   "Land area(Sq Km)": 51060,
   "Average % of Forest Cover (10 yrs)": "51.21603817",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.234581104",
   "continent": "North America"
 },
 {
   "Country Name": "Cote d'Ivoire",
   "10 year GDP Average": "25298151132",
   "Average Arable Land %(10 yrs)": "9.056603774",
   "Average rural population (10 yrs)": "9984778.455",
   "Land area(Sq Km)": 318000,
   "Average % of Forest Cover (10 yrs)": "32.71383648",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "23.25690732",
   "continent": "Africa"
 },
 {
   "Country Name": "Croatia",
   "10 year GDP Average": "57381998154",
   "Average Arable Land %(10 yrs)": "15.60418156",
   "Average rural population (10 yrs)": "1845082.727",
   "Land area(Sq Km)": 55960,
   "Average % of Forest Cover (10 yrs)": "34.23711742",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.727649003",
   "continent": "Europe"
 },
 {
   "Country Name": "Cuba",
   "10 year GDP Average": "66206612370",
   "Average Arable Land %(10 yrs)": "31.98412443",
   "Average rural population (10 yrs)": "2648805.818",
   "Land area(Sq Km)": 106863,
   "Average % of Forest Cover (10 yrs)": "27.8028683",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.879375937",
   "continent": "North America"
 },
 {
   "Country Name": "Curacao",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "15013.90909",
   "Land area(Sq Km)": 444,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Cyprus",
   "10 year GDP Average": "23808286747",
   "Average Arable Land %(10 yrs)": "10.0508658",
   "Average rural population (10 yrs)": "357620.7273",
   "Land area(Sq Km)": 9240,
   "Average % of Forest Cover (10 yrs)": "18.70188902",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.407729295",
   "continent": "Europe"
 },
 {
   "Country Name": "Czech Republic",
   "10 year GDP Average": "1.97E+11",
   "Average Arable Land %(10 yrs)": "41.11542544",
   "Average rural population (10 yrs)": "2786349.091",
   "Land area(Sq Km)": 77260,
   "Average % of Forest Cover (10 yrs)": "34.40010204",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.315316817",
   "continent": "Europe"
 },
 {
   "Country Name": "Denmark",
   "10 year GDP Average": "3.21E+11",
   "Average Arable Land %(10 yrs)": "56.62652176",
   "Average rural population (10 yrs)": "731462.4545",
   "Land area(Sq Km)": 42430,
   "Average % of Forest Cover (10 yrs)": "13.83102622",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.383206696",
   "continent": "Europe"
 },
 {
   "Country Name": "Djibouti",
   "10 year GDP Average": "1169548271",
   "Average Arable Land %(10 yrs)": "0.068593615",
   "Average rural population (10 yrs)": "191102.3636",
   "Land area(Sq Km)": 23180,
   "Average % of Forest Cover (10 yrs)": "0.241587575",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.631854562",
   "continent": "Africa"
 },
 {
   "Country Name": "Dominica",
   "10 year GDP Average": "469449484.8",
   "Average Arable Land %(10 yrs)": "7.466666667",
   "Average rural population (10 yrs)": "22774.81818",
   "Land area(Sq Km)": 750,
   "Average % of Forest Cover (10 yrs)": "59.54666667",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "14.43411854",
   "continent": "North America"
 },
 {
   "Country Name": "Dominican Republic",
   "10 year GDP Average": "52582416507",
   "Average Arable Land %(10 yrs)": "16.68391637",
   "Average rural population (10 yrs)": "2603899.273",
   "Land area(Sq Km)": 48310,
   "Average % of Forest Cover (10 yrs)": "37.61690597",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.347251068",
   "continent": "North America"
 },
 {
   "Country Name": "Ecuador",
   "10 year GDP Average": "72541320818",
   "Average Arable Land %(10 yrs)": "4.775769045",
   "Average rural population (10 yrs)": "5565475.455",
   "Land area(Sq Km)": 248360,
   "Average % of Forest Cover (10 yrs)": "52.10805429",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.779172462",
   "continent": "South America"
 },
 {
   "Country Name": "Egypt, Arab Rep.",
   "10 year GDP Average": "2.12E+11",
   "Average Arable Land %(10 yrs)": "2.730021598",
   "Average rural population (10 yrs)": "47033433.64",
   "Land area(Sq Km)": 995450,
   "Average % of Forest Cover (10 yrs)": "0.070319956",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "12.9793469",
   "continent": "Africa"
 },
 {
   "Country Name": "El Salvador",
   "10 year GDP Average": "21951600000",
   "Average Arable Land %(10 yrs)": "33.11293436",
   "Average rural population (10 yrs)": "2157902.091",
   "Land area(Sq Km)": 20720,
   "Average % of Forest Cover (10 yrs)": "13.85135135",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "11.69677564",
   "continent": "North America"
 },
 {
   "Country Name": "Equatorial Guinea",
   "10 year GDP Average": "16525252856",
   "Average Arable Land %(10 yrs)": "4.420677362",
   "Average rural population (10 yrs)": "443896.1818",
   "Land area(Sq Km)": 28050,
   "Average % of Forest Cover (10 yrs)": "57.97763734",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.261686764",
   "continent": "Africa"
 },
 {
   "Country Name": "Eritrea",
   "10 year GDP Average": "1655603710",
   "Average Arable Land %(10 yrs)": "6.702970297",
   "Average rural population (10 yrs)": "3601049.429",
   "Land area(Sq Km)": 101000,
   "Average % of Forest Cover (10 yrs)": "15.16831683",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "21.52247574",
   "continent": "Africa"
 },
 {
   "Country Name": "Estonia",
   "10 year GDP Average": "21501148627",
   "Average Arable Land %(10 yrs)": "14.44326492",
   "Average rural population (10 yrs)": "424502.9091",
   "Land area(Sq Km)": 42390,
   "Average % of Forest Cover (10 yrs)": "52.80404898",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.312782025",
   "continent": "Europe"
 },
 {
   "Country Name": "Ethiopia",
   "10 year GDP Average": "34262849609",
   "Average Arable Land %(10 yrs)": "14.31532",
   "Average rural population (10 yrs)": "72380890.82",
   "Land area(Sq Km)": 1000000,
   "Average % of Forest Cover (10 yrs)": "12.54336364",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "45.29997077",
   "continent": "Africa"
 },
 {
   "Country Name": "Faroe Islands",
   "10 year GDP Average": "2265498889",
   "Average Arable Land %(10 yrs)": "2.148997135",
   "Average rural population (10 yrs)": "28618.36364",
   "Land area(Sq Km)": 1396,
   "Average % of Forest Cover (10 yrs)": "0.05730659",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Fiji",
   "10 year GDP Average": "3625530548",
   "Average Arable Land %(10 yrs)": "9.143951834",
   "Average rural population (10 yrs)": "413201",
   "Land area(Sq Km)": 18270,
   "Average % of Forest Cover (10 yrs)": "54.77369757",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "12.30653195",
   "continent": "Oceania"
 },
 {
   "Country Name": "Finland",
   "10 year GDP Average": "2.51E+11",
   "Average Arable Land %(10 yrs)": "7.394753947",
   "Average rural population (10 yrs)": "881440.6364",
   "Land area(Sq Km)": 304590,
   "Average % of Forest Cover (10 yrs)": "73.0196354",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.638586282",
   "continent": "Europe"
 },
 {
   "Country Name": "France",
   "10 year GDP Average": "2.64E+12",
   "Average Arable Land %(10 yrs)": "33.42543333",
   "Average rural population (10 yrs)": "14067048.09",
   "Land area(Sq Km)": 547557,
   "Average % of Forest Cover (10 yrs)": "29.9960469",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.732578908",
   "continent": "Europe"
 },
 {
   "Country Name": "French Polynesia",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "0.737704918",
   "Average rural population (10 yrs)": "117125.8182",
   "Land area(Sq Km)": 3660,
   "Average % of Forest Cover (10 yrs)": "40.48683557",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Gabon",
   "10 year GDP Average": "14488597533",
   "Average Arable Land %(10 yrs)": "1.261303217",
   "Average rural population (10 yrs)": "222345.5455",
   "Land area(Sq Km)": 257670,
   "Average % of Forest Cover (10 yrs)": "86.43896174",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.489434275",
   "continent": "Africa"
 },
 {
   "Country Name": "Gambia, The",
   "10 year GDP Average": "855043201.9",
   "Average Arable Land %(10 yrs)": "38.94268775",
   "Average rural population (10 yrs)": "742073.4545",
   "Land area(Sq Km)": 10120,
   "Average % of Forest Cover (10 yrs)": "47.4038807",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "25.44614415",
   "continent": "Africa"
 },
 {
   "Country Name": "Georgia",
   "10 year GDP Average": "12402312785",
   "Average Arable Land %(10 yrs)": "6.374154555",
   "Average rural population (10 yrs)": "1851264.364",
   "Land area(Sq Km)": 69490,
   "Average % of Forest Cover (10 yrs)": "40.42007352",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.2411499",
   "continent": "Asia"
 },
 {
   "Country Name": "Germany",
   "10 year GDP Average": "3.47E+12",
   "Average Arable Land %(10 yrs)": "34.07842301",
   "Average rural population (10 yrs)": "20959726.09",
   "Land area(Sq Km)": 348900,
   "Average % of Forest Cover (10 yrs)": "32.70659838",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.788664466",
   "continent": "Europe"
 },
 {
   "Country Name": "Ghana",
   "10 year GDP Average": "31640928315",
   "Average Arable Land %(10 yrs)": "19.79432188",
   "Average rural population (10 yrs)": "11963964.91",
   "Land area(Sq Km)": 227540,
   "Average % of Forest Cover (10 yrs)": "40.41047728",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "28.49142678",
   "continent": "Africa"
 },
 {
   "Country Name": "Gibraltar",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 10,
   "Average % of Forest Cover (10 yrs)": "0",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Greece",
   "10 year GDP Average": "2.75E+11",
   "Average Arable Land %(10 yrs)": "19.99456943",
   "Average rural population (10 yrs)": "2615167",
   "Land area(Sq Km)": 128900,
   "Average % of Forest Cover (10 yrs)": "30.27928627",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.625534627",
   "continent": "Europe"
 },
 {
   "Country Name": "Greenland",
   "10 year GDP Average": "2212523250",
   "Average Arable Land %(10 yrs)": "0.002192715",
   "Average rural population (10 yrs)": "8754.636364",
   "Land area(Sq Km)": 410450,
   "Average % of Forest Cover (10 yrs)": "0.000535997",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Grenada",
   "10 year GDP Average": "803389542.1",
   "Average Arable Land %(10 yrs)": "7.647058824",
   "Average rural population (10 yrs)": "67352.45455",
   "Land area(Sq Km)": 340,
   "Average % of Forest Cover (10 yrs)": "49.97058824",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.386827278",
   "continent": "North America"
 },
 {
   "Country Name": "Guam",
   "10 year GDP Average": "4897545455",
   "Average Arable Land %(10 yrs)": "2.222222222",
   "Average rural population (10 yrs)": "9544.090909",
   "Land area(Sq Km)": 540,
   "Average % of Forest Cover (10 yrs)": "46.2962963",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Guatemala",
   "10 year GDP Average": "44015946675",
   "Average Arable Land %(10 yrs)": "11.57045539",
   "Average rural population (10 yrs)": "7455612.909",
   "Land area(Sq Km)": 107160,
   "Average % of Forest Cover (10 yrs)": "34.81964098",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "11.91035681",
   "continent": "North America"
 },
 {
   "Country Name": "Guinea",
   "10 year GDP Average": "4923105623",
   "Average Arable Land %(10 yrs)": "11.79838841",
   "Average rural population (10 yrs)": "7185925.909",
   "Land area(Sq Km)": 245720,
   "Average % of Forest Cover (10 yrs)": "26.63193879",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "22.66418764",
   "continent": "Africa"
 },
 {
   "Country Name": "Guinea-Bissau",
   "10 year GDP Average": "882186745.4",
   "Average Arable Land %(10 yrs)": "10.31294452",
   "Average rural population (10 yrs)": "897331.7273",
   "Land area(Sq Km)": 28120,
   "Average % of Forest Cover (10 yrs)": "71.90611664",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "45.73976073",
   "continent": "Africa"
 },
 {
   "Country Name": "Guyana",
   "10 year GDP Average": "2262908386",
   "Average Arable Land %(10 yrs)": "2.133604267",
   "Average rural population (10 yrs)": "540269.1818",
   "Land area(Sq Km)": 196850,
   "Average % of Forest Cover (10 yrs)": "84.17299744",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "21.41548994",
   "continent": "South America"
 },
 {
   "Country Name": "Haiti",
   "10 year GDP Average": "6920371699",
   "Average Arable Land %(10 yrs)": "36.92427431",
   "Average rural population (10 yrs)": "4800570.545",
   "Land area(Sq Km)": 27560,
   "Average % of Forest Cover (10 yrs)": "3.664731495",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Honduras",
   "10 year GDP Average": "15541589973",
   "Average Arable Land %(10 yrs)": "9.194744839",
   "Average rural population (10 yrs)": "3613686.182",
   "Land area(Sq Km)": 111890,
   "Average % of Forest Cover (10 yrs)": "46.40271695",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "13.40302514",
   "continent": "North America"
 },
 {
   "Country Name": "Hong Kong SAR, China",
   "10 year GDP Average": "2.40E+11",
   "Average Arable Land %(10 yrs)": "3.552380952",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 1050,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.061838428",
   "continent": "Asia"
 },
 {
   "Country Name": "Hungary",
   "10 year GDP Average": "1.32E+11",
   "Average Arable Land %(10 yrs)": "49.86153852",
   "Average rural population (10 yrs)": "3111413.909",
   "Land area(Sq Km)": 90530,
   "Average % of Forest Cover (10 yrs)": "22.56229649",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.177055768",
   "continent": "Europe"
 },
 {
   "Country Name": "Iceland",
   "10 year GDP Average": "16103947538",
   "Average Arable Land %(10 yrs)": "1.237705736",
   "Average rural population (10 yrs)": "20232.54545",
   "Land area(Sq Km)": 100250,
   "Average % of Forest Cover (10 yrs)": "0.426751304",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.556084694",
   "continent": "Europe"
 },
 {
   "Country Name": "India",
   "10 year GDP Average": "1.53E+12",
   "Average Arable Land %(10 yrs)": "52.98393308",
   "Average rural population (10 yrs)": "848390910.4",
   "Land area(Sq Km)": 2973190,
   "Average % of Forest Cover (10 yrs)": "23.36403905",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.42318414",
   "continent": "Asia"
 },
 {
   "Country Name": "Indonesia",
   "10 year GDP Average": "6.69E+11",
   "Average Arable Land %(10 yrs)": "12.71526908",
   "Average rural population (10 yrs)": "120905425.2",
   "Land area(Sq Km)": 1811570,
   "Average % of Forest Cover (10 yrs)": "52.12761206",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "13.69305099",
   "continent": "Asia"
 },
 {
   "Country Name": "Iran, Islamic Rep.",
   "10 year GDP Average": "4.20E+11",
   "Average Arable Land %(10 yrs)": "9.602765294",
   "Average rural population (10 yrs)": "21848310.18",
   "Land area(Sq Km)": 1628760,
   "Average % of Forest Cover (10 yrs)": "6.564490778",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.394269706",
   "continent": "Asia"
 },
 {
   "Country Name": "Iraq",
   "10 year GDP Average": "1.48E+11",
   "Average Arable Land %(10 yrs)": "10.39333951",
   "Average rural population (10 yrs)": "9660359.091",
   "Land area(Sq Km)": 437370,
   "Average % of Forest Cover (10 yrs)": "1.89470425",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Asia"
 },
 {
   "Country Name": "Ireland",
   "10 year GDP Average": "2.45E+11",
   "Average Arable Land %(10 yrs)": "15.96893598",
   "Average rural population (10 yrs)": "1713661.545",
   "Land area(Sq Km)": 68890,
   "Average % of Forest Cover (10 yrs)": "10.5236807",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.123690967",
   "continent": "Europe"
 },
 {
   "Country Name": "Isle of Man",
   "10 year GDP Average": "5497947651",
   "Average Arable Land %(10 yrs)": "42.46842105",
   "Average rural population (10 yrs)": "40400.63636",
   "Land area(Sq Km)": 570,
   "Average % of Forest Cover (10 yrs)": "6.070175439",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Israel",
   "10 year GDP Average": "2.32E+11",
   "Average Arable Land %(10 yrs)": "13.83641405",
   "Average rural population (10 yrs)": "622615.3636",
   "Land area(Sq Km)": 21640,
   "Average % of Forest Cover (10 yrs)": "7.267686103",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Asia"
 },
 {
   "Country Name": "Italy",
   "10 year GDP Average": "2.10E+12",
   "Average Arable Land %(10 yrs)": "24.22009927",
   "Average rural population (10 yrs)": "18778205.27",
   "Land area(Sq Km)": 294140,
   "Average % of Forest Cover (10 yrs)": "30.69286734",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.141864669",
   "continent": "Europe"
 },
 {
   "Country Name": "Jamaica",
   "10 year GDP Average": "13320274051",
   "Average Arable Land %(10 yrs)": "11.27423823",
   "Average rural population (10 yrs)": "1266115.545",
   "Land area(Sq Km)": 10830,
   "Average % of Forest Cover (10 yrs)": "31.13153698",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.371911703",
   "continent": "North America"
 },
 {
   "Country Name": "Japan",
   "10 year GDP Average": "5.14E+12",
   "Average Arable Land %(10 yrs)": "11.76122901",
   "Average rural population (10 yrs)": "12499036.18",
   "Land area(Sq Km)": 364560,
   "Average % of Forest Cover (10 yrs)": "68.45875478",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.129172814",
   "continent": "Asia"
 },
 {
   "Country Name": "Jordan",
   "10 year GDP Average": "25789770034",
   "Average Arable Land %(10 yrs)": "2.1495476",
   "Average rural population (10 yrs)": "1132904.273",
   "Land area(Sq Km)": 88780,
   "Average % of Forest Cover (10 yrs)": "1.100664229",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.259908659",
   "continent": "Asia"
 },
 {
   "Country Name": "Kazakhstan",
   "10 year GDP Average": "1.53E+11",
   "Average Arable Land %(10 yrs)": "10.70282254",
   "Average rural population (10 yrs)": "7525552.636",
   "Land area(Sq Km)": 2699700,
   "Average % of Forest Cover (10 yrs)": "1.228520341",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.49138958",
   "continent": "Asia"
 },
 {
   "Country Name": "Kenya",
   "10 year GDP Average": "41972343186",
   "Average Arable Land %(10 yrs)": "9.746986682",
   "Average rural population (10 yrs)": "30884600.27",
   "Land area(Sq Km)": 569140,
   "Average % of Forest Cover (10 yrs)": "7.432266226",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.59549012",
   "continent": "Africa"
 },
 {
   "Country Name": "Kiribati",
   "10 year GDP Average": "152075596.4",
   "Average Arable Land %(10 yrs)": "2.469135802",
   "Average rural population (10 yrs)": "57542.09091",
   "Land area(Sq Km)": 810,
   "Average % of Forest Cover (10 yrs)": "15",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "24.209498",
   "continent": "Oceania"
 },
 {
   "Country Name": "Korea, Dem. People�s Rep.",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "19.64122581",
   "Average rural population (10 yrs)": "9732773.818",
   "Land area(Sq Km)": 120410,
   "Average % of Forest Cover (10 yrs)": "47.05136239",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Asia"
 },
 {
   "Country Name": "Korea, Rep.",
   "10 year GDP Average": "1.14E+12",
   "Average Arable Land %(10 yrs)": "15.90291278",
   "Average rural population (10 yrs)": "8926889.818",
   "Land area(Sq Km)": 97480,
   "Average % of Forest Cover (10 yrs)": "64.01023924",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.57844759",
   "continent": "Asia"
 },
 {
   "Country Name": "Kosovo",
   "10 year GDP Average": "5806453426",
   "Average Arable Land %(10 yrs)": "27.5558005",
   "Average rural population (10 yrs)": "#DIV/0!",
   "Land area(Sq Km)": 10887,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "15.27127443",
   "continent": "Europe"
 },
 {
   "Country Name": "Kuwait",
   "10 year GDP Average": "1.31E+11",
   "Average Arable Land %(10 yrs)": "0.59315376",
   "Average rural population (10 yrs)": "52990.18182",
   "Land area(Sq Km)": 17820,
   "Average % of Forest Cover (10 yrs)": "0.340016325",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.422065726",
   "continent": "Asia"
 },
 {
   "Country Name": "Kyrgyz Republic",
   "10 year GDP Average": "5263567726",
   "Average Arable Land %(10 yrs)": "6.66903024",
   "Average rural population (10 yrs)": "3549459.273",
   "Land area(Sq Km)": 191800,
   "Average % of Forest Cover (10 yrs)": "3.746279268",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "22.83565195",
   "continent": "Europe"
 },
 {
   "Country Name": "Lao PDR",
   "10 year GDP Average": "7430101461",
   "Average Arable Land %(10 yrs)": "5.863084922",
   "Average rural population (10 yrs)": "4179689.182",
   "Land area(Sq Km)": 230800,
   "Average % of Forest Cover (10 yrs)": "77.19046794",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "31.6280428",
   "continent": "Asia"
 },
 {
   "Country Name": "Latvia",
   "10 year GDP Average": "27261467222",
   "Average Arable Land %(10 yrs)": "18.89048749",
   "Average rural population (10 yrs)": "679821.5455",
   "Land area(Sq Km)": 62240,
   "Average % of Forest Cover (10 yrs)": "53.68685984",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.68088875",
   "continent": "Europe"
 },
 {
   "Country Name": "Lebanon",
   "10 year GDP Average": "35462960470",
   "Average Arable Land %(10 yrs)": "12.63831867",
   "Average rural population (10 yrs)": "592086.8182",
   "Land area(Sq Km)": 10230,
   "Average % of Forest Cover (10 yrs)": "13.38220919",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.624911714",
   "continent": "Asia"
 },
 {
   "Country Name": "Lesotho",
   "10 year GDP Average": "2202189312",
   "Average Arable Land %(10 yrs)": "10.13076416",
   "Average rural population (10 yrs)": "1517968.818",
   "Land area(Sq Km)": 30360,
   "Average % of Forest Cover (10 yrs)": "1.485207809",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.902076185",
   "continent": "Africa"
 },
 {
   "Country Name": "Liberia",
   "10 year GDP Average": "1316758282",
   "Average Arable Land %(10 yrs)": "4.754983389",
   "Average rural population (10 yrs)": "2039094.909",
   "Land area(Sq Km)": 96320,
   "Average % of Forest Cover (10 yrs)": "44.94393688",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "50.60392186",
   "continent": "Africa"
 },
 {
   "Country Name": "Libya",
   "10 year GDP Average": "61350555438",
   "Average Arable Land %(10 yrs)": "0.985598509",
   "Average rural population (10 yrs)": "1373202.364",
   "Land area(Sq Km)": 1759540,
   "Average % of Forest Cover (10 yrs)": "0.123327688",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.068290658",
   "continent": "Africa"
 },
 {
   "Country Name": "Liechtenstein",
   "10 year GDP Average": "5118036316",
   "Average Arable Land %(10 yrs)": "20.6375",
   "Average rural population (10 yrs)": "30990.45455",
   "Land area(Sq Km)": 160,
   "Average % of Forest Cover (10 yrs)": "43.125",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Lithuania",
   "10 year GDP Average": "40118916957",
   "Average Arable Land %(10 yrs)": "33.1088319",
   "Average rural population (10 yrs)": "1032753.727",
   "Land area(Sq Km)": 62680,
   "Average % of Forest Cover (10 yrs)": "34.45523218",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.852507557",
   "continent": "Europe"
 },
 {
   "Country Name": "Luxembourg",
   "10 year GDP Average": "53395891416",
   "Average Arable Land %(10 yrs)": "23.8015444",
   "Average rural population (10 yrs)": "58579.45455",
   "Land area(Sq Km)": 2590,
   "Average % of Forest Cover (10 yrs)": "33.47490347",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.334327528",
   "continent": "Europe"
 },
 {
   "Country Name": "Macao SAR, China",
   "10 year GDP Average": "31702448325",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 30.3,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0",
   "continent": "Asia"
 },
 {
   "Country Name": "Macedonia, FYR",
   "10 year GDP Average": "9330666724",
   "Average Arable Land %(10 yrs)": "16.74598059",
   "Average rural population (10 yrs)": "884097.4545",
   "Land area(Sq Km)": 25430,
   "Average % of Forest Cover (10 yrs)": "39.26204664",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "11.34141153",
   "continent": "Europe"
 },
 {
   "Country Name": "Madagascar",
   "10 year GDP Average": "8674340563",
   "Average Arable Land %(10 yrs)": "5.707914105",
   "Average rural population (10 yrs)": "14359961.18",
   "Land area(Sq Km)": 581800,
   "Average % of Forest Cover (10 yrs)": "21.67759484",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.13595367",
   "continent": "Africa"
 },
 {
   "Country Name": "Malawi",
   "10 year GDP Average": "5674062816",
   "Average Arable Land %(10 yrs)": "37.22952906",
   "Average rural population (10 yrs)": "12532337.91",
   "Land area(Sq Km)": 94280,
   "Average % of Forest Cover (10 yrs)": "34.55085432",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "32.00380985",
   "continent": "Africa"
 },
 {
   "Country Name": "Malaysia",
   "10 year GDP Average": "2.51E+11",
   "Average Arable Land %(10 yrs)": "2.864617258",
   "Average rural population (10 yrs)": "8164300.091",
   "Land area(Sq Km)": 328550,
   "Average % of Forest Cover (10 yrs)": "66.37290574",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.438419735",
   "continent": "Asia"
 },
 {
   "Country Name": "Maldives",
   "10 year GDP Average": "2292327558",
   "Average Arable Land %(10 yrs)": "12.16666667",
   "Average rural population (10 yrs)": "220888.3636",
   "Land area(Sq Km)": 300,
   "Average % of Forest Cover (10 yrs)": "3.333333333",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.798603767",
   "continent": "Asia"
 },
 {
   "Country Name": "Mali",
   "10 year GDP Average": "10625998229",
   "Average Arable Land %(10 yrs)": "5.073750809",
   "Average rural population (10 yrs)": "9684419.455",
   "Land area(Sq Km)": 1220190,
   "Average % of Forest Cover (10 yrs)": "4.187872381",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "37.36049119",
   "continent": "Africa"
 },
 {
   "Country Name": "Malta",
   "10 year GDP Average": "8796959105",
   "Average Arable Land %(10 yrs)": "26.65625",
   "Average rural population (10 yrs)": "22350.09091",
   "Land area(Sq Km)": 320,
   "Average % of Forest Cover (10 yrs)": "1.09375",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.666153191",
   "continent": "Europe"
 },
 {
   "Country Name": "Marshall Islands",
   "10 year GDP Average": "164891419.2",
   "Average Arable Land %(10 yrs)": "11.11111111",
   "Average rural population (10 yrs)": "15043.09091",
   "Land area(Sq Km)": 180,
   "Average % of Forest Cover (10 yrs)": "70.22222222",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "14.80440777",
   "continent": "Oceania"
 },
 {
   "Country Name": "Mauritania",
   "10 year GDP Average": "4209867262",
   "Average Arable Land %(10 yrs)": "0.401668769",
   "Average rural population (10 yrs)": "1556133.364",
   "Land area(Sq Km)": 1030700,
   "Average % of Forest Cover (10 yrs)": "0.236776418",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "23.01512836",
   "continent": "Africa"
 },
 {
   "Country Name": "Mauritius",
   "10 year GDP Average": "10035232507",
   "Average Arable Land %(10 yrs)": "39.06403941",
   "Average rural population (10 yrs)": "741722.4545",
   "Land area(Sq Km)": 2030,
   "Average % of Forest Cover (10 yrs)": "18.91625616",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.436237028",
   "continent": "Africa"
 },
 {
   "Country Name": "Mexico",
   "10 year GDP Average": "1.09E+12",
   "Average Arable Land %(10 yrs)": "12.01322513",
   "Average rural population (10 yrs)": "26244264.27",
   "Land area(Sq Km)": 1943950,
   "Average % of Forest Cover (10 yrs)": "34.22548747",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.427750315",
   "continent": "North America"
 },
 {
   "Country Name": "Micronesia, Fed. Sts.",
   "10 year GDP Average": "288780609.1",
   "Average Arable Land %(10 yrs)": "3.142857143",
   "Average rural population (10 yrs)": "81073.09091",
   "Land area(Sq Km)": 700,
   "Average % of Forest Cover (10 yrs)": "91.61298701",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.27170328",
   "continent": "Oceania"
 },
 {
   "Country Name": "Moldova",
   "10 year GDP Average": "5903672730",
   "Average Arable Land %(10 yrs)": "55.31081417",
   "Average rural population (10 yrs)": "1962246.545",
   "Land area(Sq Km)": 32890,
   "Average % of Forest Cover (10 yrs)": "11.74140509",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "14.27427522",
   "continent": "Europe"
 },
 {
   "Country Name": "Monaco",
   "10 year GDP Average": "5545711202",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 2,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Mongolia",
   "10 year GDP Average": "7892874548",
   "Average Arable Land %(10 yrs)": "0.421972759",
   "Average rural population (10 yrs)": "883074.8182",
   "Land area(Sq Km)": 1553560,
   "Average % of Forest Cover (10 yrs)": "8.003810603",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "16.82723288",
   "continent": "Asia"
 },
 {
   "Country Name": "Montenegro",
   "10 year GDP Average": "3917034509",
   "Average Arable Land %(10 yrs)": "10.14068567",
   "Average rural population (10 yrs)": "228271.3636",
   "Land area(Sq Km)": 13450,
   "Average % of Forest Cover (10 yrs)": "57.4112876",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.703350218",
   "continent": "Europe"
 },
 {
   "Country Name": "Morocco",
   "10 year GDP Average": "91416711356",
   "Average Arable Land %(10 yrs)": "17.96609904",
   "Average rural population (10 yrs)": "13620893.73",
   "Land area(Sq Km)": 446300,
   "Average % of Forest Cover (10 yrs)": "12.51889271",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "13.87024179",
   "continent": "Africa"
 },
 {
   "Country Name": "Mozambique",
   "10 year GDP Average": "12195175458",
   "Average Arable Land %(10 yrs)": "6.898700374",
   "Average rural population (10 yrs)": "16828847.36",
   "Land area(Sq Km)": 786380,
   "Average % of Forest Cover (10 yrs)": "49.58474853",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.33419866",
   "continent": "Africa"
 },
 {
   "Country Name": "Myanmar",
   "10 year GDP Average": "42999862537",
   "Average Arable Land %(10 yrs)": "16.28229333",
   "Average rural population (10 yrs)": "35513985.45",
   "Land area(Sq Km)": 653520,
   "Average % of Forest Cover (10 yrs)": "48.14260717",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "36.03307356",
   "continent": "Asia"
 },
 {
   "Country Name": "Namibia",
   "10 year GDP Average": "10464616322",
   "Average Arable Land %(10 yrs)": "0.974990587",
   "Average rural population (10 yrs)": "1288470.545",
   "Land area(Sq Km)": 823290,
   "Average % of Forest Cover (10 yrs)": "8.85471705",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "8.704856413",
   "continent": "Africa"
 },
 {
   "Country Name": "Nauru",
   "10 year GDP Average": "72883502.27",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 20,
   "Average % of Forest Cover (10 yrs)": "0",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Nepal",
   "10 year GDP Average": "15214534307",
   "Average Arable Land %(10 yrs)": "15.26920126",
   "Average rural population (10 yrs)": "22391302.91",
   "Land area(Sq Km)": 143350,
   "Average % of Forest Cover (10 yrs)": "25.3644925",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "34.95355161",
   "continent": "Asia"
 },
 {
   "Country Name": "Netherlands",
   "10 year GDP Average": "8.27E+11",
   "Average Arable Land %(10 yrs)": "31.08255051",
   "Average rural population (10 yrs)": "2175135.091",
   "Land area(Sq Km)": 33760,
   "Average % of Forest Cover (10 yrs)": "11.0186588",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.853979304",
   "continent": "Europe"
 },
 {
   "Country Name": "New Caledonia",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "0.359628009",
   "Average rural population (10 yrs)": "81987.09091",
   "Land area(Sq Km)": 18280,
   "Average % of Forest Cover (10 yrs)": "45.89715536",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "New Zealand",
   "10 year GDP Average": "1.52E+11",
   "Average Arable Land %(10 yrs)": "1.821047435",
   "Average rural population (10 yrs)": "601026.5455",
   "Land area(Sq Km)": 263310,
   "Average % of Forest Cover (10 yrs)": "38.58569747",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.067076548",
   "continent": "Oceania"
 },
 {
   "Country Name": "Nicaragua",
   "10 year GDP Average": "9248286208",
   "Average Arable Land %(10 yrs)": "13.78095396",
   "Average rural population (10 yrs)": "2446788.091",
   "Land area(Sq Km)": 120340,
   "Average % of Forest Cover (10 yrs)": "26.66988986",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.46656384",
   "continent": "North America"
 },
 {
   "Country Name": "Niger",
   "10 year GDP Average": "5842717891",
   "Average Arable Land %(10 yrs)": "11.95271177",
   "Average rural population (10 yrs)": "13542248.64",
   "Land area(Sq Km)": 1266700,
   "Average % of Forest Cover (10 yrs)": "0.950501303",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "40.10732914",
   "continent": "Africa"
 },
 {
   "Country Name": "Nigeria",
   "10 year GDP Average": "3.25E+11",
   "Average Arable Land %(10 yrs)": "38.18746775",
   "Average rural population (10 yrs)": "90114937.36",
   "Land area(Sq Km)": 910770,
   "Average % of Forest Cover (10 yrs)": "9.926765265",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "27.06330093",
   "continent": "Africa"
 },
 {
   "Country Name": "Northern Mariana Islands",
   "10 year GDP Average": "867636363.6",
   "Average Arable Land %(10 yrs)": "2.173913043",
   "Average rural population (10 yrs)": "5944.181818",
   "Land area(Sq Km)": 460,
   "Average % of Forest Cover (10 yrs)": "65.91106719",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Norway",
   "10 year GDP Average": "4.32E+11",
   "Average Arable Land %(10 yrs)": "2.278136593",
   "Average rural population (10 yrs)": "1023250.455",
   "Land area(Sq Km)": 365245,
   "Average % of Forest Cover (10 yrs)": "33.1339238",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.516206803",
   "continent": "Europe"
 },
 {
   "Country Name": "Oman",
   "10 year GDP Average": "59340891358",
   "Average Arable Land %(10 yrs)": "0.106494346",
   "Average rural population (10 yrs)": "790313.4545",
   "Land area(Sq Km)": 309500,
   "Average % of Forest Cover (10 yrs)": "0.006462036",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.268079956",
   "continent": "Asia"
 },
 {
   "Country Name": "Pakistan",
   "10 year GDP Average": "1.91E+11",
   "Average Arable Land %(10 yrs)": "38.94121005",
   "Average rural population (10 yrs)": "107858638.1",
   "Land area(Sq Km)": 770880,
   "Average % of Forest Cover (10 yrs)": "2.188408053",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "24.01897805",
   "continent": "Asia"
 },
 {
   "Country Name": "Palau",
   "10 year GDP Average": "212127272.7",
   "Average Arable Land %(10 yrs)": "2.173913043",
   "Average rural population (10 yrs)": "3482.636364",
   "Land area(Sq Km)": 460,
   "Average % of Forest Cover (10 yrs)": "87.60869565",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.460587897",
   "continent": "Oceania"
 },
 {
   "Country Name": "Panama",
   "10 year GDP Average": "32362708569",
   "Average Arable Land %(10 yrs)": "7.439991929",
   "Average rural population (10 yrs)": "1261525.182",
   "Land area(Sq Km)": 74340,
   "Average % of Forest Cover (10 yrs)": "63.21324626",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.239528426",
   "continent": "North America"
 },
 {
   "Country Name": "Papua New Guinea",
   "10 year GDP Average": "10316253505",
   "Average Arable Land %(10 yrs)": "0.627125381",
   "Average rural population (10 yrs)": "5956826.545",
   "Land area(Sq Km)": 452860,
   "Average % of Forest Cover (10 yrs)": "74.13489218",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "Paraguay",
   "10 year GDP Average": "20388754210",
   "Average Arable Land %(10 yrs)": "10.24213441",
   "Average rural population (10 yrs)": "2577513.364",
   "Land area(Sq Km)": 397300,
   "Average % of Forest Cover (10 yrs)": "42.59295701",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "20.54437313",
   "continent": "South America"
 },
 {
   "Country Name": "Peru",
   "10 year GDP Average": "1.46E+11",
   "Average Arable Land %(10 yrs)": "3.1795",
   "Average rural population (10 yrs)": "6791246.727",
   "Land area(Sq Km)": 1280000,
   "Average % of Forest Cover (10 yrs)": "58.4203125",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.546355491",
   "continent": "South America"
 },
 {
   "Country Name": "Philippines",
   "10 year GDP Average": "2.04E+11",
   "Average Arable Land %(10 yrs)": "18.08028977",
   "Average rural population (10 yrs)": "50983550.55",
   "Land area(Sq Km)": 298170,
   "Average % of Forest Cover (10 yrs)": "24.25157095",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "12.14188306",
   "continent": "Asia"
 },
 {
   "Country Name": "Poland",
   "10 year GDP Average": "4.64E+11",
   "Average Arable Land %(10 yrs)": "37.55279642",
   "Average rural population (10 yrs)": "14878976.36",
   "Land area(Sq Km)": 306330,
   "Average % of Forest Cover (10 yrs)": "30.44051495",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.03804006",
   "continent": "Europe"
 },
 {
   "Country Name": "Portugal",
   "10 year GDP Average": "2.28E+11",
   "Average Arable Land %(10 yrs)": "12.88418172",
   "Average rural population (10 yrs)": "4146206.818",
   "Land area(Sq Km)": 91605,
   "Average % of Forest Cover (10 yrs)": "35.37981777",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.314193713",
   "continent": "Europe"
 },
 {
   "Country Name": "Puerto Rico",
   "10 year GDP Average": "94854247258",
   "Average Arable Land %(10 yrs)": "6.87373168",
   "Average rural population (10 yrs)": "226950.6364",
   "Land area(Sq Km)": 8870,
   "Average % of Forest Cover (10 yrs)": "54.04847802",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.673557305",
   "continent": "North America"
 },
 {
   "Country Name": "Qatar",
   "10 year GDP Average": "1.32E+11",
   "Average Arable Land %(10 yrs)": "1.100775194",
   "Average rural population (10 yrs)": "21625.72727",
   "Land area(Sq Km)": 11610,
   "Average % of Forest Cover (10 yrs)": "0",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.117706409",
   "continent": "Asia"
 },
 {
   "Country Name": "Romania",
   "10 year GDP Average": "1.69E+11",
   "Average Arable Land %(10 yrs)": "38.50679204",
   "Average rural population (10 yrs)": "9421063.182",
   "Land area(Sq Km)": 230170,
   "Average % of Forest Cover (10 yrs)": "28.58649554",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.495117183",
   "continent": "Europe"
 },
 {
   "Country Name": "Russian Federation",
   "10 year GDP Average": "1.57E+12",
   "Average Arable Land %(10 yrs)": "7.403083139",
   "Average rural population (10 yrs)": "37657597.09",
   "Land area(Sq Km)": 16381390,
   "Average % of Forest Cover (10 yrs)": "49.6627822",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "4.26699533",
   "continent": "Europe"
 },
 {
   "Country Name": "Rwanda",
   "10 year GDP Average": "5675262436",
   "Average Arable Land %(10 yrs)": "45.74434536",
   "Average rural population (10 yrs)": "7796819.455",
   "Land area(Sq Km)": 24670,
   "Average % of Forest Cover (10 yrs)": "17.78015256",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "36.42346159",
   "continent": "Africa"
 },
 {
   "Country Name": "Samoa",
   "10 year GDP Average": "666013067.8",
   "Average Arable Land %(10 yrs)": "3.120141343",
   "Average rural population (10 yrs)": "148868",
   "Land area(Sq Km)": 2830,
   "Average % of Forest Cover (10 yrs)": "60.42402827",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Oceania"
 },
 {
   "Country Name": "San Marino",
   "10 year GDP Average": "1607966017",
   "Average Arable Land %(10 yrs)": "16.66666667",
   "Average rural population (10 yrs)": "1808.090909",
   "Land area(Sq Km)": 60,
   "Average % of Forest Cover (10 yrs)": "0",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Europe"
 },
 {
   "Country Name": "Sao Tome and Principe",
   "10 year GDP Average": "221328924.5",
   "Average Arable Land %(10 yrs)": "8.9375",
   "Average rural population (10 yrs)": "65212.63636",
   "Land area(Sq Km)": 960,
   "Average % of Forest Cover (10 yrs)": "56.51515152",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "11.96334763",
   "continent": "Africa"
 },
 {
   "Country Name": "Saudi Arabia",
   "10 year GDP Average": "5.59E+11",
   "Average Arable Land %(10 yrs)": "1.533104773",
   "Average rural population (10 yrs)": "5028013.545",
   "Land area(Sq Km)": 2149690,
   "Average % of Forest Cover (10 yrs)": "0.454484135",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.385362384",
   "continent": "Asia"
 },
 {
   "Country Name": "Senegal",
   "10 year GDP Average": "12787206693",
   "Average Arable Land %(10 yrs)": "17.17238872",
   "Average rural population (10 yrs)": "7525388.364",
   "Land area(Sq Km)": 192530,
   "Average % of Forest Cover (10 yrs)": "44.00872591",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "15.92629491",
   "continent": "Africa"
 },
 {
   "Country Name": "Serbia",
   "10 year GDP Average": "40235084155",
   "Average Arable Land %(10 yrs)": "29.90395609",
   "Average rural population (10 yrs)": "3261905.818",
   "Land area(Sq Km)": 87460,
   "Average % of Forest Cover (10 yrs)": "30.30268382",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.00269646",
   "continent": "Europe"
 },
 {
   "Country Name": "Seychelles",
   "10 year GDP Average": "1111365946",
   "Average Arable Land %(10 yrs)": "1.352173913",
   "Average rural population (10 yrs)": "41835",
   "Land area(Sq Km)": 460,
   "Average % of Forest Cover (10 yrs)": "88.41304348",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.95793384",
   "continent": "Africa"
 },
 {
   "Country Name": "Sierra Leone",
   "10 year GDP Average": "3107109940",
   "Average Arable Land %(10 yrs)": "20.99075921",
   "Average rural population (10 yrs)": "3560344.091",
   "Land area(Sq Km)": 72180,
   "Average % of Forest Cover (10 yrs)": "39.33852238",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "54.8346431",
   "continent": "Africa"
 },
 {
   "Country Name": "Singapore",
   "10 year GDP Average": "2.31E+11",
   "Average Arable Land %(10 yrs)": "0.891097628",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 709,
   "Average % of Forest Cover (10 yrs)": "23.31358535",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.04275201",
   "continent": "Asia"
 },
 {
   "Country Name": "Sint Maarten (Dutch part)",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "0",
   "Land area(Sq Km)": 34,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Slovak Republic",
   "10 year GDP Average": "88769711241",
   "Average Arable Land %(10 yrs)": "28.8480173",
   "Average rural population (10 yrs)": "2447916.455",
   "Land area(Sq Km)": 48100,
   "Average % of Forest Cover (10 yrs)": "40.2841566",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.668009589",
   "continent": "Europe"
 },
 {
   "Country Name": "Slovenia",
   "10 year GDP Average": "46858166885",
   "Average Arable Land %(10 yrs)": "9.029741807",
   "Average rural population (10 yrs)": "1018633.182",
   "Land area(Sq Km)": 20140,
   "Average % of Forest Cover (10 yrs)": "61.87595919",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.18504997",
   "continent": "Europe"
 },
 {
   "Country Name": "Solomon Islands",
   "10 year GDP Average": "774670959.9",
   "Average Arable Land %(10 yrs)": "0.646659521",
   "Average rural population (10 yrs)": "420239.1818",
   "Land area(Sq Km)": 27990,
   "Average % of Forest Cover (10 yrs)": "79.06395141",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "35.05459702",
   "continent": "Oceania"
 },
 {
   "Country Name": "Somalia",
   "10 year GDP Average": "5641333333",
   "Average Arable Land %(10 yrs)": "1.751841107",
   "Average rural population (10 yrs)": "6006413.455",
   "Land area(Sq Km)": 627340,
   "Average % of Forest Cover (10 yrs)": "10.75493353",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Africa"
 },
 {
   "Country Name": "South Africa",
   "10 year GDP Average": "3.30E+11",
   "Average Arable Land %(10 yrs)": "10.37853745",
   "Average rural population (10 yrs)": "19281395.9",
   "Land area(Sq Km)": 1213090,
   "Average % of Forest Cover (10 yrs)": "7.617736524",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.644215319",
   "continent": "Africa"
 },
 {
   "Country Name": "South Sudan",
   "10 year GDP Average": "13407414253",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "8310057.818",
   "Land area(Sq Km)": 0,
   "Average % of Forest Cover (10 yrs)": "#DIV/0!",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Africa"
 },
 {
   "Country Name": "Spain",
   "10 year GDP Average": "1.38E+12",
   "Average Arable Land %(10 yrs)": "25.06256042",
   "Average rural population (10 yrs)": "9899386.182",
   "Land area(Sq Km)": 500210,
   "Average % of Forest Cover (10 yrs)": "36.09077889",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "2.596946995",
   "continent": "Europe"
 },
 {
   "Country Name": "Sri Lanka",
   "10 year GDP Average": "54084410545",
   "Average Arable Land %(10 yrs)": "18.81677563",
   "Average rural population (10 yrs)": "16443092",
   "Land area(Sq Km)": 62710,
   "Average % of Forest Cover (10 yrs)": "33.45703889",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "8.753681816",
   "continent": "Asia"
 },
 {
   "Country Name": "St. Kitts and Nevis",
   "10 year GDP Average": "729138703.7",
   "Average Arable Land %(10 yrs)": "17.09230769",
   "Average rural population (10 yrs)": "35661.45455",
   "Land area(Sq Km)": 260,
   "Average % of Forest Cover (10 yrs)": "42.30769231",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.514503527",
   "continent": "North America"
 },
 {
   "Country Name": "St. Lucia",
   "10 year GDP Average": "1226968219",
   "Average Arable Land %(10 yrs)": "4.491803279",
   "Average rural population (10 yrs)": "141742.0909",
   "Land area(Sq Km)": 610,
   "Average % of Forest Cover (10 yrs)": "33.7704918",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "3.295598791",
   "continent": "North America"
 },
 {
   "Country Name": "St. Martin (French part)",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "#DIV/0!",
   "Land area(Sq Km)": 54.4,
   "Average % of Forest Cover (10 yrs)": "18.38235294",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "St. Vincent and the Grenadines",
   "10 year GDP Average": "677024868.7",
   "Average Arable Land %(10 yrs)": "12.82051282",
   "Average rural population (10 yrs)": "55933.54545",
   "Land area(Sq Km)": 390,
   "Average % of Forest Cover (10 yrs)": "68.53146853",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.033649487",
   "continent": "North America"
 },
 {
   "Country Name": "Sudan",
   "10 year GDP Average": "60762123864",
   "Average Arable Land %(10 yrs)": "8.216731481",
   "Average rural population (10 yrs)": "24115871.09",
   "Land area(Sq Km)": 2376000,
   "Average % of Forest Cover (10 yrs)": "10.09504668",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "31.97349643",
   "continent": "Africa"
 },
 {
   "Country Name": "Suriname",
   "10 year GDP Average": "4002482195",
   "Average Arable Land %(10 yrs)": "0.345512821",
   "Average rural population (10 yrs)": "174193.5455",
   "Land area(Sq Km)": 156000,
   "Average % of Forest Cover (10 yrs)": "98.40559441",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.807743584",
   "continent": "South America"
 },
 {
   "Country Name": "Swaziland",
   "10 year GDP Average": "4003830338",
   "Average Arable Land %(10 yrs)": "10.24418605",
   "Average rural population (10 yrs)": "936282.9091",
   "Land area(Sq Km)": 17200,
   "Average % of Forest Cover (10 yrs)": "32.74841438",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "7.418839749",
   "continent": "Africa"
 },
 {
   "Country Name": "Sweden",
   "10 year GDP Average": "4.99E+11",
   "Average Arable Land %(10 yrs)": "6.41407435",
   "Average rural population (10 yrs)": "1401176.273",
   "Land area(Sq Km)": 410340,
   "Average % of Forest Cover (10 yrs)": "68.694515",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.449796156",
   "continent": "Europe"
 },
 {
   "Country Name": "Switzerland",
   "10 year GDP Average": "5.82E+11",
   "Average Arable Land %(10 yrs)": "10.24437985",
   "Average rural population (10 yrs)": "2061749.818",
   "Land area(Sq Km)": 39518,
   "Average % of Forest Cover (10 yrs)": "31.25985221",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.776395466",
   "continent": "Europe"
 },
 {
   "Country Name": "Syrian Arab Republic",
   "10 year GDP Average": "34198938700",
   "Average Arable Land %(10 yrs)": "25.47991066",
   "Average rural population (10 yrs)": "8649348.182",
   "Land area(Sq Km)": 183640,
   "Average % of Forest Cover (10 yrs)": "2.629334891",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "18.88452587",
   "continent": "Asia"
 },
 {
   "Country Name": "Tajikistan",
   "10 year GDP Average": "5854296911",
   "Average Arable Land %(10 yrs)": "5.313000228",
   "Average rural population (10 yrs)": "5587020.273",
   "Land area(Sq Km)": 139960,
   "Average % of Forest Cover (10 yrs)": "2.937830865",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "24.49720705",
   "continent": "Asia"
 },
 {
   "Country Name": "Tanzania",
   "10 year GDP Average": "32319777496",
   "Average Arable Land %(10 yrs)": "13.17743283",
   "Average rural population (10 yrs)": "32872279.45",
   "Land area(Sq Km)": 885800,
   "Average % of Forest Cover (10 yrs)": "54.14109485",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "31.38274724",
   "continent": "Africa"
 },
 {
   "Country Name": "Thailand",
   "10 year GDP Average": "3.25E+11",
   "Average Arable Land %(10 yrs)": "30.97437805",
   "Average rural population (10 yrs)": "37392889.45",
   "Land area(Sq Km)": 510890,
   "Average % of Forest Cover (10 yrs)": "31.80581481",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.20347359",
   "continent": "Asia"
 },
 {
   "Country Name": "Timor-Leste",
   "10 year GDP Average": "960974418.2",
   "Average Arable Land %(10 yrs)": "10.6926698",
   "Average rural population (10 yrs)": "754799.6364",
   "Land area(Sq Km)": 14870,
   "Average % of Forest Cover (10 yrs)": "49.89912576",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "23.09290906",
   "continent": "Asia"
 },
 {
   "Country Name": "Togo",
   "10 year GDP Average": "3328649332",
   "Average Arable Land %(10 yrs)": "44.3463872",
   "Average rural population (10 yrs)": "3995658.091",
   "Land area(Sq Km)": 54390,
   "Average % of Forest Cover (10 yrs)": "5.276705277",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "37.40677387",
   "continent": "Africa"
 },
 {
   "Country Name": "Tonga",
   "10 year GDP Average": "374269713.7",
   "Average Arable Land %(10 yrs)": "23.33333333",
   "Average rural population (10 yrs)": "79434.54545",
   "Land area(Sq Km)": 720,
   "Average % of Forest Cover (10 yrs)": "12.5",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "19.20366683",
   "continent": "Oceania"
 },
 {
   "Country Name": "Trinidad and Tobago",
   "10 year GDP Average": "22954150022",
   "Average Arable Land %(10 yrs)": "4.873294347",
   "Average rural population (10 yrs)": "1207408.091",
   "Land area(Sq Km)": 5130,
   "Average % of Forest Cover (10 yrs)": "44.75349991",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.494686905",
   "continent": "North America"
 },
 {
   "Country Name": "Tunisia",
   "10 year GDP Average": "42331876500",
   "Average Arable Land %(10 yrs)": "18.04261071",
   "Average rural population (10 yrs)": "3626096.273",
   "Land area(Sq Km)": 155360,
   "Average % of Forest Cover (10 yrs)": "6.330165715",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.407671167",
   "continent": "Africa"
 },
 {
   "Country Name": "Turkey",
   "10 year GDP Average": "6.95E+11",
   "Average Arable Land %(10 yrs)": "27.99734938",
   "Average rural population (10 yrs)": "21292450",
   "Land area(Sq Km)": 769630,
   "Average % of Forest Cover (10 yrs)": "14.54606877",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "8.949396837",
   "continent": "Asia"
 },
 {
   "Country Name": "Turkmenistan",
   "10 year GDP Average": "25098048124",
   "Average Arable Land %(10 yrs)": "4.213393484",
   "Average rural population (10 yrs)": "2600807.545",
   "Land area(Sq Km)": 469930,
   "Average % of Forest Cover (10 yrs)": "8.782159045",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "14.73212696",
   "continent": "Asia"
 },
 {
   "Country Name": "Turks and Caicos Islands",
   "10 year GDP Average": "#DIV/0!",
   "Average Arable Land %(10 yrs)": "1.052631579",
   "Average rural population (10 yrs)": "3006.545455",
   "Land area(Sq Km)": 950,
   "Average % of Forest Cover (10 yrs)": "36.21052632",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "Tuvalu",
   "10 year GDP Average": "31675476.67",
   "Average Arable Land %(10 yrs)": "#DIV/0!",
   "Average rural population (10 yrs)": "4438.909091",
   "Land area(Sq Km)": 30,
   "Average % of Forest Cover (10 yrs)": "33.33333333",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "24.35435543",
   "continent": "Oceania"
 },
 {
   "Country Name": "Uganda",
   "10 year GDP Average": "18917728259",
   "Average Arable Land %(10 yrs)": "32.79543104",
   "Average rural population (10 yrs)": "28431889.45",
   "Land area(Sq Km)": 200520,
   "Average % of Forest Cover (10 yrs)": "13.75474605",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "26.32273813",
   "continent": "Africa"
 },
 {
   "Country Name": "Ukraine",
   "10 year GDP Average": "1.38E+11",
   "Average Arable Land %(10 yrs)": "56.07100118",
   "Average rural population (10 yrs)": "14390881.64",
   "Land area(Sq Km)": 579380,
   "Average % of Forest Cover (10 yrs)": "16.54528848",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.580389485",
   "continent": "Europe"
 },
 {
   "Country Name": "United Arab Emirates",
   "10 year GDP Average": "3.09E+11",
   "Average Arable Land %(10 yrs)": "0.565191388",
   "Average rural population (10 yrs)": "1199881.818",
   "Land area(Sq Km)": 83600,
   "Average % of Forest Cover (10 yrs)": "3.795454545",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "Asia"
 },
 {
   "Country Name": "United Kingdom",
   "10 year GDP Average": "2.71E+12",
   "Average Arable Land %(10 yrs)": "25.09192742",
   "Average rural population (10 yrs)": "11732087.55",
   "Land area(Sq Km)": 241930,
   "Average % of Forest Cover (10 yrs)": "12.69713629",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "0.664153576",
   "continent": "Europe"
 },
 {
   "Country Name": "United States",
   "10 year GDP Average": "1.54E+13",
   "Average Arable Land %(10 yrs)": "17.22876565",
   "Average rural population (10 yrs)": "59349804.45",
   "Land area(Sq Km)": 9161920,
   "Average % of Forest Cover (10 yrs)": "33.65782897",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "1.210094377",
   "continent": "North America"
 },
 {
   "Country Name": "Uruguay",
   "10 year GDP Average": "39100202905",
   "Average Arable Land %(10 yrs)": "11.23163067",
   "Average rural population (10 yrs)": "189605.3636",
   "Land area(Sq Km)": 175020,
   "Average % of Forest Cover (10 yrs)": "9.742730701",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "9.174200619",
   "continent": "South America"
 },
 {
   "Country Name": "Uzbekistan",
   "10 year GDP Average": "40120461692",
   "Average Arable Land %(10 yrs)": "10.2538787",
   "Average rural population (10 yrs)": "18211534.82",
   "Land area(Sq Km)": 425400,
   "Average % of Forest Cover (10 yrs)": "7.676667949",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "21.89281187",
   "continent": "Asia"
 },
 {
   "Country Name": "Vanuatu",
   "10 year GDP Average": "655693068.7",
   "Average Arable Land %(10 yrs)": "1.640689089",
   "Average rural population (10 yrs)": "178222",
   "Land area(Sq Km)": 12190,
   "Average % of Forest Cover (10 yrs)": "36.09515997",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "25.16436383",
   "continent": "Oceania"
 },
 {
   "Country Name": "Venezuela, RB",
   "10 year GDP Average": "2.96E+11",
   "Average Arable Land %(10 yrs)": "3.034861969",
   "Average rural population (10 yrs)": "3251358.273",
   "Land area(Sq Km)": 882050,
   "Average % of Forest Cover (10 yrs)": "53.66764407",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "5.040327023",
   "continent": "South America"
 },
 {
   "Country Name": "Vietnam",
   "10 year GDP Average": "1.24E+11",
   "Average Arable Land %(10 yrs)": "20.54590899",
   "Average rural population (10 yrs)": "60477011.64",
   "Land area(Sq Km)": 310070,
   "Average % of Forest Cover (10 yrs)": "45.20680081",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "20.50113517",
   "continent": "Asia"
 },
 {
   "Country Name": "Virgin Islands (U.S.)",
   "10 year GDP Average": "4184090909",
   "Average Arable Land %(10 yrs)": "3.142857143",
   "Average rural population (10 yrs)": "5781.636364",
   "Land area(Sq Km)": 350,
   "Average % of Forest Cover (10 yrs)": "51.89350649",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "#DIV/0!",
   "continent": "North America"
 },
 {
   "Country Name": "West Bank and Gaza",
   "10 year GDP Average": "8882795067",
   "Average Arable Land %(10 yrs)": "11.11046512",
   "Average rural population (10 yrs)": "989251.6364",
   "Land area(Sq Km)": 6020,
   "Average % of Forest Cover (10 yrs)": "1.523255814",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "6.260648627",
   "continent": "Europe"
 },
 {
   "Country Name": "Yemen, Rep.",
   "10 year GDP Average": "29995034542",
   "Average Arable Land %(10 yrs)": "2.394643635",
   "Average rural population (10 yrs)": "16086115.27",
   "Land area(Sq Km)": 527970,
   "Average % of Forest Cover (10 yrs)": "1.039831809",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.78105414",
   "continent": "Asia"
 },
 {
   "Country Name": "Zambia",
   "10 year GDP Average": "19451310468",
   "Average Arable Land %(10 yrs)": "4.518624141",
   "Average rural population (10 yrs)": "8558968.818",
   "Land area(Sq Km)": 743390,
   "Average % of Forest Cover (10 yrs)": "66.54380608",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "10.91758986",
   "continent": "Africa"
 },
 {
   "Country Name": "Zimbabwe",
   "10 year GDP Average": "9449206445",
   "Average Arable Land %(10 yrs)": "10.482099",
   "Average rural population (10 yrs)": "9426404.909",
   "Land area(Sq Km)": 386850,
   "Average % of Forest Cover (10 yrs)": "40.43921182",
   "Average Agriculture Contribution to GDP(% of GDP, 10 yrs)": "15.93301257",
   "continent": "Africa"
 }
];

var Country_continent_code = new Array();

var selectedCountries = new Array();
var selectedCountries_ESData = new Object();

var load_state =
{
  "Page3Part1" : false,
  "Page3Part2" : false,
  "Page3Part3" : false,
  "Page3Part4" : false
}
 var population = new Array();
  var gdparr = new Array();
  var arableland = new Array();
  var landarea = new Array();

//d3.json('data/10yravg.json',function(e,d2){

  // console.log(e);
 // CountryData = d2;
  CountryData.forEach(function(d) {
	  d.AvgRuralPopln = +d.AvgRuralPopln;
	  population.push(d.population);
	  d.AvgGDP = +d.AvgGDP;
	  gdparr.push(parseInt(d.AvgGDP));
	  d.AvgArableLand = +d.AvgArableLand;
	  arableland.push(parseInt(d.AvgArableLand));
	  d.LandArea = +d.LandArea;
	  landarea.push(d.landarea);
	  d.continent = +d.continent;
	  Country_continent_code.push(d.continent);
  });
 var gdp_range = d3.extent(gdparr);
  //var circle_size = d3.scaleLog().domain([pop_range[0],pop_range[1]]).range([2,10]);
  var x_new = d3.scale.log().base(Math.E)
                .domain([gdp_range[0],gdp_range[1]]).nice()
                .range([0,width]);
  var arableland_range = d3.extent(arableland);
  var y_new = d3.scale.linear()
                .domain([arableland_range[0],arableland_range[1]]).nice()
                .range([height,0]);

  //x.domain(d3.extent(CountryData, function(d) { return d.AvgGDP; })).nice();
  //y.domain(d3.extent(CountryData, function(d) { return d.AvgArableLand; })).nice();
var xAxis = d3.svg.axis()
    .scale(x_new)
	.tickValues([1000000000,  100000000000,  10000000000000])
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y_new)
	.tickValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    .orient("left");

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Average 10 year GDP(US$)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
	
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Arable Land (% of Land area)")

  svg.selectAll(".dot")
      .data(CountryData)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
	  .attr("cx",function(d) { return x_new(d["AvgGDP"]);  })      
      .attr("cy", function(d) { return y_new(d["AvgArableLand"]); })
      .style("fill", function(d) { return color(d.continent); });

  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

;
  
