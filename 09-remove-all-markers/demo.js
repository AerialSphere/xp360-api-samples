const sphereData = {
    sphereLat: 37.8199286,
    sphereLng: -122.4782551,
    lookAtLat: 37.815,
    lookAtLng: -122.4775,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 145,
    layers: [
        {
            name: 'default',
            visible: true,
            markers: [
                {
                    id: 1,
                    name: 'Golden Gate Bridge',
                    lat: 37.8199286,
                    lng: -122.4782551,
                    icon: 'poi'
                },
                {
                    id: 2,
                    name: 'Fort Point',
                    lat: 37.8106185,
                    lng: -122.4770527,
                    icon: 'poi'
                },
                {
                    id: 3,
                    name: 'Alcatraz',
                    lat: 37.826667,
                    lng: -122.423333,
                },
                {
                    id: 4,
                    name: 'Presidio of San Francisco',
                    lat: 37.79898590000001,
                    lng: -122.46618675,
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

const removeMarkers = () => {
    aerialSphere.removeAllMarkers()
}
