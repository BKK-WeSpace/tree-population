const data = {
    "type": "Feature",
    "id": "lsajdflsjkdf234",
    "geometry": {
      "type": "Point",
      "coordinates": [100.541327, 13.731272]
    },
    "properties": {
      "isReward": true,
      "isVerified": true,
      "commonName": null,
      "species": "Quercus",
      "genus": "Fagaceae",
      "quote": {
        "quote": "The creation of a thousand forests is in one acorn.",
        "description": "Ralph Waldo Emerson"
      },
      "code": "oak_001",
      "isAlive": true,
      "health": "healthy",
      "crownSizeMeter": 3.2,
      "crownShape": "Oval",
      "lifeExpectancyYear": 200,
      "descriptiveFeatures": "Large, deciduous tree",
      "arboreals": ["Squirrels", "Birds"],
      "extinctArboreals": [],
      "hasEcobenefits": true,
      "diameterAtBreastHeightInches": 24,
      "archived": false,
      "crownLightexposure": "Partial",
      "location": {
        "shortDescription": "Central Park",
        "address": "Central Park",
        "no": "",
        "street": "",
        "district": "",
        "typeOfLandUse": "",
        "areaCharacteristics": "Urban park"
      },
      "management": {
        "urgency": "mid",
        "decorations": "None"
      }
    }
  }

const arrLngLat = [
    [13.73804248396313, 100.55918193989247],
    [13.738069841453218, 100.5591316484777],
    [13.737954549151924, 100.55931202701863],
    [13.738163544257114, 100.55901117307059],
    [13.747952254905876, 100.56300997357502],
    [13.748074982102658, 100.56305837163468],
    [13.747996685589948, 100.56295216157669],
    [13.747655865163619, 100.56331441373692],
    [13.74756006690244, 100.56331251712875],
    [13.747443082434227, 100.56330682730423],
    [13.7472057195284, 100.56322154932441],
    [13.747110623376562, 100.56317192845609],
    [13.74697514386067, 100.56321618490622],
    [13.746898285254316, 100.563142424156],
    [13.746769889724634, 100.56279475925675],
    [13.74665401628837, 100.5627652440983],
    [13.746661183719079, 100.56267546882466],
    [13.746025487618997, 100.56263702900233],
    [13.74591080839005, 100.56260997344042],
    [13.745966953436225, 100.56253249614947],
    [13.745889306028367, 100.56279321338243],
    [13.74547392897777, 100.56212780332854],
    [13.74504403876776, 100.56341526367686],
    [13.745042736068987, 100.56334418513573],
    [13.745053157658967, 100.56324092008543],
    [13.745074000837551, 100.56316447712612],
    [13.745109173697198, 100.56314972497607],
    [13.745120897982595, 100.56304243661214],
    [13.74514564924978, 100.56297940469831],
    [13.74516128162772, 100.56290430284355],
    [13.745175611306582, 100.56281310773419],
    [13.74463629369249, 100.56264278746086],
    [13.744814763666675, 100.56256500339698],
    [13.744507326252402, 100.56238529539027],
    [13.744086746207081, 100.56229874786267],
    [13.743342900978199, 100.562367144203],
    [13.74329860889419, 100.56247845588061],
    [13.74243771986063, 100.56225433181172],
    [13.742423390014295, 100.56237771343028],
    [13.742407757453474, 100.56244879196976],
    [13.742388216750578, 100.56251048277365],
    [13.742360859764672, 100.5622047109364],
    [13.742290513212541, 100.56221812198471],
    [13.742654797287399, 100.56181789818916],
    [13.742511284206634, 100.56163075764003],
    [13.742654797287399, 100.56179819918397],
    [13.74253041928914, 100.56146824084738],
    [13.742374149399948, 100.56144854185231],
    [13.742554338137166, 100.56149122303017],
    [13.74270104036955, 100.56128602505963],
    [13.742221068593969, 100.56128930822717],
    [13.7423295008367, 100.56222336936457],
    [13.74199304178608, 100.56220695352692],
    [13.741223423813759, 100.5619601412305],
    [13.740320818364241, 100.5620816740743],
    [13.740411710842007, 100.56155965043727],
    [13.74039576479583, 100.56139877522837],
    [13.73995405887855, 100.56203078498164],
    [13.73997000495479, 100.56209152358092],
    [13.739132834471166, 100.56192900678937],
    [13.739100942203667, 100.56194542262702],
    [13.738903210038805, 100.5616450128051],
    [13.73883942543696, 100.56155636728182],
    [13.738831452360502, 100.5615120445202],
    [13.73836422960384, 100.56186170186098],
    [13.73856036759205, 100.56220971761965],
    [13.738164902202188, 100.56200287806536],
    [13.73812344208235, 100.56212763843143],
    [13.738145766763164, 100.56181902068374],
    [13.738641693053202, 100.56123297527992],
    [13.738552394506103, 100.56123297527992],
    [13.738376986546665, 100.56121163469098],
    [13.738357851124972, 100.56121327627473],
    [13.736275307025458, 100.56110019747958],
    [13.736004977295625, 100.56156693404112],
    [13.73590919109609, 100.56171155663768],
    [13.73606313767722, 100.56204910343918],
    [13.735977898208025, 100.56158842069203],
    [13.735922492536416, 100.56167470730182],
    [13.736042703964694, 100.56205312053194],
]

export const asokTrees = arrLngLat.map((v, i) => ({
  ...data,
  id:`${v[1]}`,
  geometry: {
    ...data.geometry,
    coordinates: [v[1], v[0]]
  }
}));