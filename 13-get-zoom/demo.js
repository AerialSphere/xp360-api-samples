const sphereData = {
    sphereLat: 37.8199286,
    sphereLng: -122.4782551,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 145,
    layers: [],
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

const getZoom = () => {
    aerialSphere.getZoom((response) => {
        alert(`Current Zoom is ${response.cameraZoom}`)
    });
}