const sphereData = {
    sphereLat: 37.8199286,
    sphereLng: -122.4782551,
    cameraFov: 90,
    cameraFovMin: 10,
    cameraFovMax: 145,
    layers: [],
    cameraZoomMin: 5,
    cameraZoomMin : 15,
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

const getRange = () => {
    aerialSphere.getZoomRange((min, max) => {
        alert(`Current Zoom range is ${min} to ${max}`)
    });
}