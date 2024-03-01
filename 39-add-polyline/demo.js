const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    title: 'Top Golf Gilbert',
    lookAtLat: 33.317795,
    lookAtLng: -111.742894,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 360,
    panoMarkerDistance: 10000,
    polylineLayers: [
        {
            name: 'Polyline Layer Default',
            visible: true,
            polylines: [
                {
                    id: 39278576,
                    name: 'Top Golf to Macys',
                    points: [
                        {
                            lat: 33.319480707222354,
                            lng: -111.74172723186624,
                        },
                        {
                            lat: 33.319456745864194,
                            lng: -111.74303671981181,
                        },
                        {
                            lat: 33.316724851786425,
                            lng: -111.74298009552646,
                        },
                        {
                            lat: 33.31568925574641,
                            lng: -111.74326299293386,
                        },
                        {
                            lat: 33.31476579118903,
                            lng: -111.74375115504652,
                        },
                        {
                            lat: 33.31336206016777,
                            lng: -111.74527562936214,
                        },
                        {
                            lat: 33.31283835984726,
                            lng: -111.74464888471917,
                        },
                        {
                            lat: 33.31254303472224,
                            lng: -111.74504485468458,
                        },
                        {
                            lat: 33.31172465866678,
                            lng: -111.74404428541717,
                        },
                    ],
                    color: 'skyblue',
                    width: 1,
                    hoverText: "Top Golf Gilbert to Macy's",
                },
                {
                    id: 91987398,
                    name: 'Other Line 1',
                    points: [
                        {
                            lng: -111.74275491673401,
                            lat: 33.322323518629915,
                        },
                        {
                            lng: -111.74287902436305,
                            lat: 33.321848209560166,
                        },
                        {
                            lng: -111.74288936666547,
                            lat: 33.320651283419814,
                        },
                        {
                            lng: -111.74289453781668,
                            lat: 33.31779501419514,
                        },
                    ],
                    color: 'magenta',
                    width: 1.5,
                },
                {
                    id: 919872398,
                    name: 'Other Line 2',
                    points: [
                        {
                            lng: -111.74090881575232,
                            lat: 33.32138153995151,
                        },
                        {
                            lng: -111.74188099217966,
                            lat: 33.32126487215892,
                        },
                        {
                            lng: -111.74358747207872,
                            lat: 33.32126055112656,
                        },
                        {
                            lng: -111.7460696246592,
                            lat: 33.3212519090612,
                        },
                    ],
                    color: 'green',
                    width: 1.5,
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