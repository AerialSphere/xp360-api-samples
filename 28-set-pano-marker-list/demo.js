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
    aerialSphere.setSphereMarkerList([
        3079,
        3080,
        3081,
        3098,
        3099,
        3100,
        3141,
        3142,
        3143,
    ]);
}

const listOff = () => {
    aerialSphere.setSphereMarkerList([]);
}
