const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    lookAtLat: 37.815,
    lookAtLng: -122.4775,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 360,
    panoMarkerDistance: 10000,
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
    aerialSphere.setSphereMarkerDistance(Number(e.value));
}

