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
    aerialSphere.setLookAt(0, 0)
}

const lookDown = () => {
    aerialSphere.setLookAt(0, 180)
}

const lookLeft = () => {
    aerialSphere.setLookAt(-90, 90)
}
const lookRight = () => {
    aerialSphere.setLookAt(90, 90)
}