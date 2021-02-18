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

const getRange = () => {
    aerialSphere.getZoomRange((zoomRange) => {
        alert(`Current Zoom range is ${zoomRange.cameraZoomMin} to ${zoomRange.cameraZoomMax}`)
    });
}