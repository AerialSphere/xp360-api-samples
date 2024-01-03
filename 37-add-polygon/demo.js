const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    title: 'Top Golf Gilbert',
    lookAtLat: 37.815,
    lookAtLng: -122.4775,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 360,
    panoMarkerDistance: 3000,
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

var polygon1 = {
        name: 'Main Event - Gilbert',
        color: 'purple',
        opacity: 0.4,
        id: 1010,
        points: [
            {
                lat: 33.31866770720616,
                lng: -111.74112412819676,
            },
            {
                lat: 33.3186520178922,
                lng: -111.74024302243467,
            },
            {
                lat: 33.31814323432299,
                lng: -111.74024838685328,
            },
            {
                lat: 33.31813651029117,
                lng: -111.74112681040609,
            },
        ],
    }

var polygon2 = {
        name: 'Continental Gun Club',
        color: 'orange',
        opacity: 0.6,
        id: 1001,
        points: [
            {
                lat: 33.3191291222461,
                lng: -111.74025249354713,
            },
            {
                lat: 33.31937692770532,
                lng: -111.74018023726859,
            },
            {
                lat: 33.31939265137819,
                lng: -111.74024120350361,
            },
            {
                lat: 33.31948762230524,
                lng: -111.74021636540638,
            },
            {
                lat: 33.3194775591659,
                lng: -111.74017120523229,
            },
            {
                lat: 33.319625990353515,
                lng: -111.74012755039733,
            },
            {
                lat: 33.31960271937894,
                lng: -111.73999733856205,
            },
            {
                lat: 33.31968574012769,
                lng: -111.7399747584743,
            },
            {
                lat: 33.31964422976254,
                lng: -111.73977906438688,
            },
            {
                lat: 33.319190759202264,
                lng: -111.73990852355294,
            },
            {
                lat: 33.31911402747401,
                lng: -111.74004099339695,
            },
            {
                lat: 33.3191291222461,
                lng: -111.74025249354713,
            },
        ],
    }

const addPolygonToViewer = async () => {
    await aerialSphere.addPolygon(polygon1);
    await aerialSphere.addPolygon(polygon2);
}