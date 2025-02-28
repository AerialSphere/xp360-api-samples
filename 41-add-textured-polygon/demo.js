const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    title: 'Top Golf Gilbert',
    lookAtLat: 33.32298908511398,
    lookAtLng: -111.72661149219313,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 360,
    panoMarkerDistance: 10000,
    texturedPolygonLayers: [
        {
            name: 'default textured',
            visible: true,
            texturedPolygons: [
                {
                    id: 98717293,
                    name: 'flag default',
                    center: {
                        lat: 33.32298908511398,
                        lng: -111.72661149219313,
                    },
                    opacity: 1,
                    dimensions: {
                        height: 3.81,
                        width: 6.4,
                    },
                    rotation: {
                        x: 90,
                        y: 0,
                        z: -90,
                    },
                    texture:
                        'https://aerialsphere-storages.s3.us-west-2.amazonaws.com/production/static/custom-icons/loop_202_sign.jpg',
                },
            ],
        },
    ],
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);