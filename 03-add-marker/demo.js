const latitude = 36.01070751978051;
const longitude = -115.17535252989754;

const sphereData = {
    sphereLat: latitude,
    sphereLng: longitude,
    lookAtLat: latitude,
    lookAtLng: longitude,
    cameraFov: 30,
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

aerialSphere.addMarker(latitude, longitude, undefined, 'Test Marker');
