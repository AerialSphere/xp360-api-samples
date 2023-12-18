const baseLatitude = 36.01070751978051;
const baseLongitude = -115.17535252989754;

const sphereData = {
  sphereLat: baseLatitude,
  sphereLng: baseLongitude,
  lookAtLat: baseLatitude + 0.0009,
  lookAtLng: baseLongitude + 0.0009,
  cameraFov: 30,
};

const aerialSphere = new AerialSphere(
  'aerialSphereDivId',
  'aerialSphereIframeClassname',
  sphereData
);

/* Basic Icon Marker */
aerialSphere.addMarker({
    lat: baseLatitude,
    lng: baseLongitude, 
    name: "Test Marker 1"
});

/* Basic Custom marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0006,
    lng: baseLongitude + 0.0006,
    name: "Test Marker 2", 
    icon: { // custom icon
        url: "https://c2.peakpx.com/wallpaper/1003/267/588/hand-yes-ok-isolated-background-wallpaper-preview.jpg",
        teardrop: true,
        height: 40, 
        width: 40
    }
});

/* Icon Marker with fancy description */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0012,
    lng: baseLongitude + 0.0012,
    name: "Test Marker 3", 
    description: `<span style="color:blue">I am blue</span>
        <br>
        <b>I am bold</b>
        <hr>
        <a href="https://www.aerialsphere.com/" target="_blank">Visit the AerialSphere Website</a><br>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1877px-Thumbs_up_icon.svg.png" alt="big thumbs up" width="90" height="90">`// description
});

/* Icon Marker wih some of everything */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0018,
    lng: baseLongitude + 0.0018,
    name: "Test Marker 4", 
    description: "I have metadata", 
    icon: "park", 
    layer: "parks-in-the-area", 
    id: "user-selected-id", 
    hoverText: "I show on hover", 
    popup: true, 
    isStatic: false, 
    metaData: {"item 1": "example metadata"}, 
    iconColor: "#00A19C", 
});

/* Basic Logo Marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0024,
    lng: baseLongitude + 0.0024,
    name: "Test Marker 5", 
    icon: "logo_walmart",
});

/* Basic Text Marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0034,
    lng: baseLongitude + 0.0034,
    name: "Test Marker 6", 
    icon: "text",
    iconText: "Text Marker",
    isStatic: true,
});