const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    title: 'Example',
    lookAtLat: 33.32044654603967,
    lookAtLng: -111.74065486034277,
    cameraFov: 30,
    cameraFovMin: 10,
    cameraFovMax: 145,
    layers: [
        {
            name: 'default',
            visible: true,
            markers: [
                {
                    id: 1,
                    name: `<p style="font-family: 'Syne Mono', monospace;">Golden Gate Bridge</p>`,
                    lat: 37.8199286,
                    lng: -122.4782551,
                    icon: 'poi'
                },
                {
                    id: 2,
                    name: `<p style="font-family: 'DotGothic16', sans-serif, sans-serif;">Fort Point</p>`,
                    lat: 37.8106185,
                    lng: -122.4770527,
                    icon: 'poi'
                },
                {
                    id: 3,
                    name: `<p style="font-family: 'Stick', sans-serif;">Alcatraz</p>`,
                    lat: 37.826667,
                    lng: -122.423333,
                },
                {
                    id: 4,
                    name: `<p style="font-family: 'Comic Neue', cursive;">Presidio of San Francisco</p>`,
                    lat: 37.79898590000001,
                    lng: -122.46618675,
                }
            ]
        }
    ],
    fontFamilies: 'family=Comic+Neue:wght@300&family=DotGothic16&family=Stick&family=Syne+Mono'
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);
