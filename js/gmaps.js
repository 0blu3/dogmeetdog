'use strict';

gmapKey = 'AIzaSyBzjyXu_kKK9haFW2ljks0t5EiAt-D3V0c';

var parksMap;
function initMap() {
  var markerImg =  {
    url: 'Assets/images/map-icons/paw.png',
    size: new google.maps.Size(25, 22),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 22)
  };
  var myCenter = {lat: 47.6144960, lng: -122.3444780};
  var blueDogPond_loc = {lat: 47.5887420, lng: -122.2985700};
  var drJoseRizal_loc = {lat: 47.5922020, lng: -122.3174960};
  var genesee_loc = {lat: 47.5639080, lng: -122.2789660};
  var goldenGardens_loc = {lat: 47.6917670, lng: -122.4039400};
  var kinnear_loc = {lat: 47.6283100, lng: -122.3676950};
  var magnoliaManor_loc = {lat: 47.6516830, lng: -122.3928730};
  var magnuson_loc = {lat: 47.6829460, lng: -122.2597760};
  var northacres_loc = {lat: 47.7212900, lng: -122.3262670};
  var regrade_loc = {lat: 47.6144960, lng: -122.3444780};
  var westcrest_loc = {lat: 47.5223730, lng: -122.3434400};
  var woodland_loc = {lat: 47.6658280, lng: -122.3452840};

  var parksMap = new google.maps.Map(document.getElementById('parks-map'), {
    center: myCenter,
    zoom: 10,
    draggable: true,
    scrollwheel: false,
    scaleControl: false
  });
  var blueDogPondParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Blue Dog Pond Park</h3>' + '<h5 class="parkLocation">1520 26th Ave S, Seattle, WA</h5></div>';
  var blueDogPondParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: blueDogPondParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var blueDogPondPark = new google.maps.Marker({
    position: blueDogPond_loc,
    map: parksMap,
    icon: markerImg,
    title: 'Blue Dog Park'
  });
  blueDogPondPark.addListener('mouseover', function() {
    blueDogPondParkInfoWindow.open(parksMap, blueDogPondPark);
  });
  blueDogPondPark.addListener('mouseout', function() {
    blueDogPondParkInfoWindow.close(parksMap, blueDogPondPark);
  });
  var drJoseRizalParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Dr. Jose Rizal Park</h3>' + '<h5 class="parkLocation">1007 12th Ave S, Seattle, WA</h5></div>';
  var drJoseRizalParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: drJoseRizalParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var drJoseRizalPark = new google.maps.Marker({
    position: drJoseRizal_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Dr. Jose Rizal Park'
  });
  drJoseRizalPark.addListener('mouseover', function() {
    drJoseRizalParkInfoWindow.open(parksMap, drJoseRizalPark);

  });
  drJoseRizalPark.addListener('mouseout', function() {
    drJoseRizalParkInfoWindow.close(parksMap, drJoseRizalPark);
  });
  var geneseeParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Genesee Park and Playfield</h3>' + '<h5 class="parkLocation">4316 S Genesee St, Seattle, WA</h5></div>';
  var geneseeParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: geneseeParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var geneseePark = new google.maps.Marker({
    position: genesee_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Genesee Park and Playfield'
  });
  geneseePark.addListener('mouseover', function() {
    geneseeParkInfoWindow.open(parksMap, geneseePark);
  });
  geneseePark.addListener('mouseout', function() {
    geneseeParkInfoWindow.close(parksMap, geneseePark);
  });
  var goldenGardensParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Golden Gardens</h3>' + '<h5 class="parkLocation">8498 Seaview Pl NW, Seattle, WA</h5></div>';
  var goldenGardensParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: goldenGardensParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var goldenGardensPark = new google.maps.Marker({
    position: goldenGardens_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Golden Gardens Park'
  });
  goldenGardensPark.addListener('mouseover', function() {
    goldenGardensParkInfoWindow.open(parksMap, goldenGardensPark);
  });
  goldenGardensPark.addListener('mouseout', function() {
    goldenGardensParkInfoWindow.close(parksMap, goldenGardensPark);
  });
  var kinnearParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Kinnear Park</h3>' + '<h5 class="parkLocation">899 W Olympic Pl, Seattle, WA</h5></div>';
  var kinnearParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: kinnearParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var kinnearPark = new google.maps.Marker({
    position: kinnear_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Kinnear Park'
  });
  kinnearPark.addListener('mouseover', function() {
    kinnearParkInfoWindow.open(parksMap, kinnearPark);
  });
  kinnearPark.addListener('mouseout', function() {
    kinnearParkInfoWindow.close(parksMap, kinnearPark);
  });
  var magnoliaManorParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Magnolia Manor Park</h3>' + '<h5 class="parkLocation">3500 28th Ave W, Seattle, WA</h5></div>';
  var magnoliaManorParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: magnoliaManorParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var magnoliaManorPark = new google.maps.Marker({
    position: magnoliaManor_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Magnolia Manor Park'
  });
  magnoliaManorPark.addListener('mouseover', function() {
    magnoliaManorParkInfoWindow.open(parksMap, magnoliaManorPark);
  });
  magnoliaManorPark.addListener('mouseout', function() {
    magnoliaManorParkInfoWindow.close(parksMap, magnoliaManorPark);
  });
  var magnusonParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Magnuson Park</h3>' + '<h5 class="parkLocation">7400 Sand Point Way NE, Seattle, WA</h5></div>';
  var magnusonParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: magnusonParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var magnusonPark = new google.maps.Marker({
    position: magnuson_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Magnuson Park'
  });
  magnusonPark.addListener('mouseover', function() {
    magnusonParkInfoWindow.open(parksMap, magnusonPark);
  });
  magnusonPark.addListener('mouseout', function() {
    magnusonParkInfoWindow.close(parksMap, magnusonPark);
  });
  var northacresParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Northacres Park</h3>' + '<h5 class="parkLocation">12718 1st Ave NE, Seattle, WA</h5></div>';
  var northacresParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: northacresParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var northacresPark = new google.maps.Marker({
    position: northacres_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Northacres Park'
  });
  northacresPark.addListener('mouseover', function() {
    northacresParkInfoWindow.open(parksMap, northacresPark);
  });
  northacresPark.addListener('mouseout', function() {
    northacresParkInfoWindow.close(parksMap, northacresPark);
  });
  var regradeParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Regrade Park</h3>' + '<h5 class="parkLocation">2251 3rd Ave, Seattle, WA</h5></div>';
  var regradeParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: regradeParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var regradePark = new google.maps.Marker({
    position: regrade_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Regrade Park'
  });
  regradePark.addListener('mouseover', function() {
    regradeParkInfoWindow.open(parksMap, regradePark);
  });
  regradePark.addListener('mouseout', function() {
    regradeParkInfoWindow.close(parksMap, regradePark);
  });
  var westcrestParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Westcrest Park</h3>' + '<h5 class="parkLocation">9000 8th Ave SW, Seattle, WA</h5></div>';
  var westcrestParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: westcrestParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var westcrestPark = new google.maps.Marker({
    position: westcrest_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Westcrest Park'
  });
  westcrestPark.addListener('mouseover', function() {
    westcrestParkInfoWindow.open(parksMap, westcrestPark);
  });
  westcrestPark.addListener('mouseout', function() {
    westcrestParkInfoWindow.close(parksMap, westcrestPark);
  });
  var woodlandParkInfo = '<div id="content" class="parkInfo">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h3 id="firstHeading" class="firstHeading">Woodland Park</h3>' + '<h5 class="parkLocation">1000 N 50th St, Seattle, WA</h5></div>';
  var woodlandParkInfoWindow = new google.maps.InfoWindow({
    disableAutoPan: true,
    content: woodlandParkInfo,
    maxWidth: 500,
    maxHeight: 100
  });
  var woodlandPark = new google.maps.Marker({
    position: woodland_loc,
    icon: markerImg,
    map: parksMap,
    title: 'Woodland Park'
  });
  woodlandPark.addListener('mouseover', function() {
    woodlandParkInfoWindow.open(parksMap, woodlandPark);
  });
  woodlandPark.addListener('mouseout', function() {
    woodlandParkInfoWindow.close(parksMap, woodlandPark);
  });
}
