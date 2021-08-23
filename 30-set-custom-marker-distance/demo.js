const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    lookAtLat: 33.32044654603967,
    lookAtLng: -111.74065486034277,
    cameraFov: 30,
    cameraFovMin: 10,
    cameraFovMax: 145,
    panoMarkerDistance: 10000,
    layers: [
        {
            name: 'default',
            visible: true,
            markers: [
                {
                    id: 200,
                    lat: 33.32014536578641,
                    lng: -111.74096326093542,
                    name: '<p>Nurburgring</p>',
                    icon: 'finish',
                },
                {
                    id: 201,
                    lat: 33.32046494747296,
                    lng: -111.74111692682645,
                    name:
                        '<h2>Letter C</h2><a href="https://topgolf.com/us/gilbert/">view website</a>',
                    description:
                        '<p>THE ONLY PROVIDER OF GEORECTIFIED, 360-DEGREE AERIAL PANORAMAS</p><p>AerialSphere is the only company to combine 360-degree aerial imagery with location data, giving companies new vantage points to make better informed decisions. Built upon nearly a decade of research and patented technological innovation, AerialSphere is changing how companies plan, develop and market their properties, products, and services. Our dedication to innovation has positioned us as a driving market force in a number of industries including real estate, retail, insurance and entertainment.</p>',
                    icon: 'letter_c',
                    hoverText: 'hover',
                    popup: false,
                },
                {
                    id: 501,
                    name: '<p>Main Event Gilbert</p>',
                    address: '1735 S Santan Village Pkwy, Gilbert, AZ 85295',
                    icon: 'search',
                },
                {
                    id: 500,
                    name: '<p>Gun Club 82 Gilbert</p>',
                    address: '1695 S Santan Village Pkwy #100, Gilbert, AZ 85295',
                    icon: 'poi',
                }
            ]
        }
    ]
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

const changeDistance = (e) => {
    aerialSphere.setCustomMarkerDistance(Number(e.value));
}
