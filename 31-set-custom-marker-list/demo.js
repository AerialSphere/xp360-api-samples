const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    lookAtLat: 33.32157801905037,
    lookAtLng: -111.73772630717852,
    cameraFov: 165,
    cameraFovMin: 10,
    cameraFovMax: 180,
    panoMarkerDistance: 10000,
    panoMarkerList: [],
    layers: [
        {
            name: 'default',
            visible: true,
            markers: [
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

const listOn = () => {
    aerialSphere.setCustomMarkerList([
        501
    ]);
}

const listOff = () => {
    aerialSphere.setCustomMarkerList([]);
}
