const sphereData = {
    sphereLat: 36.01070751978051,
    sphereLng: -115.17535252989754,
};

const aerialSphere = new AerialSphere(
    'aerialSphereDivId',
    'aerialSphereIframeClassname',
    sphereData
);

aerialSphere.setWidgetEnabled(["fullScreen", "navigation"], false);
