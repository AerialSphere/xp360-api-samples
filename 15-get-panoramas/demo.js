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

  // Alert values for x, y, lat, lng, pan and tilt.
  const getPanoramas = async () => {
    const ps = await aerialSphere.getPanoramas();
    alert(`current length of Panoramas list: ${ps.length}, first sphere id is ${ps[0].id}`)
  };