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
  const showCenterScreenUsingPositionInfo = () => {
    const mapElement = document.getElementById("aerialSphereDivId");
    if (!mapElement) return;
    const centerX = mapElement.clientWidth / 2;
    const centerY = mapElement.clientHeight / 2;
    aerialSphere.getPositionInfo(centerX, centerY, function(lat, lng, pan, tilt) {
      const positionInfo = {"x": centerX, "y": centerY, "lat": lat, "long": lng, "pan": pan, "tilt": tilt};
      const text = `Center of screen: ${JSON.stringify(positionInfo)}`;
      alert(text);
    });
  };