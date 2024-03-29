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

const findNearest = async () => {
aerialSphere.getNearestSphere(32.716130343042764, -117.16231495126135, (ps) => {
alert(`Closest Panorama to 32.716130343042764, -117.16231495126135: id: ${ps.sphereId}, distance: ${ps.distance} meters`)
});

};