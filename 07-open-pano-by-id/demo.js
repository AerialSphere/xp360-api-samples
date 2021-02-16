const sphereData = {
    sphereLat: 37.8199286,
    sphereLng: -122.4782551,
    lookAtLat: 37.815,
    lookAtLng: -122.4775,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 145,
    layers: []
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

const openPano = (id) => {
    aerialSphere.openPanoramaById(id)
}