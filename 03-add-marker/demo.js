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

/* Basic marker */
aerialSphere.addMarker(baseLatitude, baseLongitude, undefined, "Test Marker 1");

/* Custom marker */
aerialSphere.addMarker(
  baseLatitude + 0.0006,
  baseLongitude + 0.0006,
  undefined, // address
  "Test Marker 2", // name/title
  undefined, // description
  { // custom icon
    url: "https://c2.peakpx.com/wallpaper/1003/267/588/hand-yes-ok-isolated-background-wallpaper-preview.jpg",
    teardrop: true,
    height: 40, 
    width: 40
});

/* Marker with fancy description */
aerialSphere.addMarker(
  baseLatitude + 0.0012,
  baseLongitude + 0.0012,
  undefined, // address
  "Test Marker 3", // name/title
  `<span style="color:blue">I am blue</span>
  <br>
  <b>I am bold</b>
  <hr>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Thumbs_up_icon.svg/1877px-Thumbs_up_icon.svg.png" alt="big thumbs up" width="90" height="90">
  `// description
);

/* Marker wih some of everything */
aerialSphere.addMarker(
  baseLatitude + 0.0018,
  baseLongitude + 0.0018,
  undefined, // address
  "Test Marker 4", // name/title
  "I have metadata", // description
  "park", // icon
  "parks-in-the-area", // layer
  "user-selected-id", // id
  "I show on hover", // hoverText
  true, // popup
  false, // isStatic
  {"item 1": "example metadata"}, // metaData
  "#00A19C", // iconColor
);
