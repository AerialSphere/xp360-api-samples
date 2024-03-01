const baseLatitude = 36.0107075197;
const baseLongitude = -115.1753525298;

const sphereData = {
  sphereLat: baseLatitude, 
  sphereLng: baseLongitude, 
  lookAtLat: baseLatitude + 0.0021, 
  lookAtLng: baseLongitude + 0.0021, 
  cameraFov: 30,
};

const aerialSphere = new AerialSphere(
  'aerialSphereDivId', 
  'aerialSphereIframeClassname', 
  sphereData
);

/* Basic marker */
aerialSphere.addMarker({
    lat: baseLatitude, 
    lng: baseLongitude, 
    name: "Test Marker 1"
});

/* Custom image marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0006, 
    lng: baseLongitude + 0.0006, 
    name: "Test Marker 2", 
    icon: { // custom icon
        url: "https://c2.peakpx.com/wallpaper/1003/267/588/hand-yes-ok-isolated-background-wallpaper-preview.jpg", 
        teardrop: true, 
        height: 40, 
        width: 40,
    }
});

/* Marker with fancy description */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0012, 
    lng: baseLongitude + 0.0012, 
    name: "Test Marker 3", 
    description: `<span style="color:blue">I am blue</span>
        <br>
        <b>I am bold</b>
        <hr>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1877px-Thumbs_up_icon.svg.png" alt="big thumbs up" width="90" height="90">`// description
});

/* Text marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0018, 
    lng: baseLongitude + 0.0018, 
    name: "Test Marker 4", 
    description: "Text marker", 
    icon: {
    	type: "text", 
      iconText: "TEXT", 
    }, 
    hoverText: "Text marker", 
});

/* Colored marker */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0024, 
    lng: baseLongitude + 0.0024, 
    name: "Test Marker 5", 
    description: "I'm not the default color", 
    icon: "money", 
    iconColor: "#09A190", 
});

/* Logo */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0030, 
    lng: baseLongitude + 0.0030, 
    name: "Test Marker 6", 
    description: "I use one of the pre-defined logos, found at https://aerialsphere.atlassian.net/wiki/spaces/CPD/pages/1698529414/Corporate+Logos", 
    icon: "logo_seveneleven", 
});

/* Clickable marker wih some of everything */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0036, 
    lng: baseLongitude + 0.0036, 
    name: "Test Marker 7", 
    description: "I have metadata", 
    icon: "park", 
    layer: "parks-in-the-area", 
    id: "user-selected-id", 
    hoverText: "I show on hover", 
    popup: true, 
    isStatic: false, 
    metaData: {"item 1": "example metadata"}, 
    iconColor: "#AA8520", 
});

/* Label (non-clickable marker) */
aerialSphere.addMarker({
    lat: baseLatitude + 0.0042, 
    lng: baseLongitude + 0.0042, 
    icon: "campfire", 
    popup: false, 
    isStatic: true, 
});
