const sphereData = {
    sphereLat: 33.323741448909225,
    sphereLng: -111.73930440609989,
    title: 'Example',
    lookAtLat: 33.32044654603967,
    lookAtLng: -111.74065486034277,
    cameraFov: 30,
    cameraFovMin: 10,
    cameraFovMax: 145
}

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);
