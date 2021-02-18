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

const lookUp = () => {
    aerialSphere.lookAt(0, -90)
}

const lookDown = () => {
    aerialSphere.lookAt(0, 180)
}

const lookLeft = () => {
    aerialSphere.lookAt(180, 90)
}
const lookRight = () => {
    aerialSphere.lookAt(-90, 90)
}